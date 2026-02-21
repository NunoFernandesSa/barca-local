import { useState, useEffect } from "react";
import { producerService } from "@/services/producerService";
import { ProducerFilters, ProducerType } from "@/types/producers-props";

export function useProducers(initialFilters?: ProducerFilters) {
  const [producers, setProducers] = useState<ProducerType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState(initialFilters);

  useEffect(() => {
    const fetchProducers = async () => {
      try {
        setIsLoading(true);
        const data = await producerService.getProducers(filters);
        setProducers(data.results);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar produtores");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducers();
  }, [filters]);

  return {
    producers,
    isLoading,
    error,
    setFilters,
  };
}
