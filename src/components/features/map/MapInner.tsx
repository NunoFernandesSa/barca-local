"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import type { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import { PRODUCERS } from "@/constants/producers";
import PinIcon from "./PinIcon";

const ponteDaBarcaPosition: LatLngExpression = [41.804, -8.417];

export function MapInner() {
  return (
    <div className="relative h-full w-full rounded-r-2xl overflow-hidden border border-border bg-primary-soft">
      <MapContainer
        center={ponteDaBarcaPosition}
        zoom={13}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {PRODUCERS.map((p) => (
          <Marker key={p.id} position={p.address.coords} icon={PinIcon()}>
            <Popup>
              <div className="text-sm">
                <div className="font-semibold">{p.name}</div>
                <div className="text-xs text-gray-500">{p.type}</div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
