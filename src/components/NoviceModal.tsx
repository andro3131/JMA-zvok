"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import Image from "next/image";

interface NovicaData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  contentHtml?: string;
}

function extractImages(html: string): { textHtml: string; imageUrls: string[] } {
  const imageUrls: string[] = [];
  const textHtml = html.replace(/<p>\s*<img[^>]*src="([^"]*)"[^>]*>\s*<\/p>/g, (_, src) => {
    imageUrls.push(src);
    return "";
  }).replace(/<img[^>]*src="([^"]*)"[^>]*>/g, (_, src) => {
    imageUrls.push(src);
    return "";
  });
  return { textHtml, imageUrls };
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(0);
  }, [images]);

  if (images.length === 0) return null;

  return (
    <div>
      {/* Large image */}
      <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-3">
        <Image
          src={images[selected]}
          alt={`${title} ${selected + 1}`}
          fill
          className="object-cover"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                i === selected
                  ? "border-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function NoviceModal({
  novice,
  children,
}: {
  novice: NovicaData[];
  children: (openModal: (slug: string) => void) => React.ReactNode;
}) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const close = useCallback(() => setActiveSlug(null), []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeSlug && e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    if (activeSlug) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [activeSlug, close]);

  const active = novice.find((n) => n.slug === activeSlug);

  const { textHtml, allImages } = useMemo(() => {
    if (!active) return { textHtml: "", allImages: [] };
    const { textHtml, imageUrls } = extractImages(active.contentHtml || "");
    const allImages: string[] = [];
    if (active.image) allImages.push(active.image);
    imageUrls.forEach((url) => {
      if (!allImages.includes(url)) allImages.push(url);
    });
    return { textHtml, allImages };
  }, [active]);

  return (
    <>
      {children((slug) => setActiveSlug(slug))}

      {active && (
        <div
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={close}
        >
          <div
            className="relative bg-bg-card border border-border rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Zapri"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Date */}
            <time className="text-accent text-sm font-medium">
              {new Date(active.date).toLocaleDateString("sl-SI", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">{active.title}</h2>

            {/* Text content (without images) */}
            {textHtml && (
              <div
                className="prose-custom mb-8"
                dangerouslySetInnerHTML={{ __html: textHtml }}
              />
            )}

            {/* Image gallery */}
            <Gallery images={allImages} title={active.title} />
          </div>
        </div>
      )}
    </>
  );
}
