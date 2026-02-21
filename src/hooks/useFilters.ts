import { useState, useMemo } from "react";
import { ProducerType } from "@/types/producers-props";

interface UseFiltersProps {
  initialProducers?: ProducerType[];
}

export function useFilters({ initialProducers = [] }: UseFiltersProps = {}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("todos");

  // Normalize the text to remove accents and convert to lowercase
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Extract all unique categories from producers
  const allCategories = useMemo(() => {
    const categories = new Set<string>();

    initialProducers.forEach((producer) => {
      if (producer.categories && Array.isArray(producer.categories)) {
        producer.categories.forEach((cat) => {
          if (
            typeof cat === "object" &&
            cat !== null &&
            "name" in cat &&
            typeof (cat as { name: string }).name === "string"
          ) {
            categories.add((cat as { name: string }).name);
          } else if (typeof cat === "string") {
            categories.add(cat);
          }
        });
      }
    });

    return Array.from(categories).sort();
  }, [initialProducers]);

  // Filter producers based on searchTerm and activeCategory
  const filteredProducers = useMemo(() => {
    return initialProducers.filter((producer) => {
      // Category filter
      let matchesCategory = activeCategory === "todos";

      if (!matchesCategory) {
        if (producer.categories && Array.isArray(producer.categories)) {
          matchesCategory = producer.categories.some((cat) => {
            const catName =
              typeof cat === "object" ? (cat as { name: string }).name : cat;
            return (
              catName &&
              normalizeText(catName) === normalizeText(activeCategory)
            );
          });
        }
      }

      // If category doesn't match, stop here
      if (!matchesCategory) return false;

      // If no search term, show all from category
      if (!searchTerm) return true;

      // Text filter (producer name or categories)
      const normalizedSearch = normalizeText(searchTerm);
      const normalizedName = normalizeText(producer.name);

      // Normalize all producer categories for search
      const producerCategories = producer.categories
        ? producer.categories
            .map((cat) =>
              normalizeText(
                typeof cat === "object" ? (cat as { name: string }).name : cat
              )
            )
            .join(" ")
        : "";

      return (
        normalizedName.includes(normalizedSearch) ||
        producerCategories.includes(normalizedSearch)
      );
    });
  }, [searchTerm, activeCategory, initialProducers]);

  // Functions to update filters
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return {
    searchTerm,
    activeCategory,
    filteredProducers,
    allCategories,
    handleSearch,
    handleCategoryChange,
  };
}
