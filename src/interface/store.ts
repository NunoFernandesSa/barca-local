import { ProducerType } from "@/types/producers-props";

export interface ProducerStore {
  producers: ProducerType[];
  loading: boolean;
  error: string | null;
  initialized: boolean;

  fetchProducers: () => Promise<void>;
  setProducers: (producers: ProducerType[]) => void;
  clearError: () => void;
  reset: () => void;
}
