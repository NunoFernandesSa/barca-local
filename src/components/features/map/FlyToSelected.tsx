"use client";

import { useMap } from "react-leaflet";
import { useEffect } from "react";

export function FlyToSelected({ producer }: { producer: any }) {
  const map = useMap();

  useEffect(() => {
    if (producer && map && producer.latitude && producer.longitude) {
      map.flyTo([producer.latitude, producer.longitude], 15, {
        duration: 1.5,
      });
    }
  }, [producer, map]);

  return null;
}
