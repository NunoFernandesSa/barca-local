export interface SearchInputProps {
  onSearch: (term: string) => void;
  searchTerm: string;
}

export interface SearchFilterProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export interface SearchSectionProps {
  onSearch: (term: string) => void;
  searchTerm: string;
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}
