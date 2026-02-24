"use client";

import Button from "@/components/ui/Button";
import StepsCard from "@/components/ui/StepsCard";
import { STEPS } from "@/constants/steps";
import { useRouter } from "next/navigation";

export default function Hero() {
  const router = useRouter();

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-12 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Produtores locais
          </h1>

          <p className="text-xl text-gray-200 mb-2">
            Produtores locais de Ponte da Barca e arredores
          </p>

          <p className="text-lg text-gray-300">
            Encontre vinho, mel, frutas e muito mais diretamente dos produtores.
          </p>
        </div>

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

        <div className="flex justify-center">
          <Button onClick={() => router.push("/produtores")}>
            Explorar produtores locais →
          </Button>
        </div>
      </div>
    </section>
  );
}
