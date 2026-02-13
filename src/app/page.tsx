import { MapWrapper } from "@/components/features/map/MapWrapper";
import SearchBar from "@/components/features/search-bar/SearchBar";

export default function Home() {
  return (
    <div className="text-3xl text-white font-bold">
      <SearchBar />

      <main className="container mx-auto h-[70vh]">
        <MapWrapper />
      </main>
    </div>
  );
}
