import { SearchSectionProps } from "@/interface/filters";
import SearchInput from "./SearchInput";
import SearchFilters from "./SearchFilters";

export default function SearchSection({
  onSearch,
  searchTerm,
  activeCategory,
  onCategoryChange,
}: SearchSectionProps) {
  return (
    <section className="container flex flex-col items-start justify-center mx-auto px-6 my-6 gap-3">
      <SearchInput onSearch={onSearch} searchTerm={searchTerm} />
      <SearchFilters
        activeCategory={activeCategory}
        onCategoryChange={onCategoryChange}
      />
    </section>
  );
}
