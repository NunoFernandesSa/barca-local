// app/contact/page.tsx
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
    type: "producteur", // "producteur" ou "visiteur"
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contactez-nous
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            Vous êtes producteur local ou simplement intéressé par la plateforme
            ? N&apos;hésitez pas à nous contacter !
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Formulaire de contact */}
          <section className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <h2 className="text-2xl font-bold text-primary mb-6">
              Formulaire de contact
            </h2>

            {/* Message de succès */}
            {formStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                <MdCheckCircle className="text-green-500 text-xl" />
                <p className="text-green-700">
                  Message envoyé avec succès ! Nous vous répondrons dans les
                  plus brefs délais.
                </p>
              </div>
            )}

            {/* Message d'erreur */}
            {formStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                <MdError className="text-red-500 text-xl" />
                <p className="text-red-700">
                  Une erreur est survenue. Veuillez réessayer ou nous contacter
                  directement par email.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Type de contact */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Vous êtes *
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
                    <span>Producteur</span>
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
                    <span>Visiteur</span>
                  </label>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nom */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Votre nom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="votre@email.com"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+351 123 456 789"
                  />
                </div>

                {/* Nom de l'exploitation (si producteur) */}
                {formData.type === "producteur" && (
                  <>
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Nom de l&apos;exploitation *
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
                        placeholder="Nom de votre ferme / exploitation"
                      />
                    </div>

                    {/* Localisation */}
                    <div>
                      <label className="block text-gray-700 font-medium mb-2">
                        Localisation *
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
                        placeholder="Ville / Région"
                      />
                    </div>
                  </>
                )}
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
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
                      ? "Décrivez votre production, vos produits, et toute information que vous souhaitez partager..."
                      : "Votre message..."
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
                  ? "Message envoyé !"
                  : "Envoyer le message"}
              </button>
            </form>
          </section>

          {/* Autres moyens de contact */}
          <section className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <MdEmail className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contact@localnabarca.pt</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <MdPhone className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Téléphone</h3>
              <p className="text-gray-600">+351 123 456 789</p>
              <p className="text-sm text-gray-500">Lun-Ven, 9h-18h</p>
            </div>

            <div className="bg-white rounded-xl p-6 text-center shadow-md">
              <MdLocationOn className="text-4xl text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-gray-800 mb-2">Adresse</h3>
              <p className="text-gray-600">Ponte da Barca</p>
              <p className="text-gray-600">Portugal</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
