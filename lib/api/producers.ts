import { apiClient } from "./client";
import {
  ProducerFilters,
  ProducersResponse,
  ProducerType,
} from "@/types/producers-props";

export const producersApi = {
  // list all filters
  list: async (filters?: ProducerFilters): Promise<ProducersResponse> => {
    const params = new URLSearchParams();

    if (filters?.type) params.append("type", filters.type);
    if (filters?.city) params.append("city", filters.city);
    if (filters?.search) params.append("search", filters.search);
    if (filters?.is_active !== undefined)
      params.append("is_active", String(filters.is_active));

    const queryString = params.toString();
    return apiClient.get<ProducersResponse>(
      `/producers/${queryString ? `?${queryString}` : ""}`
    );
  },

  // get producer by id
  get: async (id: string): Promise<ProducerType> => {
    return apiClient.get<ProducerType>(`/producers/${id}`);
  },

  // filter by type
  filterByType: async (type: string): Promise<ProducersResponse> => {
    return apiClient.get<ProducersResponse>(`/producers/type/${type}`);
  },

  // get producer by city
  getByCity: async (city: string): Promise<ProducersResponse> => {
    return apiClient.get<ProducersResponse>(`/producers/city/${city}`);
  },
};
