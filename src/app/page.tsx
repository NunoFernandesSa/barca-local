import Hero from "@/components/features/hero/Hero";
import ProducersSection from "@/components/ProducersSection";

export default function HomePage() {
  return (
    <>
      {/* Content */}
      <div className="relative z-10 container mx-auto">
        <Hero />

        {/* Section for producers explanation of how to appear on the platform */}
        <ProducersSection />
      </div>
    </>
  );
}
