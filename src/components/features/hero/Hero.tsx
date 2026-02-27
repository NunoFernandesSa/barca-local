"use client";

import Button from "@/components/ui/Button";
import StepsCard from "@/components/ui/StepsCard";
import { STEPS } from "@/constants/steps";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 min-h-screen flex flex-col justify-around py-12">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Produtores locais
          </h1>
          <p className="text-xl text-gray-200 mb-2">
            Descubra os produtores locais de Ponte da Barca e arredores
          </p>
          <p className="text-lg text-gray-300">
            Encontre vinho, mel, frutas e muito mais diretamente dos produtores.
          </p>
        </div>

        {/* Steps and button */}
        <div>
          {/* Steps cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {STEPS.map((step, index) => (
              <StepsCard key={index} index={index} step={step} />
            ))}
          </div>

          {/* Centered button CTA */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-xl text-gray-200 mb-4">
              Comece já a descobrir os tesouros da sua região !
            </p>
            <Button
              onClick={() => router.push("/produtores")}
              className="cursor-pointer"
              title="Explorar produtores locais"
            >
              Explorar produtores locais →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
