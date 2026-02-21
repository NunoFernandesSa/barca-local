"use client";

import { ProducerType } from "@/types/producers-props";
import { useState, useEffect, useRef } from "react";
import { ApiResponse, AsideProducersListProps } from "@/types/aside-props";
import { apiClient } from "../../../../lib/api/client";

export default function AsideProducersList({
  selectedProducer,
  setSelectedProducer,
  onProducersLoaded,
}: AsideProducersListProps) {
  const [producers, setProducers] = useState<ProducerType[]>([]);
  const [loading, setLoading] = useState(true);

  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current) return;

    let isMounted = true;
    hasLoaded.current = true;

    apiClient
      .get<ApiResponse>("/producers/")
      .then((data) => {
        setProducers(data.results);

        if (onProducersLoaded) {
          onProducersLoaded(data.results);
        }

        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Erro ao carregar produtores:", error);
        setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [onProducersLoaded]);

  if (loading) {
    return (
      <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto p-4">
        <p className="text-gray-500">Carregando produtores...</p>
      </aside>
    );
  }

  if (!producers || producers.length === 0) {
    return (
      <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto p-4">
        <p className="text-gray-500">Nenhum produtor encontrado</p>
      </aside>
    );
  }

  return (
    <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto">
      {producers.map((producer) => (
        <div
          key={producer.id}
          onClick={() => setSelectedProducer(producer)}
          className={`p-4 border-b cursor-pointer hover:bg-primary/10 transition ${
            selectedProducer?.id === producer.id ? "bg-primary/10" : ""
          }`}
        >
          <div className="font-semibold text-primary text-lg">
            {producer.name}
          </div>

          <div className="text-xs text-gray-600 mt-1">
            {producer.address?.number} {producer.address?.street}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {producer.address?.zip_code} {producer.address?.city}
          </div>
          <span className="text-xs text-foreground font-light bg-primary/20 px-2 py-0.5 rounded-full">
            {Array.isArray(producer.type)
              ? producer.type.join(", ")
              : producer.type}
          </span>
        </div>
      ))}
    </aside>
  );
}
