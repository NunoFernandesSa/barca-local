import { ProducerType } from "@/types/producers-props";

export const PRODUCERS: ProducerType[] = [
  {
    id: 1,
    name: "Producer One",
    address: {
      street: "Main St",
      number: "123",
      city: "Barcelona",
      state: "Barcelona",
      zipCode: "12345",
      coords: { lat: 0, lng: 0 },
    },
    phone: "",
    email: "",
    website: "",
    description: "",
    image: "",
    socialMedia: [],
    createdAt: "",
    updatedAt: "",
  },
];
