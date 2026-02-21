// app/page.tsx
"use client";

import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchSection from "@/components/features/search-filters/SearchSection";
import AsideProducersList from "@/components/features/aside/AsideProducersList"; // 👈 Único componente
import { useFilters } from "@/hooks/useFilters";
import { ProducerType } from "@/types/producers-props";
import { useState } from "react";

export default function Home() {
  const [selectedProducer, setSelectedProducer] = useState<ProducerType | null>(
    null
  );

  const { searchTerm, activeCategory, handleSearch, handleCategoryChange } =
    useFilters();

  return (
    <div className="min-h-screen bg-gray-50">
      <SearchSection
        onSearch={handleSearch}
        searchTerm={searchTerm}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <main className="container mx-auto px-3 md:px-6 h-[70vh] flex">
        <AsideProducersList
          selectedProducer={selectedProducer}
          setSelectedProducer={setSelectedProducer}
        />

        <div className="w-full md:w-3/4 h-full">
          <MapWrapper selectedProducer={selectedProducer} />
        </div>
      </main>
    </div>
  );
}
