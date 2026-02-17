import Link from "next/link";
import { getAllNoviceWithContent } from "@/lib/novice";
import ScrollReveal from "./ScrollReveal";
import NoviceModal from "./NoviceModal";

export default async function NovicePreview() {
  const allNovice = await getAllNoviceWithContent();
  const novice = allNovice.slice(0, 3);

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

        {/* News cards with modal */}
        <ScrollReveal delay={100}>
          <NoviceModal novice={novice} variant="grid" />
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
