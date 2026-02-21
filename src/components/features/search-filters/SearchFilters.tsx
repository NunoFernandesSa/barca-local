"use client";

import { ProducerType } from "@/types/producers-props";
import { useMemo } from "react";

interface SearchFiltersProps {
  producers?: ProducerType[];
  onCategoryChange: (category: string) => void;
  activeCategory: string;
}

export default function SearchFilters({
  producers = [],
  onCategoryChange,
  activeCategory,
}: SearchFiltersProps) {
  const categories = useMemo(() => {
    const uniqueCategories = new Set<string>();

    producers.forEach((producer) => {
      if (producer.categories && Array.isArray(producer.categories)) {
        producer.categories.forEach((cat) => {
          let categoryName = "";

          if (typeof cat === "string") {
            categoryName = cat;
          } else if (cat && typeof cat === "object" && "name" in cat) {
            categoryName = (cat as { name: string }).name;
          }

          if (categoryName) {
            uniqueCategories.add(categoryName);
          }
        });
      }
    });

    const result = Array.from(uniqueCategories).sort();
    return result;
  }, [producers]);

  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange("todos")}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
          activeCategory === "todos"
            ? "bg-primary text-white shadow-lg"
            : "bg-gray-300 text-gray-700 hover:bg-gray-200"
        }`}
      >
        Todos
      </button>

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
            activeCategory === category
              ? "bg-primary text-white shadow-lg"
              : "bg-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
