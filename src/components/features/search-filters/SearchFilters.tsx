import { PRODUCTS_CATEGORIES } from "@/constants/products-categories";
import { SearchFilterProps } from "@/interface/filters";

export default function SearchFilters({
  activeCategory,
  onCategoryChange,
}: SearchFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 my-2">
      {PRODUCTS_CATEGORIES.map((category) => (
        <button
          key={category.slug}
          onClick={() => onCategoryChange(category.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeCategory === category.slug
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}
