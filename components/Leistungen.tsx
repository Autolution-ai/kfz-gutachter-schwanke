"use client";

import { Car, TrendingUp, Shield } from "lucide-react";

const leistungen = [
  {
    icon: Car,
    title: "Unfallgutachten",
    description:
      "Nach einem Unfall klären wir Schuldfrage, Schadenshöhe und Reparaturkosten – vollständig dokumentiert und gerichtsfest. Bei unverschuldetem Unfall entstehen Ihnen keine Kosten.",
    bullets: [
      "Kostenlos bei Unverschulden",
      "Direktabwicklung mit der Versicherung",
      "Gutachten fertig in Ø 76 Stunden",
      "Vor-Ort-Service inkl. Anfahrt",
    ],
    cta: "Jetzt melden",
    href: "tel:033283376770",
    accent: true,
  },
  {
    icon: TrendingUp,
    title: "Wertgutachten",
    description:
      "Professionelle Fahrzeugbewertung für Kauf, Verkauf, Oldtimer, Leasingrückgabe oder Erbschaft. Transparente Marktwertermittlung nach anerkannten Standards.",
    bullets: [
      "Gebrauchte & klassische Fahrzeuge",
      "Oldtimer-Bewertung",
      "Leasingrückgabe",
      "Erbschaft & Vermögensbewertung",
    ],
    cta: "Anfrage stellen",
    href: "tel:033283376770",
    accent: false,
  },
  {
    icon: Shield,
    title: "Schadenregulierung",
    description:
      "Ich begleite Sie durch den gesamten Prozess der Schadensabwicklung – von der ersten Meldung bis zur finalen Einigung mit der Versicherung. Keine bürokratischen Hürden.",
    bullets: [
      "Beratung & Begleitung",
      "Kommunikation mit Versicherungen",
      "Durchsetzung Ihrer Ansprüche",
      "Deutschlandweit auf Anfrage",
    ],
    cta: "Beratung anfragen",
    href: "tel:033283376770",
    accent: false,
  },
];

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="py-24 px-5"
      style={{
        background:
          "linear-gradient(180deg, var(--bg) 0%, var(--surface) 50%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Leistungen
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text)" }}>
            Was ich für Sie tue.
          </h2>
          <p className="mt-4 text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Vollständiger Service – von der ersten Begutachtung bis zur abgeschlossenen Regulierung.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leistungen.map((l, i) => {
            const Icon = l.icon;
            return (
              <div
                key={i}
                className="flex flex-col p-8 rounded-2xl transition-all group"
                style={{
                  background: l.accent ? "rgba(234,123,60,0.06)" : "var(--surface)",
                  border: l.accent ? "1.5px solid rgba(234,123,60,0.25)" : "1px solid var(--border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: l.accent ? "rgba(234,123,60,0.2)" : "var(--surface-2)",
                    border: l.accent ? "1px solid rgba(234,123,60,0.3)" : "1px solid var(--border-2)",
                  }}
                >
                  <Icon size={22} style={{ color: "var(--accent)" }} />
                </div>

                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>
                  {l.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
                  {l.description}
                </p>

                <ul className="flex flex-col gap-2 mb-8 flex-1">
                  {l.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm" style={{ color: "var(--text)" }}>
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href={l.href}
                  className="flex items-center justify-center py-3 px-6 rounded-xl text-sm font-semibold transition-all mt-auto"
                  style={
                    l.accent
                      ? { background: "var(--accent)", color: "#fff" }
                      : { border: "1.5px solid var(--border-2)", color: "var(--text)" }
                  }
                  onMouseEnter={(e) => {
                    if (l.accent) {
                      e.currentTarget.style.background = "var(--accent-hover)";
                    } else {
                      e.currentTarget.style.borderColor = "var(--accent)";
                      e.currentTarget.style.background = "rgba(234,123,60,0.08)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (l.accent) {
                      e.currentTarget.style.background = "var(--accent)";
                    } else {
                      e.currentTarget.style.borderColor = "var(--border-2)";
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  {l.cta}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
