// components/features/map/MapInner.tsx
"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import PinIcon from "./PinIcon";
import Link from "next/link";
import { FlyToSelected } from "./FlyToSelected";
import { useEffect, useRef } from "react";

const ponteDaBarcaPosition: LatLngExpression = [41.804, -8.417];

interface MapInnerProps {
  selectedProducer: any;
  producers: any[]; // Produtores com coordenadas
}

export function MapInner({ selectedProducer, producers }: MapInnerProps) {
  const markerRefs = useRef<{ [key: number]: any }>({});

  useEffect(() => {
    if (selectedProducer) {
      const marker = markerRefs.current[selectedProducer.id];
      if (marker) {
        marker.openPopup();
      }
    }
  }, [selectedProducer]);

  // Fallback se não houver produtores com coordenadas
  if (producers.length === 0) {
    return (
      <div className="relative h-full w-full rounded-r-2xl overflow-hidden border border-border bg-primary-soft flex items-center justify-center">
        <p className="text-gray-500">Nenhuma localização disponível</p>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full rounded-r-2xl overflow-hidden border border-border bg-primary-soft">
      <MapContainer
        center={ponteDaBarcaPosition}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToSelected producer={selectedProducer} />

        {producers.map(
          (p) =>
            p.coords && (
              <Marker
                key={p.id}
                position={p.coords}
                icon={PinIcon()}
                ref={(ref) => {
                  if (ref) {
                    markerRefs.current[p.id] = ref;
                  }
                }}
              >
                <Popup>
                  <div className="text-sm">
                    <div className="font-semibold text-lg">{p.name}</div>
                    <div className="font-thin text-sm">
                      {p.address.number}, {p.address.street}
                    </div>
                    <div className="font-thin text-sm">
                      {p.address.zipCode}, {p.address.city}
                    </div>
                    <div className="font-thin text-sm">{p.address.state}</div>
                    <div className="text-xs bg-gray-500 w-auto py-0.5 px-2 rounded-md text-white inline-block">
                      {Array.isArray(p.type) ? p.type.join(", ") : p.type}
                    </div>
                    <div className="w-full flex justify-end">
                      <Link
                        href={`/produtores/${p.id}`}
                        className="text-xs text-blue-500 underline block mt-2"
                      >
                        Ver detalhes
                      </Link>
                    </div>
                  </div>
                </Popup>
              </Marker>
            )
        )}
      </MapContainer>
    </div>
  );
}
