import Image from "next/image";

export default function Equipment() {
  return (
    <section id="oprema" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
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

        {/* Equipment showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Main PA */}
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273247/20251125_185323_uo5ss0.jpg"
                alt="JMA-ZVOK zvočni sistem"
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
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273279/20251021_185731_aiq6hk.jpg"
                alt="JMA-ZVOK mešalna miza"
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
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275120/20250523_182722_shspsj.jpg"
                alt="JMA-ZVOK mikrofoni"
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
          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden group">
            <div className="relative h-64">
              <Image
                src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771274951/20250706_013859_jdnrgp.jpg"
                alt="JMA-ZVOK video oprema"
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

        {/* Brands */}
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
        </div>
      </div>
    </section>
  );
}
