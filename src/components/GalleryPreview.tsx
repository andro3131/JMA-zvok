"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const previewImages = [
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273162/20260213_215234_nzfknc.jpg",
    alt: "Prireditev - februar 2026",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324940/IMG_9162_kti2og.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273247/20251125_185323_uo5ss0.jpg",
    alt: "Prireditev - november 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273265/20251122_170703_k7moi9.jpg",
    alt: "Prireditev - november 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275003/20250531_203559_kwlenz.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275064/20250529_182203_qby9ct.jpg",
    alt: "Prireditev - maj 2025",
  },
];

export default function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Galerija
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Utrinki z naših{" "}
            <span className="text-accent">prireditev</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Vsaka slika pripoveduje svojo zgodbo o nepozabnih trenutkih.
          </p>
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {previewImages.map((image, index) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-white opacity-0 group-hover:opacity-70 transition-opacity duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/galerija"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Pokaži vse
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-text-muted hover:text-text-primary transition-colors z-10"
            aria-label="Zapri"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage === 0
                  ? previewImages.length - 1
                  : selectedImage - 1
              );
            }}
            className="absolute left-4 sm:left-8 text-text-muted hover:text-accent transition-colors"
            aria-label="Prejšnja slika"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(
                selectedImage === previewImages.length - 1
                  ? 0
                  : selectedImage + 1
              );
            }}
            className="absolute right-4 sm:right-8 text-text-muted hover:text-accent transition-colors"
            aria-label="Naslednja slika"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div
            className="relative max-w-5xl max-h-[85vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={previewImages[selectedImage].src}
              alt={previewImages[selectedImage].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            <p className="text-center text-text-secondary text-sm mt-4">
              {previewImages[selectedImage].alt} &bull; {selectedImage + 1} /{" "}
              {previewImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
