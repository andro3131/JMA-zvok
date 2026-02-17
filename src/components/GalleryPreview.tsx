import Image from "next/image";
import Link from "next/link";

const previewImages = [
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
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275003/20250531_203559_kwlenz.jpg",
    alt: "Prireditev - maj 2025",
  },
  {
    src: "https://res.cloudinary.com/dewf3zos0/image/upload/v1771275064/20250529_182203_qby9ct.jpg",
    alt: "Prireditev - maj 2025",
  },
];

export default function GalleryPreview() {
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
          {previewImages.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[4/3] rounded-xl overflow-hidden border border-border group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-bg-primary/0 group-hover:bg-bg-primary/20 transition-colors duration-300" />
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
    </section>
  );
}
