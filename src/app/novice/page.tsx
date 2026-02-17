import Link from "next/link";
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
          <NoviceModal novice={novice} variant="list" />
        )}
      </div>
    </div>
  );
}
