import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="o-nas" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Images */}
          <ScrollReveal>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden animate-float-1">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275064/20250529_182203_qby9ct.jpg"
                  alt="JMAzvok oprema"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-32 sm:h-48 rounded-2xl overflow-hidden animate-float-2">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275026/20250531_185810_fzqhj8.jpg"
                  alt="JMAzvok na prireditvi"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-32 sm:h-48 rounded-2xl overflow-hidden animate-float-3">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771273265/20251122_170703_k7moi9.jpg"
                  alt="JMAzvok postavitev"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-48 sm:h-64 rounded-2xl overflow-hidden animate-float-4">
                <Image
                  src="https://res.cloudinary.com/dewf3zos0/image/upload/v1771275003/20250531_203559_kwlenz.jpg"
                  alt="JMAzvok prireditev"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal delay={200}>
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              O nas
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Družinsko podjetje s{" "}
              <span className="text-accent">strastjo do zvoka</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Smo družinsko podjetje z dolgoletnimi izkušnjami v svetu zvoka
                in glasbe. Pod imenom JMAzvok ozvočujemo prireditve po
                Dolenjski in širše po Sloveniji.
              </p>
              <p>
                Naša prednost je{" "}
                <span className="text-text-primary font-medium">
                  osebni pristop
                </span>
                . Vsakemu dogodku se posvetimo v celoti — od načrtovanja do
                izvedbe. Smo fleksibilni in se hitro prilagodimo vašim
                potrebam.
              </p>
              <p>
                Poleg ozvočenja ponujamo tudi profesionalno osvetlitev, video
                snemanje v 4K kvaliteti ter možnost studijskega snemanja v
                našem snemalnem studiu{" "}
                <a
                  href="https://www.studio-mars.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Studio MARS
                </a>
                .
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {[
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  ),
                  label: "Osebni pristop",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                    />
                  ),
                  label: "Zanesljivost",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.42 15.17l-5.1-2.04a.5.5 0 01.24-.94l5.67 1.89a.5.5 0 01.34.47v5.95a.5.5 0 01-.74.44l-5.1-2.83a.5.5 0 01-.26-.44v-5.26m13.5-2.45l-5.1 2.04a.5.5 0 00-.24.94l5.67-1.89a.5.5 0 00-.34-.47V4.5a.5.5 0 00.74-.44l5.1 2.83"
                    />
                  ),
                  label: "Fleksibilnost",
                },
                {
                  icon: (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  ),
                  label: "Kakovost",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <svg
                      className="w-5 h-5 text-accent"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text-primary">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
