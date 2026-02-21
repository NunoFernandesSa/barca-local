"use client";

import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchSection from "@/components/features/search-filters/SearchSection";
import AsideProducersList from "@/components/features/aside/AsideProducersList";
import { useFilters } from "@/hooks/useFilters";
import { ProducerType } from "@/types/producers-props";
import { useCallback, useState } from "react";

export default function Home() {
  const [selectedProducer, setSelectedProducer] = useState<ProducerType | null>(
    null
  );
  const [producers, setProducers] = useState<ProducerType[]>([]);
  const { searchTerm, activeCategory, handleSearch, handleCategoryChange } =
    useFilters();

  // function for handling producers loaded
  const handleProducersLoaded = useCallback((data: ProducerType[]) => {
    setProducers(data);
  }, []);

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
          onProducersLoaded={handleProducersLoaded}
        />

        <div className="w-full md:w-3/4 h-full">
          <MapWrapper
            selectedProducer={selectedProducer}
            producers={producers}
          />
        </div>
      </main>
    </div>
  );
}
