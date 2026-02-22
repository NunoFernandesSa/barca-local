export const ProducersLoader = () => {
  return (
    <div className="flex flex-col gap-6 p-4">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="bg-white rounded-2xl shadow-lg p-5 animate-pulse"
        >
          {/* Image */}
          <div className="w-full h-22 bg-linear-to-r from-gray-200 to-gray-300 rounded-xl mb-4"></div>

          {/* Nom et ville */}
          <div className="space-y-3">
            <div className="h-5 bg-linear-to-r from-gray-200 to-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-linear-to-r from-gray-200 to-gray-300 rounded w-1/2"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
