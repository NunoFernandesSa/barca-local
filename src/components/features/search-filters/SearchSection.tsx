import { SearchSectionProps } from "@/interface/filters";
import React from "react";
import SearchInput from "./SearchInput";
import SearchFilters from "./SearchFilters";

export default function SearchSection({
  onSearch,
  searchTerm,
  activeCategory,
  onCategoryChange,
}: SearchSectionProps) {
  return (
    <section className="container mx-auto px-6 my-6 flex md:flex-row flex-col w-full md:gap-3">
      <SearchInput onSearch={onSearch} searchTerm={searchTerm} />
      <SearchFilters
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </section>
  );
}
