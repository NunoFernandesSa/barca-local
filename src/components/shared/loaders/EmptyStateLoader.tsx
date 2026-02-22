import { EmptyStateLoaderProps } from "@/types/loaders-props";

export const EmptyStateLoader = ({
  title = "Nenhum produtor encontrado",
  message = "Lamentamos, não encontrámos nenhum produtor que corresponda à sua pesquisa.",
  icon = "search",
  actionLabel,
  onAction,
}: EmptyStateLoaderProps) => {
  const icons = {
    search: (
      <svg
        className="w-16 h-16 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    basket: (
      <svg
        className="w-16 h-16 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    location: (
      <svg
        className="w-16 h-16 text-gray-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  };

  return (
    <div className="flex flex-col items-center justify-center p-12 bg-white rounded-2xl shadow-sm">
      {/* Icon avec animation douce */}
      <div className="mb-6 transform hover:scale-110 transition-transform duration-300">
        {icon === "custom" ? null : icons[icon]}
      </div>

      {/* Title */}
      <h3 className="text-2xl font-semibold text-gray-800 mb-3 text-center">
        {title}
      </h3>

      {/* Message */}
      <p className="text-gray-500 text-center max-w-md mb-8">{message}</p>

      {/* Action button optionnelle */}
      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="px-6 py-3 bg-blue-500 text-white rounded-xl font-medium
                   hover:bg-blue-600 transform hover:scale-105 transition-all
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                   flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
          {actionLabel}
        </button>
      )}
    </div>
  );
};
