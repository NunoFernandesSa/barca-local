export type CoordsType = {
  lat: number;
  lng: number;
};

export type AddressType = {
  street: string;
  number: string;
  city: string;
  state: string;
  zipCode: string;
  coords: CoordsType;
};

export type ProducerType = {
  id: string;
  name: string;
  address: AddressType;
  phone: string;
  email: string;
  website: string;
  description: string;
  image: string;
  socialMedia: string[];
  createdAt: string;
  updatedAt: string;
};
