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

type SocialMediaType = {
  facebook?: {
    icon: string;
    url: string;
  };
  instagram?: {
    icon: string;
    url: string;
  };
  twitter?: {
    icon: string;
    url: string;
  };
  linkedin?: {
    icon: string;
    url: string;
  };
  pinterest?: {
    icon: string;
    url: string;
  };
  youtube?: {
    icon: string;
    url: string;
  };
  tiktok?: {
    icon: string;
    url: string;
  };
  whatsapp?: {
    icon: string;
    url: string;
  };
};

export type ProducerType = {
  id: string | number;
  type: string | string[];
  name: string;
  address: AddressType;
  phone: string;
  email: string;
  website: string;
  description: string;
  image: string;
  socialMedia?: SocialMediaType;
  images?: string[];
  createdAt: string;
  updatedAt: string;
};

export type GalleryProps = {
  producerName: string;
  images: string[];
};
