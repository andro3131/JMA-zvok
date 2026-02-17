"use client";

import { useState, type FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // For now, just simulate sending — replace with actual endpoint later
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      eventType: formData.get("eventType"),
      message: formData.get("message"),
    };

    try {
      // TODO: Replace with actual form submission (e.g., email API, Formspree, etc.)
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="py-24 bg-bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">
              Kontakt
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Imate dogodek?{" "}
              <span className="text-accent">Pišite nam.</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Pošljite nam povpraševanje in skupaj bomo našli najboljšo rešitev
              za vaš dogodek. Odgovorimo v najkrajšem možnem času.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">E-pošta</h3>
                  <a
                    href="mailto:jma.zvok@gmail.com"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    jma.zvok@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Telefon</h3>
                  <a
                    href="tel:+38641758572"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    041 758 572
                  </a>
                  <span className="text-text-muted mx-1">·</span>
                  <span className="text-text-muted text-sm">Andrej</span>
                  <br />
                  <a
                    href="tel:+38641262566"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    041 262 566
                  </a>
                  <span className="text-text-muted mx-1">·</span>
                  <span className="text-text-muted text-sm">Jaka</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <svg
                    className="w-5 h-5 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Lokacija</h3>
                  <p className="text-text-secondary">
                    Dolenjska, Slovenija
                    <br />
                    <span className="text-sm text-text-muted">
                      Pokrivamo celotno Slovenijo
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-bg-card border border-border rounded-2xl p-8">
            {status === "sent" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-accent"
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
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Sporočilo poslano!
                </h3>
                <p className="text-text-secondary">
                  Hvala za vaše povpraševanje. Odgovorili vam bomo v najkrajšem
                  možnem času.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Ime in priimek
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Janez Novak"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      E-pošta
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="janez@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium mb-2"
                    >
                      Telefon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="+386 XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-sm font-medium mb-2"
                    >
                      Vrsta dogodka
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent transition-colors"
                    >
                      <option value="">Izberite...</option>
                      <option value="poroka">Poroka / Praznovanje</option>
                      <option value="prireditev">Občinska prireditev</option>
                      <option value="solska">Šolska prireditev</option>
                      <option value="koncert">Manjši koncert</option>
                      <option value="predavanje">
                        Predavanje / Predstavitev
                      </option>
                      <option value="video">Video snemanje</option>
                      <option value="drugo">Drugo</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Sporočilo
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-bg-primary border border-border rounded-lg px-4 py-3 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
                    placeholder="Opišite vaš dogodek — datum, lokacija, število gostov, želje..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-accent hover:bg-accent-light disabled:opacity-50 text-bg-primary font-bold py-4 rounded-lg transition-all duration-200 text-lg hover:scale-[1.02]"
                >
                  {status === "sending"
                    ? "Pošiljam..."
                    : "Pošlji povpraševanje"}
                </button>

                {status === "error" && (
                  <p className="text-red-400 text-sm text-center">
                    Prišlo je do napake. Prosimo, poskusite znova ali nas
                    kontaktirajte po e-pošti.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
