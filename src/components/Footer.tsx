import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771280487/logo-jma_whwno7.png"
                alt="JMAzvok"
                width={156}
                height={46}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Profesionalno ozvočenje in video snemanje za vaše posebne
              trenutke. Družinski pristop z osebno odgovornostjo za kakovost.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Navigacija
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/#storitve", label: "Storitve" },
                { href: "/#o-nas", label: "O nas" },
                { href: "/galerija", label: "Galerija" },
                { href: "/novice", label: "Novice" },
                { href: "/#kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-4">
              Kontakt
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                info@jma-zvok.si
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                +386 XX XXX XXX
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Dolenjska, Slovenija
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} JMAzvok. Vse pravice pridržane.
          </p>
          <Link
            href="https://www.studio-mars.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted hover:text-accent transition-colors text-xs"
          >
            Studio MARS &mdash; Snemalni studio
          </Link>
        </div>
      </div>
    </footer>
  );
}
