import Button from "@/components/ui/Button";
import StepsCard from "@/components/ui/StepsCard";
import { STEPS } from "@/constants/steps";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section className="min-h-screen flex flex-col justify-center">
      {/* Logo/Brand */}
      <section className="w-1/2 min-h-60">
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-4">
            Produtores locais
          </h1>
          <p className="text-xl text-gray-600">
            Produtores locais de Ponte da Barca e arredores
          </p>
          <p className="text-lg text-gray-600">
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
