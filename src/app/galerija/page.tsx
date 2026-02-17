"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273162/20260213_215234_nzfknc.jpg",
    alt: "Prireditev - februar 2026",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273195/20260213_224225_erzbv5.jpg",
    alt: "Prireditev - februar 2026",
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
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771273279/20251021_185731_aiq6hk.jpg",
    alt: "Prireditev - oktober 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771274951/20250706_013859_jdnrgp.jpg",
    alt: "Prireditev - julij 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275003/20250531_203559_kwlenz.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275026/20250531_185810_fzqhj8.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275064/20250529_182203_qby9ct.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275120/20250523_182722_shspsj.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324940/IMG_9162_kti2og.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324941/IMG_9165_mkebup.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324942/IMG_9156_i7yogr.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324944/IMG_9155_czf75e.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324951/IMG_9170_lp1kk8.jpg",
    alt: "Prireditev",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771324949/IMG_9154_rmvomk.jpg",
    alt: "Prireditev",
  },
];

export default function GalerijaPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm mb-6"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Nazaj na domov
          </Link>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Naša <span className="text-accent">galerija</span>
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Utrinki z naših prireditev in dogodkov. Vsaka slika pripoveduje svojo
            zgodbo o nepozabnih trenutkih.
          </p>
        </div>

        {/* Gallery grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {images.map((image, index) => (
            <div
              key={image.src}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden rounded-xl border border-border hover:border-accent/30 transition-all duration-300">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-bg-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm text-text-secondary">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close button */}
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

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(
                  selectedImage === 0 ? images.length - 1 : selectedImage - 1
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
                  selectedImage === images.length - 1 ? 0 : selectedImage + 1
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

            {/* Image */}
            <div
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
              />
              <p className="text-center text-text-secondary text-sm mt-4">
                {images[selectedImage].alt} &bull; {selectedImage + 1} /{" "}
                {images.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
