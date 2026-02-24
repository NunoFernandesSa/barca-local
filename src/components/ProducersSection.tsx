"use client";

import Button from "./ui/Button";
import { useRouter } from "next/navigation";

export default function ProducersSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Você é produtor local ?
      </h2>
      <h3 className="text-xl font-semibold text-primary text-center mb-4">
        Junte-se GRATUITAMENTE
      </h3>
      <h4 className="text-xl text-gray-600 text-center mb-8">
        Faça parte da nossa comunidade e encontre produtores locais de Ponte da
        Barca e arredores.
      </h4>

      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
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

              <Button
                onClick={() => router.push("/contacto")}
                variant="outline"
                className="cursor-pointer"
              >
                Consultar o formulário
              </Button>
            </div>

            <div className="mt-8 mb-4 p-4 bg-primary/5 rounded-lg">
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
          <div className="bg-gray-50 border border-gray-100 rounded-xl p-8">
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
  );
}
