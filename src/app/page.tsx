import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchBar from "@/components/features/search-bar/SearchBar";

export default function Home() {
  return (
    <div className="text-3xl text-white font-bold">
      <SearchBar />

      <main className="container md:px-3 px-6 mx-auto h-[70vh] flex">
        <aside className="hidden md:block w-1/4 h-full rounded-l-2xl bg-accent"></aside>
        <div className="w-full md:w-3/4 h-full">
          <MapWrapper />
        </div>
      </main>
    </div>
  );
}
