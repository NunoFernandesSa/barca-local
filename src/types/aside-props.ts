import { ProducerType } from "./producers-props";

export type AsideProducersListProps = {
  selectedProducer: ProducerType | null;
  setSelectedProducer: (producer: ProducerType | null) => void;
};

export type AsideProducersClientProps = {
  producers: ProducerType[];
  selectedProducer: ProducerType | null;
  setSelectedProducer: (producer: ProducerType | null) => void;
};

export type ApiResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ProducerType[];
};
