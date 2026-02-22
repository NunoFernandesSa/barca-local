"use client";

import dynamic from "next/dynamic";
import { MapWrapperProps } from "@/types/map-props";
import { SpinnerLoader } from "@/components/shared/loaders/SpinnerLoader";

const MapInner = dynamic(
  () => import("./MapInner").then((mod) => mod.MapInner),
  {
    ssr: false,
    loading: () => (
      <div className="h-full w-full bg-gray-100 rounded-r-2xl flex items-center justify-center">
        <SpinnerLoader message="Carregando mapa..." />
      </div>
    ),
  }
);

export function MapWrapper({
  selectedProducer,
  producers = [],
}: MapWrapperProps) {
  return <MapInner selectedProducer={selectedProducer} producers={producers} />;
}
