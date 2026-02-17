import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "./AnimatedCounter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273162/20260213_215234_nzfknc.jpg"
          alt="JMAzvok ozvočenje prireditve"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-bg-primary/60 to-bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full" />
            <span className="text-accent text-sm font-medium">
              Ozvočenje &bull; Audio &amp; video snemanje
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6 animate-fade-in-up animate-delay-100 animate-gentle-bob">
          Vaš dogodek.
          <br />
          <span className="text-accent">Naš zvok.</span>
        </h1>

        <p className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-10 animate-fade-in-up animate-delay-200">
          Profesionalno ozvočenje in audio ter video snemanje za poroke,
          praznovanja, občinske prireditve in druge posebne trenutke. Osebni
          pristop, kristalno čist zvok.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <Link
            href="#kontakt"
            className="bg-accent hover:bg-accent-light text-bg-primary font-bold px-8 py-4 rounded-lg transition-all duration-200 text-lg hover:scale-105 animate-glow-pulse"
          >
            Pošljite povpraševanje
          </Link>
          <Link
            href="#storitve"
            className="border border-border hover:border-accent text-text-secondary hover:text-accent font-medium px-8 py-4 rounded-lg transition-all duration-200 text-lg"
          >
            Naše storitve
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-20 animate-fade-in-up animate-delay-400">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent">
              <AnimatedCounter end={50} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">
              Izvedenih dogodkov
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent">
              <AnimatedCounter end={100} suffix="%" />
            </div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">
              Zadovoljnih strank
            </div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-accent">
              <AnimatedCounter end={17} suffix="+" />
            </div>
            <div className="text-xs sm:text-sm text-text-muted mt-1">
              Let izkušenj
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-text-muted"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
