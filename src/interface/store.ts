import { ProducerType } from "@/types/producers-props";

export interface ProducerStore {
  producers: ProducerType[];
  loading: boolean;
  error: string | null;
  setProducers: (producers: ProducerType[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}
