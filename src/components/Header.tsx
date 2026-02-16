"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/#storitve", label: "Storitve" },
  { href: "/#o-nas", label: "O nas" },
  { href: "/#oprema", label: "Oprema" },
  { href: "/galerija", label: "Galerija" },
  { href: "/novice", label: "Novice" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-primary/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <Image
              src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771280487/logo-jma_whwno7.png"
              alt="JMAzvok"
              width={140}
              height={40}
              className="h-8 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              className="bg-accent hover:bg-accent-light text-bg-primary font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Povpraševanje
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-text-secondary hover:text-accent transition-colors"
            aria-label="Odpri meni"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {isOpen && (
        <nav className="md:hidden bg-bg-secondary border-t border-border animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-text-secondary hover:text-accent transition-colors duration-200 py-2"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#kontakt"
              onClick={() => setIsOpen(false)}
              className="block bg-accent hover:bg-accent-light text-bg-primary font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200 text-center mt-4"
            >
              Povpraševanje
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
