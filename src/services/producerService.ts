import { ProducerFilters } from "@/types/producers-props";
import { producersApi } from "../../lib/api/producers";

export const producerService = {
  async getProducers(filters?: ProducerFilters) {
    const response = await producersApi.list(filters);
    return response;
  },

  async getProducerById(id: string) {
    const producer = await producersApi.get(id);

    return {
      ...producer,
      gallery_images: producer.gallery_images.sort((a, b) => a.order - b.order),
    };
  },

  async getProducersByType(type: string) {
    return producersApi.filterByType(type);
  },

  async getProducersByCity(city: string) {
    return producersApi.getByCity(city);
  },
};
