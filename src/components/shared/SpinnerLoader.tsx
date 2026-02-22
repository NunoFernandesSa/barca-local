import { SpinnerLoaderProps } from "@/types/loaders-props";

export const SpinnerLoader = ({
  message = "Carregando...",
  variant = "spinner",
  fullScreen = false,
}: SpinnerLoaderProps) => {
  const loaderContent = {
    dots: (
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
      </div>
    ),
    spinner: (
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-gray-200"></div>
        <div className="w-12 h-12 rounded-full border-4 border-blue-500 border-t-transparent animate-spin absolute top-0"></div>
      </div>
    ),
    pulse: (
      <div className="flex space-x-1">
        <div className="w-16 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="w-16 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.2s]"></div>
        <div className="w-16 h-2 bg-blue-500 rounded-full animate-pulse [animation-delay:0.4s]"></div>
      </div>
    ),
  };

  const containerClass = fullScreen
    ? "fixed inset-0 bg-white/80 backdrop-blur-sm flex items-center justify-center z-50"
    : "flex flex-col items-center justify-center p-8";

  return (
    <div className={containerClass}>
      <div className="flex flex-col items-center gap-4">
        {loaderContent[variant]}
        {message && (
          <p className="text-gray-600 font-medium animate-pulse">{message}</p>
        )}
      </div>
    </div>
  );
};
