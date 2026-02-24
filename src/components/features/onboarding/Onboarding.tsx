"use client";

import { useRouter } from "next/navigation";

export default function Onboarding() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24 max-w-4xl">
        {/* Logo/Brand */}
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

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: "1️⃣",
              title: "Encontre perto de si",
              desc: "Veja produtores auténticos e produtos locais próximos.",
            },
            {
              icon: "2️⃣",
              title: "Filtre por tipo de produto",
              desc: "Escolha vinho, frutas, mel e mais com facilidade.",
            },
            {
              icon: "3️⃣",
              title: "Contacte diretamente o produtor",
              desc: "Fale com os produtores e compre sem intermediários.",
            },
          ].map((step, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push("/produtores")}
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg"
          >
            Explorar produtores
          </button>
          <button
            onClick={() => router.push("/about")}
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold text-lg hover:bg-primary/10 transition-colors"
          >
            Como funciona
          </button>
        </div>
      </div>
    </div>
  );
}
