import Button from "@/components/ui/Button";
import StepsCard from "@/components/ui/StepsCard";
import { STEPS } from "@/constants/steps";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      {/* Logo/Brand */}
      <section className="text-center">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Produtores locais
          </h1>
          <p className="text-xl text-gray-600">
            Produtores locais de Ponte da Barca e arredores
          </p>
        </div>
        {/* Hero */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl text-gray-700 mb-4">
            Descubra os produtores locais de Ponte da Barca
          </p>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Encontre vinho, mel, frutas e muito mais diretamente dos produtores.
          </p>
        </div>
      </section>

      {/* Steps Grid */}
      <section className="">
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {STEPS.map((step, index) => (
            <StepsCard
              key={index}
              index={index}
              step={step}
              isLast={index === STEPS.length - 1}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="w-full flex justify-center">
          <Button
            onClick={() => router.push("/produtores")}
            className="cursor-pointer"
          >
            Explorar produtores locais →
          </Button>
        </div>
      </section>
    </section>
  );
}
