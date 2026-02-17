"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function Equipment() {
  const [showModal, setShowModal] = useState(false);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (showModal && e.key === "Escape") setShowModal(false);
    },
    [showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    if (showModal) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [handleKeyDown, showModal]);

  return (
    <section id="oprema" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Oprema
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Profesionalna oprema{" "}
            <span className="text-accent">vodilnih proizvajalcev</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Razpolagamo s kakovostno opremo proizvajalcev Yamaha, dB
            Technologies in Behringer, ki jo prilagodimo vsakemu dogodku
            posebej.
          </p>
        </div>
        </ScrollReveal>

        {/* Equipment showcase */}
        <ScrollReveal delay={100}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main PA */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group card-hover-lift">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273247/20251125_185323_uo5ss0.jpg"
                alt="JMAzvok zvočni sistem"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Zvočni sistem</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Kakovosten zvočni sistem z aktivnimi zvočniki Yamaha in dB
                Technologies, prilagojen za jasno reprodukcijo tako govora kot
                glasbe. Primerno za dogodke od 50 do 500 oseb.
              </p>
            </div>
          </div>

          {/* Mixing */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group card-hover-lift">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273279/20251021_185731_aiq6hk.jpg"
                alt="JMAzvok mešalna miza"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Digitalna mešalna miza</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Digitalni mešalni pulti Behringer z brezžičnim upravljanjem,
                večkanalnim snemanjem in profesionalnimi zvočnimi efekti. Popoln
                nadzor nad zvokom v realnem času.
              </p>
            </div>
          </div>

          {/* Microphones */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group card-hover-lift">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275120/20250523_182722_shspsj.jpg"
                alt="JMAzvok mikrofoni"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Mikrofoni</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Širok nabor profesionalnih mikrofonov za vsako situacijo — od
                brezžičnih ročnih in naglavnih do studijskih kondenzatorskih
                mikrofonov. Iz lastnega snemalnega studia.
              </p>
            </div>
          </div>

          {/* Video */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group card-hover-lift">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771274951/20250706_013859_jdnrgp.jpg"
                alt="JMAzvok video oprema"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-card to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">Video oprema</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                Profesionalna 4K kamera za snemanje prireditev in dogodkov.
                Kombinacija s profesionalno posnetim zvokom za vrhunski končni
                izdelek.
              </p>
            </div>
          </div>
        </div>
        </ScrollReveal>

        {/* Brands */}
        <ScrollReveal delay={200}>
        <div className="mt-16 text-center">
          <p className="text-text-muted text-sm mb-6">
            Zaupamo opremi vodilnih svetovnih proizvajalcev
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 text-text-muted">
            {["Yamaha", "dB Technologies", "Behringer", "Sennheiser"].map(
              (brand) => (
                <span
                  key={brand}
                  className="text-lg font-semibold tracking-wide opacity-40 hover:opacity-70 transition-opacity"
                >
                  {brand}
                </span>
              )
            )}
          </div>

          {/* CTA */}
          <button
            onClick={() => setShowModal(true)}
            className="mt-8 inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-bg-primary font-semibold px-8 py-3 rounded-lg transition-all duration-200 hover:scale-105"
          >
            Vsa oprema
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
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        </ScrollReveal>
      </div>

      {/* Equipment modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 bg-bg-primary/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative bg-bg-card border border-border rounded-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
              aria-label="Zapri"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Naša <span className="text-accent">oprema</span>
            </h2>
            <p className="text-text-secondary mb-8">
              Podroben pregled opreme, ki jo uporabljamo na prireditvah.
            </p>

            {/* Images */}
            <div className="grid grid-cols-3 gap-3 mb-10">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273247/20251125_185323_uo5ss0.jpg"
                  alt="Zvočni sistem"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273279/20251021_185731_aiq6hk.jpg"
                  alt="Mešalna miza"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275120/20250523_182722_shspsj.jpg"
                  alt="Mikrofoni"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Equipment lists */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Zvočni sistem */}
              <div>
                <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                  </svg>
                  Zvočni sistem
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">Yamaha DSR112</strong> — aktivni zvočniki</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">dB Technologies DVA S30N</strong> — nizkotonec (sub)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">dB Technologies DVA S10 DP</strong> — 2× nizkotonec (sub)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">dB Technologies DVX D15 HP</strong> — 2× aktivni zvočnik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">dB Technologies DVX D12 HP</strong> — 2× aktivni zvočnik</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">LD Systems DAVE 15 G3</strong> — kompaktni aktivni sistem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">the box PA 302 A</strong> — 2× aktivni monitorji</span>
                  </li>
                </ul>
              </div>

              {/* Mešalna miza */}
              <div>
                <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                  </svg>
                  Mešalna miza
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">Behringer X32 Compact</strong> — 32-kanalni digitalni mikser</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">Behringer X Air XR18</strong> — 18-kanalni digitalni mikser, brezžično upravljanje, večkanalno snemanje</span>
                  </li>
                </ul>
              </div>

              {/* Mikrofoni */}
              <div>
                <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
                  </svg>
                  Mikrofoni
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span>Brezžični ročni in naglavni mikrofoni (Sennheiser)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span>Kondenzatorski in dinamični studijski mikrofoni</span>
                  </li>
                </ul>
              </div>

              {/* Video & osvetlitev */}
              <div>
                <h3 className="text-lg font-bold text-accent mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                  </svg>
                  Video &amp; osvetlitev
                </h3>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">Panasonic Lumix GH7</strong> — 4K kamera</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span><strong className="text-text-primary">DJI Mini Pro 3</strong> — dron za snemanje iz zraka</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span>LED barvni reflektorji z DMX krmiljenjem</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">&#9679;</span>
                    <span>Dimni stroj</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-text-muted text-xs mt-8 text-center">
              Seznam se redno posodablja. Za specifična vprašanja nas kontaktirajte.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
