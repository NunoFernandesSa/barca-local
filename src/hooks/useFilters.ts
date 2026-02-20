import { PRODUCERS } from "@/constants/producers";
import { useState, useMemo } from "react";

export function useFilters(initialProducers = PRODUCERS) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("todos");

  // Função para normalizar texto (remover acentos e lower case)
  const normalizeText = (text: string) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Filtra os produtores baseado no searchTerm e activeCategory
  const filteredProducers = useMemo(() => {
    return initialProducers.filter((producer) => {
      // Filtro por categoria
      const matchesCategory =
        activeCategory === "todos" ||
        (Array.isArray(producer.type)
          ? producer.type.some(
              (t) => normalizeText(t) === normalizeText(activeCategory)
            )
          : normalizeText(producer.type) === normalizeText(activeCategory));

      // Se não passar na categoria, nem continua
      if (!matchesCategory) return false;

      // Se não tem searchTerm, mostra todos da categoria
      if (!searchTerm) return true;

      // Filtro por texto (nome do produtor ou tipo)
      const normalizedSearch = normalizeText(searchTerm);
      const normalizedName = normalizeText(producer.name);
      const normalizedType = normalizeText(
        Array.isArray(producer.type) ? producer.type.join(" ") : producer.type
      );

      return (
        normalizedName.includes(normalizedSearch) ||
        normalizedType.includes(normalizedSearch)
      );
    });
  }, [searchTerm, activeCategory, initialProducers]);

  // Funções para atualizar os filtros
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    // Opcional: limpar search quando muda de categoria?
    // setSearchTerm('')
  };

  return {
    searchTerm,
    activeCategory,
    filteredProducers,
    handleSearch,
    handleCategoryChange,
  };
}
