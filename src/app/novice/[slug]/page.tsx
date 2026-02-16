import Link from "next/link";
import Image from "next/image";
import { getNovicaBySlug, getAllNoviceSlugs } from "@/lib/novice";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = getAllNoviceSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const novica = await getNovicaBySlug(slug);

  if (!novica) {
    return { title: "Novica ni najdena | JMA-ZVOK" };
  }

  return {
    title: `${novica.title} | JMA-ZVOK`,
    description: novica.excerpt,
  };
}

export default async function NovicaPage({ params }: Props) {
  const { slug } = await params;
  const novica = await getNovicaBySlug(slug);

  if (!novica) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-bg-primary pt-24 pb-16">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/novice"
          className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors text-sm mb-8"
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
          Nazaj na novice
        </Link>

        {/* Header */}
        <header className="mb-8">
          <time className="text-accent text-sm font-medium">
            {new Date(novica.date).toLocaleDateString("sl-SI", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <h1 className="text-3xl sm:text-4xl font-bold mt-3">{novica.title}</h1>
        </header>

        {/* Featured image */}
        {novica.image && (
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden mb-10">
            <Image
              src={novica.image}
              alt={novica.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose-custom"
          dangerouslySetInnerHTML={{ __html: novica.contentHtml || "" }}
        />

        {/* CTA */}
        <div className="mt-16 p-8 bg-bg-card border border-border rounded-2xl text-center">
          <h3 className="text-xl font-bold mb-3">Imate dogodek?</h3>
          <p className="text-text-secondary mb-6">
            Pošljite nam povpraševanje in skupaj bomo poskrbeli za popoln zvok.
          </p>
          <Link
            href="/#kontakt"
            className="inline-block bg-accent hover:bg-accent-light text-bg-primary font-bold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Kontaktirajte nas
          </Link>
        </div>
      </article>
    </div>
  );
}
