import { ProducerType } from "@/types/producers-props";

const geocodeCache = new Map();

export async function geocodeAddress(address: {
  street: string;
  number: string;
  city: string;
  zipCode: string;
}) {
  const cacheKey = `${address.street}|${address.number}|${address.city}|${address.zipCode}`;

  // Check if address is already in cache
  if (geocodeCache.has(cacheKey)) {
    console.log("📍 Usando cache para:", address.street);
    return geocodeCache.get(cacheKey);
  }

  const query = `${address.number} ${address.street}, ${address.zipCode} ${address.city}, Portugal`;

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query
      )}&countrycodes=pt&limit=1`,
      {
        headers: {
          "User-Agent": "ProdutoresLocais/1.0",
        },
      }
    );

    const data = await response.json();

    if (data && data.length > 0) {
      const result = {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
      };
      geocodeCache.set(cacheKey, result); // 👈 Guarda em cache
      return result;
    }

    // Fallback: try only with city
    const cityQuery = `${address.city}, Portugal`;
    const cityResponse = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        cityQuery
      )}&countrycodes=pt&limit=1`,
      {
        headers: { "User-Agent": "ProdutoresLocais/1.0" },
      }
    );

    const cityData = await cityResponse.json();

    if (cityData && cityData.length > 0) {
      const result = {
        lat: parseFloat(cityData[0].lat),
        lng: parseFloat(cityData[0].lon),
      };
      geocodeCache.set(cacheKey, result); // save on cache
      return result;
    }

    geocodeCache.set(cacheKey, null); // Save failure also
    return null;
  } catch (error) {
    console.error("Erro no geocoding:", error);
    return null;
  }
}

export async function geocodeMultipleAddresses(
  producers: any[],
  onProgress?: (current: number, total: number) => void
) {
  const results = [];

  for (let i = 0; i < producers.length; i++) {
    const producer = producers[i];

    // Rate limiting: 1 request per second (required by Nominatim)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const coords = await geocodeAddress({
      street: producer.street,
      number: producer.number,
      city: producer.city,
      zipCode: producer.zip_code,
    });

    results.push({
      ...producer,
      latitude: coords?.lat || null,
      longitude: coords?.lng || null,
    });

    // Callback for showing progress in UI
    if (onProgress) {
      onProgress(i + 1, producers.length);
    }

    console.log(
      `📍 [${i + 1}/${producers.length}] ${producer.name}:`,
      coords ? "✅" : "❌"
    );
  }

  // final statistics
  const comCoords = results.filter((p) => p.latitude).length;
  console.log(`✅ ${comCoords}/${results.length} produtores com coordenadas`);

  return results;
}
