import { SearchInputProps } from "@/interface/filters";

const SearchInput = ({ onSearch, searchTerm }: SearchInputProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 relative">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
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
  );
};

export default SearchInput;
