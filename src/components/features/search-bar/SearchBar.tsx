"use client";

import { PRODUCERS } from "@/constants/producers";
import { useState } from "react";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setSearchTerm(""); // Reset search
  };

  return (
    <section className="px-6 my-6 flex md:flex-row flex-col w-full md:gap-3">
      <div className="w-full md:w-1/2 lg:w-1/3 relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Procure um produtor ou um produto…"
          className="w-full text-sm rounded-full border border-gray-700 p-3 text-primary focus:border-primary focus:outline-none pl-12 pr-4"
        />
        <svg
          className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* categories filters */}
      <div className="flex flex-wrap gap-2 my-2">
        {PRODUCERS.map((category) => {
          const categoryType = Array.isArray(category.type)
            ? category.type[0]
            : category.type;
          return (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(categoryType)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeCategory === categoryType
                  ? "bg-primary text-white shadow-lg"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {categoryType}
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default SearchBar;
