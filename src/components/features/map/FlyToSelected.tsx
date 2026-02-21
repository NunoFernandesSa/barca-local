"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";
import { ProducerType } from "@/types/producers-props";

export function FlyToSelected({ producer }: { producer: ProducerType | null }) {
  const map = useMap();

  useEffect(() => {
    if (
      producer &&
      map &&
      producer.address?.latitude &&
      producer.address?.longitude
    ) {
      map.flyTo([producer.address?.latitude, producer.address?.longitude], 15, {
        duration: 1.5,
      });
    }
  }, [producer, map]);

  return null;
}
