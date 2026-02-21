import { ProducerType } from "./producers-props";

export type MapWrapperProps = {
  selectedProducer: ProducerType | null;
  producers?: ProducerType[];
};

export type MapInnerProps = {
  selectedProducer: ProducerType | null;
  producers?: ProducerType[];
};
