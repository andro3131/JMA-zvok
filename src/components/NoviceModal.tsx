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

interface MediaItem {
  type: "image" | "video";
  src: string;
}

function extractMedia(html: string): { textHtml: string; media: MediaItem[] } {
  const media: MediaItem[] = [];
  let textHtml = html;

  // Extract videos (including when wrapped in <p>)
  textHtml = textHtml.replace(/<p>\s*<video[^>]*src="([^"]*)"[^>]*>[\s\S]*?<\/video>\s*<\/p>/g, (_, src) => {
    media.push({ type: "video", src });
    return "";
  });
  textHtml = textHtml.replace(/<video[^>]*src="([^"]*)"[^>]*>[\s\S]*?<\/video>/g, (_, src) => {
    media.push({ type: "video", src });
    return "";
  });
  textHtml = textHtml.replace(/<video[^>]*src="([^"]*)"[^>]*\/?\s*>/g, (_, src) => {
    media.push({ type: "video", src });
    return "";
  });

  // Extract images wrapped in <p>
  textHtml = textHtml.replace(/<p>\s*<img[^>]*src="([^"]*)"[^>]*>\s*<\/p>/g, (_, src) => {
    media.push({ type: "image", src });
    return "";
  });
  // Extract remaining images
  textHtml = textHtml.replace(/<img[^>]*src="([^"]*)"[^>]*>/g, (_, src) => {
    media.push({ type: "image", src });
    return "";
  });

  // Clean up empty paragraphs
  textHtml = textHtml.replace(/<p>\s*<\/p>/g, "");

  return { textHtml, media };
}

function Gallery({ media, title }: { media: MediaItem[]; title: string }) {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setSelected(0);
  }, [media]);

  if (media.length === 0) return null;

  const current = media[selected];

  return (
    <div>
      {/* Large view */}
      <div className="relative w-full rounded-2xl overflow-hidden mb-3">
        {current.type === "video" ? (
          <video
            key={current.src}
            src={current.src}
            controls
            playsInline
            className="w-full rounded-2xl"
          />
        ) : (
          <div className="relative w-full" style={{ minHeight: "20rem" }}>
            <Image
              src={current.src}
              alt={`${title} ${selected + 1}`}
              fill
              className="object-contain"
            />
          </div>
        )}
      </div>

      {/* Thumbnails */}
      {media.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {media.map((item, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`relative w-20 h-16 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                i === selected
                  ? "border-accent"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              {item.type === "video" ? (
                <div className="w-full h-full bg-black/80 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              ) : (
                <Image
                  src={item.src}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString("sl-SI", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NoviceModal({
  novice,
  variant = "grid",
}: {
  novice: NovicaData[];
  variant?: "grid" | "list";
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

  const { textHtml, allMedia } = useMemo(() => {
    if (!active) return { textHtml: "", allMedia: [] };
    const { textHtml, media } = extractMedia(active.contentHtml || "");
    const allMedia: MediaItem[] = [];
    if (active.image) allMedia.push({ type: "image", src: active.image });
    media.forEach((item) => {
      if (!allMedia.some((m) => m.src === item.src)) allMedia.push(item);
    });
    return { textHtml, allMedia };
  }, [active]);

  return (
    <>
      {/* Cards */}
      {variant === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {novice.map((novica) => (
            <button
              key={novica.slug}
              onClick={() => setActiveSlug(novica.slug)}
              className="block group text-left"
            >
              <article className="bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300 h-full">
                {novica.image && (
                  <div className="relative h-48">
                    <Image
                      src={novica.image}
                      alt={novica.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-6">
                  <time className="text-accent text-sm font-medium">
                    {formatDate(novica.date)}
                  </time>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                    {novica.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {novica.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4">
                    Preberi več
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          {novice.map((novica) => (
            <button
              key={novica.slug}
              onClick={() => setActiveSlug(novica.slug)}
              className="block group text-left w-full"
            >
              <article className="bg-bg-card border border-border rounded-2xl overflow-hidden hover:border-accent/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  {novica.image && (
                    <div className="relative w-full sm:w-64 h-48 sm:h-auto shrink-0">
                      <Image
                        src={novica.image}
                        alt={novica.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <time className="text-accent text-sm font-medium">
                      {formatDate(novica.date)}
                    </time>
                    <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                      {novica.title}
                    </h2>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {novica.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4">
                      Preberi več
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </article>
            </button>
          ))}
        </div>
      )}

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md overflow-y-auto p-4"
          onClick={close}
        >
          <div
            className="relative bg-bg-card border border-border rounded-2xl max-w-3xl w-full mx-auto my-8 p-8 sm:p-10"
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
              {formatDate(active.date)}
            </time>

            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">{active.title}</h2>

            {/* Text content (without images/videos) */}
            {textHtml && (
              <div
                className="prose-custom mb-8"
                dangerouslySetInnerHTML={{ __html: textHtml }}
              />
            )}

            {/* Media gallery */}
            <Gallery media={allMedia} title={active.title} />
          </div>
        </div>
      )}
    </>
  );
}
