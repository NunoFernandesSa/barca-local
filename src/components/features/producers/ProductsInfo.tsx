import { ProducerType } from "@/types/producers-props";

export default function ProductsInfo({ producer }: { producer: ProducerType }) {
  const products = Array.isArray(producer.type)
    ? producer.type
    : [producer.type];

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Produtos</h2>
      <div className="flex flex-wrap gap-2">
        {products.map((product, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {product}
          </span>
        ))}
      </div>
    </div>
  );
}
