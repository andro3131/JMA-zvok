"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface NovicaData {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image?: string;
  contentHtml?: string;
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

            {/* Content */}
            {active.contentHtml && (
              <div
                className="prose-custom mb-8"
                dangerouslySetInnerHTML={{ __html: active.contentHtml }}
              />
            )}

            {/* Featured image */}
            {active.image && (
              <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
