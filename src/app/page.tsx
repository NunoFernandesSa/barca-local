"use client";

import AsideProducersList from "@/components/features/aside/AsideProducersList";
import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchBar from "@/components/features/search-bar/SearchBar";
import { ProducerType } from "@/types/producers-props";
import { useState } from "react";

export default function Home() {
  const [selectedProducer, setSelectedProducer] = useState<ProducerType | null>(
    null
  );

  return (
    <div className="text-3xl text-white font-bold">
      <SearchBar />

      <main className="container md:px-3 px-6 mx-auto h-[70vh] flex">
        <AsideProducersList setSelectedProducer={setSelectedProducer} />

        <div className="w-full md:w-3/4 h-full">
          <MapWrapper selectedProducer={selectedProducer} />
        </div>
      </main>
    </div>
  );
}
