import { PRODUCERS } from "@/constants/producers";
import { ProducerType } from "@/types/producers-props";

export default function AsideProducersList({
  setSelectedProducer,
}: {
  setSelectedProducer: (producer: ProducerType | null) => void;
}) {
  return (
    <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto">
      {PRODUCERS.map((p) => (
        <div
          key={p.id}
          onClick={() => setSelectedProducer(p)}
          className="p-4 border-b cursor-pointer hover:bg-primary/10 transition"
        >
          <div className="font-semibold text-primary text-lg">{p.name}</div>

          <div className="text-xs text-gray-600 mt-1">
            {p.address.number} {p.address.street}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {p.address.zipCode} {p.address.city}
          </div>
          <span className="text-xs text-foreground font-light bg-primary/20 px-2 py-0.5 rounded-full">
            {p.type}
          </span>
        </div>
      ))}
    </aside>
  );
}
