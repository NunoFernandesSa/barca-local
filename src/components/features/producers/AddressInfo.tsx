import { ProducerType } from "@/types/producers-props";
import { BiMapPin } from "react-icons/bi";

export default function AddressInfo({ producer }: { producer: ProducerType }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <BiMapPin className="w-5 h-5 text-primary" />
        Morada
      </h2>
      <p className="text-gray-600">
        {producer.address.street}, {producer.address.number}
        <br />
        {producer.address.zipCode} {producer.address.city}
        <br />
        {producer.address.state}
      </p>
      <a
        href={`https://maps.google.com/?q=${producer.address.coords.lat},${producer.address.coords.lng}`}
        target="_blank"
        rel="noopener"
        className="inline-block mt-4 text-primary hover:underline text-sm"
      >
        Ver no Google Maps →
      </a>
    </div>
  );
}
