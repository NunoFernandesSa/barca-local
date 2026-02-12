import { ProducerType } from "@/types/producers-props";

export const PRODUCERS: ProducerType[] = [
  {
    id: 1,
    type: "Food",
    name: "Producer One",
    address: {
      street: "Main St",
      number: "123",
      city: "Barcelona",
      state: "Barcelona",
      zipCode: "12345",
      coords: { lat: 41.806, lng: -8.42 },
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
