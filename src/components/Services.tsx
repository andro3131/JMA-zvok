import Link from "next/link";

const services = [
  {
    title: "Ozvočenje dogodkov",
    description:
      "Profesionalno ozvočenje za poroke, praznovanja, šolske prireditve, občinske dogodke in manjše koncerte. Kristalno čist zvok za dogodke do 500 oseb.",
    features: [
      "Poroke in praznovanja",
      "Občinske in vaške prireditve",
      "Šolske slovesnosti",
      "Predavanja in predstavitve",
      "Manjši koncerti in nastopi",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
        />
      </svg>
    ),
  },
  {
    title: "Video snemanje",
    description:
      "Profesionalno video snemanje prireditev v 4K kvaliteti. Obdelava videa in možnost kombinacije s profesionalno posnetim zvokom za najboljši končni izdelek.",
    features: [
      "4K video snemanje",
      "Profesionalna obdelava videa",
      "Kombinacija s posnetim zvokom",
      "Snemanje nastopov in dogodkov",
      "Končni izdelek po meri",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
        />
      </svg>
    ),
  },
  {
    title: "Snemanje v studiu",
    description:
      "V našem snemalnem studiu Studio MARS ponujamo profesionalno snemanje glasbe, podcastov in voiceoverjev. Možnost snemanja v živo na prireditvah s post-produkcijo.",
    features: [
      "Profesionalni snemalni studio",
      "Snemanje glasbe in podcastov",
      "Snemanje v živo na prireditvah",
      "Miks in mastering",
      "Post-produkcija zvoka",
    ],
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
        />
      </svg>
    ),
    link: "https://www.studio-mars.com",
    linkLabel: "Obiščite Studio MARS",
  },
];

export default function Services() {
  return (
    <section id="storitve" className="py-24 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            Naše storitve
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-4">
            Vse za vaš{" "}
            <span className="text-accent">popoln dogodek</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            Od profesionalnega ozvočenja do video snemanja in studijskega dela —
            poskrbimo za celotno zvočno in vizualno izkušnjo vašega dogodka.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-bg-card border border-border rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 group"
            >
              <div className="text-accent mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <svg
                      className="w-4 h-4 text-accent shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.link && (
                <Link
                  href={service.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm font-medium transition-colors"
                >
                  {service.linkLabel}
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
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Additional note about lighting */}
        <div className="mt-12 text-center">
          <p className="text-text-muted text-sm">
            Poleg naših glavnih storitev nudimo tudi{" "}
            <span className="text-text-secondary">
              LED razsvetljavo in dimne efekte
            </span>{" "}
            kot dodatek pri ozvočenju za popolno vzdušje.
          </p>
        </div>
      </div>
    </section>
  );
}
