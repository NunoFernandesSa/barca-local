"use client";

import { GalleryProps } from "@/types/producers-props";
import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ producerName, images }: GalleryProps) {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = images.map((src) => ({ src }));

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Galeria</h2>

      {/* Grid of thumbnails */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <div
            key={index}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            className="relative aspect-square cursor-pointer group overflow-hidden rounded-lg"
          >
            <Image
              src={image}
              alt={`${producerName} - ${index + 1}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors rounded-lg" />
          </div>
        ))}
      </div>

      {/* Lightbox modal */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        styles={{ container: { backgroundColor: "rgba(0, 0, 0, 0.9)" } }}
      />
    </div>
  );
}
