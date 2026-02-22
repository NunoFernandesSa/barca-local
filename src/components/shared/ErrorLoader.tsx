import { ErrorLoaderProps } from "@/types/loaders-props";

export const ErrorLoader = ({
  message = "Oups ! Ocorreu um erro.",
  onRetry,
  fullScreen = false,
}: ErrorLoaderProps) => {
  const containerClass = fullScreen
    ? "fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md text-center">
        {/* Icône d'erreur animée */}
        <div className="mb-4">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <svg
              className="w-10 h-10 text-red-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
        </div>

        {/* Message */}
        <h3 className="text-xl font-bold text-gray-800 mb-2">{message}</h3>

        <p className="text-gray-600 mb-6">
          Por favor, tente novamente ou entre em contato com o suporte se o
          problema persistir.
        </p>

        {/* Bouton Retry */}
        {onRetry && (
          <button
            onClick={onRetry}
            className="px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold
                     hover:bg-blue-600 transform hover:scale-105 transition-all
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Tentar novamente
          </button>
        )}
      </div>
    </div>
  );
};
