import useProducerStore from "@/store/producers-store";

export const useProducer = () => {
  const { producers, loading, error, setProducers, setLoading, setError } =
    useProducerStore();

  const getProducerById = (id: string) => {
    if (!producers) return null;
    return producers.find((p) => p.id === id);
  };

  const getProducersByCity = (city: string) => {
    if (!producers) return [];
    return producers.filter((p) => p.address.city === city);
  };

  const getProducersByCategory = (category: string) => {
    if (!producers) return [];
    return producers.filter((p) =>
      p.categories?.some(
        (cat) =>
          typeof cat === "object" &&
          cat !== null &&
          "name" in cat &&
          typeof (cat as { name: string }).name === "string" &&
          (cat as { name: string }).name.toLowerCase() ===
            category.toLowerCase()
      )
    );
  };

  return {
    producers,
    loading,
    error,
    setProducers,
    setLoading,
    setError,
    getProducerById,
    getProducersByCity,
    getProducersByCategory,
  };
};
