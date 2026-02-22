import { ProducerStore } from "@/interface/store";
import { create } from "zustand";

const useProducerStore = create<ProducerStore>((set) => ({
  producers: [],
  loading: false,
  error: null,

  setProducers: (producers) => set({ producers }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
}));

export default useProducerStore;
