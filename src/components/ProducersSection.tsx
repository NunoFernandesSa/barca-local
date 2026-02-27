"use client";

import {
  HOW_TO_APPEAR_ON_THE_APP_STEPS,
  PRODUCERS_SECTION_ADVANTAGES,
} from "@/constants/producers";
import Button from "./ui/Button";
import { useRouter } from "next/navigation";
import HowToAppearOnTheAppSteps from "./HowToAppearOnTheAppSteps";

export default function ProducersSection() {
  const router = useRouter();

  return (
    <section className="py-20 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        É produtor local?
      </h2>
      <h3 className="text-xl font-semibold text-primary text-center mb-4">
        JUNTE-SE GRATUITAMENTE
      </h3>
      <h4 className="text-xl text-gray-600 text-center mb-8">
        Faça parte da nossa comunidade e dê a conhecer os produtores locais de
        Ponte da Barca e arredores.
      </h4>

      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Como aparecer nos Produtores Locais?
            </h3>

            <div className="space-y-6">
              {HOW_TO_APPEAR_ON_THE_APP_STEPS.map((step) => (
                <HowToAppearOnTheAppSteps key={step.number} {...step} />
              ))}
              {/* Button to consult the form */}
              <Button
                onClick={() => router.push("/contacto")}
                variant="outline"
                className="cursor-pointer"
              >
                Consultar o formulário
              </Button>
            </div>

            <div className="mt-8 mb-4 p-4 bg-primary/10 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">
                📍 Já está presente ?
              </h4>
              <p className="text-gray-600">
                Se já faz parte da plataforma e pretende atualizar os seus
                dados, utilize também este formulário, indicando a sua
                solicitação.
              </p>
            </div>
          </div>

          {/* Advantages for producers */}
          <div className="bg-primary/10 border border-gray-100 rounded-xl p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Por que se juntar à Local na Barca ?
            </h3>
            {/* List of advantages */}
            <ul className="space-y-4">
              {PRODUCERS_SECTION_ADVANTAGES.map((advantage) => (
                <li key={advantage.id} className="flex items-start gap-3">
                  <span className="text-primary text-xl">{advantage.icon}</span>
                  <span className="text-gray-700 font-semibold">
                    {advantage.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
