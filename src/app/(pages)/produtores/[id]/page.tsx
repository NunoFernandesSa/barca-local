import { Metadata } from "next";
import Container from "@/components/shared/Container";
import { BiMapPin } from "react-icons/bi";
import ProductsInfo from "@/components/features/producers/ProductsInfo";
import ContactInfo from "@/components/features/producers/ContactInfo";
import AddressInfo from "@/components/features/producers/AddressInfo";
import ScheduleInfo from "@/components/features/producers/ScheduleInfo";
import Gallery from "@/components/features/producers/Gallery";
import { apiClient } from "../../../../../lib/api/client";
import { ProducerType } from "@/types/producers-props";

// ----- Props for the page -----
type Props = {
  params: Promise<{ id: string }>;
};

// ----- Metadata for SEO -----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;

  try {
    const producer = await apiClient.get<ProducerType>(`/producers/${id}/`);

    if (!producer) {
      return {
        title: "Produtor não encontrado",
      };
    }

    // Extrair nomes das categorias
    const categories =
      producer.categories
        ?.map((c: { name?: string } | string) =>
          typeof c === "string" ? c : c.name
        )
        .join(" e ") || "produtos artesanais";

    return {
      title: `${producer.name} | Produtor de ${categories} em ${producer.address?.city}`,
      description: `Conheça ${
        producer.name
      }, produtor de ${categories.toLowerCase()} localizado em ${
        producer.address?.city
      }. Produtos artesanais de qualidade da região do Minho.`,
    };
  } catch (error) {
    return {
      title: "Produtor não encontrado",
    };
  }
}

// Format producer type to display in the UI
function formatProducerType(type: string | string[]) {
  if (!type || (Array.isArray(type) && type.length === 0)) {
    return "Produtor local";
  }

  return Array.isArray(type)
    ? type
        .map((t) => (typeof t === "string" ? t : (t as { name?: string }).name))
        .join(" • ")
    : type;
}

export default async function ProducersDetailsPage({ params }: Props) {
  const { id } = await params;
  const producer = await apiClient.get<ProducerType>(`/producers/${id}/`);

  // Handle case where producer is not found
  if (!producer) {
    return (
      <Container>
        <main className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Produtor não encontrado
          </h1>
        </main>
      </Container>
    );
  }

  return (
    <Container>
      <main className="container mx-auto md:px-6 py-8">
        {/* Name and Type of Producer */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {producer.name}
          </h1>
          <p className="text-xl text-primary">
            {formatProducerType(producer.categories)}
          </p>
          <p className="text-gray-600 flex items-center gap-1 mt-2">
            <BiMapPin className="w-4 h-4" />
            {producer.address.city}, {producer.address.state}
          </p>
        </div>

        {/* Grid of producer information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column - 2 columns on desktop */}
          <div className="lg:col-span-2 space-y-6">
            {/* About/Description */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Sobre</h2>
              <p className="text-gray-600 leading-relaxed">
                {producer.description ||
                  `${
                    producer.name
                  } é um produtor local dedicado à produção de ${formatProducerType(
                    producer.categories
                  ).toLowerCase()} na região de ${
                    producer.address.city
                  }. Com tradição e qualidade, oferece produtos artesanais frescos e autênticos.`}
              </p>
            </div>

            {/* Products */}
            {producer.products && producer.products.length > 0 && (
              <ProductsInfo producer={producer} />
            )}

            {/* Gallery (placeholder for future images) */}
            {producer.gallery_images && producer.gallery_images.length > 0 && (
              <Gallery
                images={producer.gallery_images.map((img) => img.image_url)}
                producerName={producer.name}
              />
            )}
          </div>

          {/* Right column - 1 column on desktop */}
          <div className="space-y-6">
            <ContactInfo producer={producer} />
            <AddressInfo producer={producer} />
            <ScheduleInfo />
          </div>
        </div>
      </main>
    </Container>
  );
}
