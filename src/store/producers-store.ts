import { create } from "zustand";
import { apiClient } from "../../lib/api/client";
import { ApiResponse } from "@/types/aside-props";
import { ProducerStore } from "@/interface/store";

const useProducerStore = create<ProducerStore>((set, get) => ({
  producers: [],
  loading: false,
  error: null,
  initialized: false,

  fetchProducers: async () => {
    const state = get();
    if (state.initialized && state.producers.length > 0) {
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await apiClient.get<ApiResponse>("/producers/");
      const data = response.results || [];
      set({ producers: data, loading: false, initialized: true });
    } catch (error) {
      console.error("❌ Error while fetching producers:", error);
      set({
        loading: false,
        error: "Não foi possível carregar a lista de produtores.",
      });
    }
  },

  setProducers: (producers) => set({ producers }),
  clearError: () => set({ error: null }),
  reset: () =>
    set({ producers: [], loading: false, error: null, initialized: false }),
}));

export default useProducerStore;
