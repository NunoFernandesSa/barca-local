"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { geocodeMultipleAddresses } from "../../../../lib/geocoding";
import { MapWrapperProps } from "@/types/map-props";

const MapInner = dynamic(
  () => import("./MapInner").then((mod) => mod.MapInner),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 rounded-r-2xl flex items-center justify-center">
        <p className="text-gray-500">Carregando mapa...</p>
      </div>
    ),
  }
);

export function MapWrapper({
  selectedProducer,
  producers = [],
}: MapWrapperProps) {
  const [producersWithCoords, setProducersWithCoords] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadCoordinates = async () => {
      // only geocode if there are producers and they don't have coordinates yet
      if (producers.length > 0 && producersWithCoords.length === 0) {
        setLoading(true);
        setProgress(0);

        console.log(`📍 A geocodificar ${producers.length} produtores...`);

        const enriched = await geocodeMultipleAddresses(
          producers,
          (current, total) => {
            setProgress(Math.round((current / total) * 100));
          }
        );

        setProducersWithCoords(enriched);
        setLoading(false);
      }
    };

    loadCoordinates();
  }, [producers, producersWithCoords.length]);

  if (loading) {
    return (
      <div className="h-full w-full bg-gray-100 rounded-r-2xl flex flex-col items-center justify-center">
        <p className="text-gray-500 mb-2">A carregar localizações...</p>
        <div className="w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-2">
          {progress}% • {producers.length} produtores
        </p>
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
