import Link from "next/link";
import Image from "next/image";
import { getAllNoviceWithContent } from "@/lib/novice";
import NoviceModal from "@/components/NoviceModal";

export const metadata = {
  title: "Novice | JMAzvok",
  description: "Zadnje novice in utrinki s prireditev JMAzvok.",
};

export default async function NovicePage() {
  const novice = await getAllNoviceWithContent();

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Link
            href="/#novice"
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
            <span className="text-accent">Novice</span> & utrinki
          </h1>
          <p className="text-text-secondary max-w-xl mx-auto">
            Sledite našim najnovejšim priredbam, novostim in utrinkom s terena.
          </p>
        </div>

        {/* News list */}
        {novice.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-text-muted">
              Novice bodo kmalu objavljene. Spremljajte nas!
            </p>
          </div>
        ) : (
          <NoviceModal novice={novice}>
            {(openModal) => (
              <div className="space-y-8">
                {novice.map((novica) => (
                  <button
                    key={novica.slug}
                    onClick={() => openModal(novica.slug)}
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
                            {new Date(novica.date).toLocaleDateString("sl-SI", {
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </time>
                          <h2 className="text-xl font-bold mt-2 mb-3 group-hover:text-accent transition-colors">
                            {novica.title}
                          </h2>
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
                      </div>
                    </article>
                  </button>
                ))}
              </div>
            )}
          </NoviceModal>
        )}
      </div>
    </div>
  );
}
