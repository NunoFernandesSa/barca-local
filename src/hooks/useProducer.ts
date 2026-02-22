import useProducerStore from "@/store/producers-store";

export const useProducer = () => {
  const producers = useProducerStore((state) => state.producers);
  const loading = useProducerStore((state) => state.loading);
  const error = useProducerStore((state) => state.error);
  const fetchProducers = useProducerStore((state) => state.fetchProducers);
  const clearError = useProducerStore((state) => state.clearError);
  const initialized = useProducerStore((state) => state.initialized);

  return {
    producers,
    loading,
    error,
    fetchProducers,
    clearError,
    initialized,
  };
};
