"use client";

import dynamic from "next/dynamic";
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
  console.log("🗺️ MapWrapper - produtores recebidos:", producers.length);

  return <MapInner selectedProducer={selectedProducer} producers={producers} />;
}
