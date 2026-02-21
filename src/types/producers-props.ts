export type AddressType = {
  street?: string;
  number?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  formatted?: string;
  latitude?: number;
  longitude?: number;
};

export type ProducerType = {
  id: string;
  name: string;
  categories: string[];
  type_display: string;
  description: string;
  phone: string;
  mobile_phone: string;
  email: string;
  website: string;
  address: AddressType;
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  tiktok: string;
  main_image: string | null;
  gallery_images: {
    id: number;
    image_url: string;
    caption: string;
    order: number;
  }[];
  products: string[];
  created_at: string;
  updated_at: string;
  is_active: boolean;
};

export interface ProducersResponse {
  results: ProducerType[];
  count: number;
  next: string | null;
  previous: string | null;
}

export interface ProducerFilters {
  type?: string;
  city?: string;
  search?: string;
  is_active?: boolean;
}

export type GalleryProps = {
  producerName: string;
  images: string[];
};
