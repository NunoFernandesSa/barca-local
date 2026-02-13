"use client";

import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchBar from "@/components/features/search-bar/SearchBar";
import { PRODUCERS } from "@/constants/producers";
import { ProducerType } from "@/types/producers-props";
import { useState } from "react";

export default function Home() {
  const [selectedProducer, setSelectedProducer] = useState<ProducerType | null>(
    null,
  );

  return (
    <div className="text-3xl text-white font-bold">
      <SearchBar />

      <main className="container md:px-3 px-6 mx-auto h-[70vh] flex">
        <aside className="hidden md:block w-1/4 h-full rounded-l-2xl bg-accent">
          {PRODUCERS.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProducer(p)}
              className="p-4 border-b cursor-pointer hover:bg-gray-100 transition"
            >
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-500">{p.type}</div>
            </div>
          ))}
        </aside>
        <div className="w-full md:w-3/4 h-full">
          <MapWrapper selectedProducer={selectedProducer} />
        </div>
      </main>
    </div>
  );
}
