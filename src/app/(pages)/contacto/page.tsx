"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  MdEmail,
  MdPhone,
  MdLocationOn,
  MdSend,
  MdCheckCircle,
  MdError,
} from "react-icons/md";

export default function ContactPage() {
  const router = useRouter();
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    producerName: "",
    producerLocation: "",
    message: "",
    type: "producteur",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("idle");

    try {
      // Ici tu ferais l'appel API pour envoyer le formulaire
      // await apiClient.post("/contact", formData);

      // Simulation d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setFormStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        producerName: "",
        producerLocation: "",
        message: "",
        type: "producteur",
      });

      // Reset du status après 5 secondes
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch (error) {
      setFormStatus("error");
    }
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacte-nos</h1>
          <p className="text-xl max-w-2xl mx-auto">
            É produtor local ou simplesmente está interessado na plataforma? Não
            hesite em contactar-nos!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Formulário de contato
            </h2>

            {/* Message de succès */}
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <MdCheckCircle className="text-green-500 text-xl" />
                <p className="text-green-700">
                  Mensagem enviada com sucesso! Responderemos assim que
                  possível.
                </p>
              </div>
            )}

            {/* Message d'erreur */}
            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <MdError className="text-red-500 text-xl" />
                <p className="text-red-700">
                  Ocorreu um erro. Tente novamente ou contacte-nos diretamente
                  por e-mail.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type de contact */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  É *
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value="producteur"
                      checked={formData.type === "producteur"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="text-primary"
                    />
                    <span>Produtor</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="type"
                      value="visiteur"
                      checked={formData.type === "visiteur"}
                      onChange={(e) =>
                        setFormData({ ...formData, type: e.target.value })
                      }
                      className="text-primary"
                    />
                    <span>Visitante</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="O seu nome"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="seu@email.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="(+351) 123 456 789"
                  />
                </div>

                {/* Nom de l'exploitation (si producteur) */}
                {formData.type === "producteur" && (
                  <>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nome da exploração *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.producerName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            producerName: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Nome da sua quinta / exploração"
                      />
                    </div>

                    {/* Localisation */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Localização *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.producerLocation}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            producerLocation: e.target.value,
                          })
                        }
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Localidade / Região"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Mensagem *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder={
                    formData.type === "producteur"
                      ? "Descreva sua produção, seus produtos, e qualquer informação que você deseja compartilhar..."
                      : "Sua mensagem..."
                  }
                />
              </div>

              {/* Bouton d'envoi */}
              <button
                type="submit"
                disabled={formStatus === "success"}
                className="w-full md:w-auto px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                <MdSend />
                {formStatus === "success"
                  ? "Mensagem enviada com sucesso!"
                  : "Enviar a mensagem"}
              </button>
            </form>
          </section>

          {/* Autres moyens de contact */}
          <section className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <MdEmail className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">E-mail</h3>
              <p className="text-gray-600">contact@localnabarca.pt</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <MdPhone className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Telefone</h3>
              <p className="text-gray-600">(+351) .........</p>
              <p className="text-sm text-gray-500">Seg-Sex, 9h-17h</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
