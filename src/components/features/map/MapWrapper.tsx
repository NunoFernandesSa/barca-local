"use client";

import dynamic from "next/dynamic";
import { ProducerType } from "@/types/producers-props";
import { useEffect, useState } from "react";
import { geocodeMultipleAddresses } from "../../../../lib/geocoding";

const MapInner = dynamic(
  () => import("./MapInner").then((mod) => mod.MapInner),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 flex items-center justify-center">
        <p className="text-gray-500">Carregando mapa...</p>
      </div>
    ),
  }
);

interface MapWrapperProps {
  selectedProducer: ProducerType | null;
  producers?: ProducerType[]; // Produtores vindos da API
}

export function MapWrapper({
  selectedProducer,
  producers = [],
}: MapWrapperProps) {
  const [producersWithCoords, setProducersWithCoords] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const geocodeProducers = async () => {
      if (producers.length > 0) {
        setLoading(true);
        const enriched = await geocodeMultipleAddresses(producers);
        setProducersWithCoords(enriched);
        setLoading(false);
      }
    };

    geocodeProducers();
  }, [producers]);

  if (loading) {
    return (
      <div className="h-full w-full bg-gray-100 rounded-r-2xl flex items-center justify-center">
        <p className="text-gray-500">A carregar localizações...</p>
      </div>
    );
  }

  return (
    <MapInner
      selectedProducer={selectedProducer}
      producers={producersWithCoords}
    />
  );
}
