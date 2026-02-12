"use client";

import dynamic from "next/dynamic";

const MapInner = dynamic(
  () => import("./MapInner").then((mod) => mod.MapInner),
  {
    ssr: false,
  },
);

export function MapWrapper() {
  return <MapInner />;
}
