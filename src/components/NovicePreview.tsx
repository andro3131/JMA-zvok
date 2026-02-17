import Link from "next/link";
import Image from "next/image";
import { getAllNovice } from "@/lib/novice";
import ScrollReveal from "./ScrollReveal";

export default function NovicePreview() {
  const novice = getAllNovice().slice(0, 2);

  if (novice.length === 0) return null;

  return (
    <section id="novice" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Novice
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            <span className="text-accent">Zadnje</span> novice & utrinki
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Spremljajte naše najnovejše priredbe in novosti.
          </p>
        </div>
        </ScrollReveal>

        {/* News cards */}
        <ScrollReveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {novice.map((novica) => (
            <Link
              key={novica.slug}
              href={`/novice/${novica.slug}`}
              className="block group"
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
                    {new Date(novica.date).toLocaleDateString("sl-SI", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </time>
                  <h3 className="text-lg font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                    {novica.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {novica.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium mt-4">
                    Preberi več
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
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
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
        </ScrollReveal>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/novice"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Vse novice
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
