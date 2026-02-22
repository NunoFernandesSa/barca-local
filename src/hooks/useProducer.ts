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

  return {
    producers,
    loading,
    error,
    setProducers,
    setLoading,
    setError,
    getProducerById,
    getProducersByCity,
  };
};
