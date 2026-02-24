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

      {/* Section for producers explanation of how to appear on the platform */}
      <section className="pb-16 m-1 md:mx-16">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Você é produtor local ?
        </h2>

        <div className=" rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Explications pour les producteurs */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Como aparecer na Produtores Locais ?
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Preencha o formulário
                    </h4>
                    <p className="text-gray-600">
                      Indiquez suas coordenadas e as informações sobre sua
                      produção.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Nós o contactamos
                    </h4>
                    <p className="text-gray-600">
                      Nossa equipe se contactará em 48 horas para verificar suas
                      informações.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Apareça na plataforma
                    </h4>
                    <p className="text-gray-600">
                      Uma vez validado, seu perfil é criado e visível para todos
                      os visitantes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <h4 className="font-semibold text-primary mb-2">
                  📍 Já está presente ?
                </h4>
                <p className="text-gray-600">
                  Se você já está na plataforma e deseja modificar suas
                  informações, use também este formulário especificando sua
                  solicitação.
                </p>
              </div>
            </div>

            {/* Avantages pour les producteurs */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Por que se juntar à Local na Barca ?
              </h3>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">📈</span>
                  <span className="text-gray-700">
                    Visibilidade para os clientes locais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">🤝</span>
                  <span className="text-gray-700">
                    Contato direto sem intermediários
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">💶</span>
                  <span className="text-gray-700">
                    Gratuito para os produtores
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">🌱</span>
                  <span className="text-gray-700">
                    Valorização dos produtos locais
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary text-xl">📊</span>
                  <span className="text-gray-700">
                    Estatísticas de visibilidade
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
