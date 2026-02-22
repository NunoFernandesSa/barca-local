"use client";


// ----- components -----
import { SpinnerLoader } from "@/components/shared/loaders/SpinnerLoader";
import { ErrorLoader } from "@/components/shared/loaders/ErrorLoader";
import { EmptyStateLoader } from "@/components/shared/loaders/EmptyStateLoader";


import { useProducer } from "@/hooks/useProducer";
import { AsideProducersListProps } from "@/types/aside-props";
import { useEffect } from "react";

export default function AsideProducersList({
  selectedProducer,
  setSelectedProducer,
  onProducersLoaded,
}: AsideProducersListProps) {
  const { producers, loading, error, fetchProducers, clearError, initialized } =
    useProducer();

  // loading producers from API in mount component
  useEffect(() => {
    fetchProducers();
  }, [fetchProducers]);

  // Notify parent component that producers are loaded
  useEffect(() => {
    if (producers.length > 0 && onProducersLoaded) {
      onProducersLoaded(producers);
    }
  }, [producers, onProducersLoaded]);

  // ----- if loading show a loading message -----
  if (!initialized && loading) {
    return (
      <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto p-4">
        <SpinnerLoader />
      </aside>
    );
  }

  // ----- if error show a error message -----
  if (error) {
    return (
      <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto p-4">
        <ErrorLoader
          onRetry={() => {
            window.location.reload();
            clearError();
            fetchProducers();
          }}
        />
      </aside>
    );
  }

  // ----- if producers is undefined or empty show a message -----
  if (!loading && initialized && producers.length === 0) {
    return (
      <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto p-4">
        <EmptyStateLoader />
      </aside>
    );
  }

  return (
    <aside className="hidden md:block w-1/4 h-full rounded-l-2xl shadow-lg overflow-y-auto">
      {producers.map((producer) => (
        <div
          key={producer.id}
          onClick={() => setSelectedProducer(producer)}
          className={`p-4 border-b cursor-pointer hover:bg-primary/10 transition ${
            selectedProducer?.id === producer.id ? "bg-primary/10" : ""
          }`}
        >
          <div className="font-semibold text-primary text-lg">
            {producer.name}
          </div>

          <div className="text-xs text-gray-600 mt-1">
            {producer.address?.number} {producer.address?.street}
          </div>
          <div className="text-xs text-gray-600 mt-1">
            {producer.address?.zip_code} {producer.address?.city}
          </div>

          {producer.categories && producer.categories.length > 0 ? (
            <div className="flex flex-wrap gap-1 mt-1">
              {producer.categories.map((cat) => {
                const categoryName =
                  typeof cat === "string"
                    ? cat
                    : (cat as { name: string }).name;

                return (
                  <span
                    key={categoryName}
                    className="text-xs text-foreground font-light bg-primary/20 px-2 py-0.5 rounded-full"
                  >
                    {categoryName}
                  </span>
                );
              })}
            </div>
          ) : null}
        </div>
      ))}
    </aside>
  );
}
