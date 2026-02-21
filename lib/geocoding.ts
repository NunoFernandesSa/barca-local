export async function geocodeAddress(address: {
  street: string;
  number: string;
  city: string;
  zipCode: string;
}) {
  // Construir endereço completo
  const query = `${address.number} ${address.street}, ${address.zipCode} ${address.city}, Portugal`;

  // Pequeno delay para não sobrecarregar a API
  await new Promise((resolve) => setTimeout(resolve, 1000));

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
      return {
        lat: parseFloat(data[0].lat),
        lng: parseFloat(data[0].lon),
        displayName: data[0].display_name,
      };
    }

    // Fallback: tentar só com cidade
    if (!address.street) {
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
        return {
          lat: parseFloat(cityData[0].lat),
          lng: parseFloat(cityData[0].lon),
          displayName: cityData[0].display_name,
        };
      }
    }

    return null;
  } catch (error) {
    console.error("Erro no geocoding:", error);
    return null;
  }
}

// Para geocodificar múltiplos endereços em lote
export async function geocodeMultipleAddresses(addresses: any[]) {
  const results = [];

  for (const addr of addresses) {
    const coords = await geocodeAddress({
      street: addr.street,
      number: addr.number,
      city: addr.city,
      zipCode: addr.zipCode,
    });

    results.push({
      ...addr,
      coords: coords ? [coords.lat, coords.lng] : [41.804, -8.417], // Fallback para centro da cidade
    });

    // Aguarda 1 segundo entre requisições (rate limit)
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }

  return results;
}
