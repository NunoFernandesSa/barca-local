import { Metadata } from "next";
import Container from "@/components/shared/Container";
import { BiMapPin } from "react-icons/bi";
import ProductsInfo from "@/components/features/producers/ProductsInfo";
import ContactInfo from "@/components/features/producers/ContactInfo";
import AddressInfo from "@/components/features/producers/AddressInfo";
import ScheduleInfo from "@/components/features/producers/ScheduleInfo";
import Image from "next/image";
import Gallery from "@/components/features/producers/Gallery";

// ----- Props for the page -----
type Props = {
  params: Promise<{ id: string }>;
};

// ----- Metadata for SEO -----
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const producer = PRODUCERS.find((p) => p.id === parseInt(id));

  if (!producer) {
    return {
      title: "Produtor não encontrado",
    };
  }

  const type = Array.isArray(producer.type)
    ? producer.type.join(" e ")
    : producer.type;

  return {
    title: `${producer.name} | Produtor de ${type} em ${producer.address.city}`,
    description: `Conheça ${
      producer.name
    }, produtor de ${type.toLowerCase()} localizado em ${
      producer.address.city
    }. Produtos artesanais de qualidade da região do Minho.`,
  };
}

// fetch producer by ID
function getProducerById(id: string) {
  const numericId = parseInt(id, 10);
  return PRODUCERS.find((p) => p.id === numericId);
}

// Format producer type to display in the UI
function formatProducerType(type: string | string[]) {
  if (Array.isArray(type)) {
    return type.join(" • ");
  }
  return type;
}

export default async function ProducersDetailsPage({ params }: Props) {
  const { id } = await params;
  const producer = getProducerById(id);

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
            {formatProducerType(producer.type)}
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
                    producer.type
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
            {producer.images && producer.images.length > 0 && (
              <Gallery images={producer.images} producerName={producer.name} />
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
