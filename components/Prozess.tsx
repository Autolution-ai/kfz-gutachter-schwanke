"use client";

import { PhoneCall, MapPin, FileText, CheckCircle } from "lucide-react";

const steps = [
  {
    nr: "01",
    icon: PhoneCall,
    title: "Schaden melden",
    text: "Rufen Sie uns an oder schreiben Sie uns per WhatsApp – kostenlos und unverbindlich. Wir klären gemeinsam die nächsten Schritte.",
  },
  {
    nr: "02",
    icon: MapPin,
    title: "Termin vor Ort",
    text: "Marco Schwanke kommt zu Ihnen nach Hause, direkt an die Werkstatt oder Unfallstelle – die Anfahrt ist für Sie kostenlos.",
  },
  {
    nr: "03",
    icon: FileText,
    title: "Gutachten erstellen",
    text: "Vollständige Schadensanalyse, professionelle Fotodokumentation, Schuldfrage & Reparaturkosten – alles gerichtsfest aufbereitet.",
  },
  {
    nr: "04",
    icon: CheckCircle,
    title: "Fertig in 76 Stunden",
    text: "Ihr fertiges Gutachten – inklusive direkter Kommunikation mit der Gegnerversicherung. Kein Stress, kein Papierkrieg.",
    highlight: true,
  },
];

export default function Prozess() {
  return (
    <section
      id="ablauf"
      className="py-24 px-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            So funktioniert es
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text)" }}>
            Einfacher Ablauf.
            <br />
            <span style={{ color: "var(--muted)" }}>In 4 Schritten zum Gutachten.</span>
          </h2>
        </div>

        <div className="relative">
          <div
            className="hidden md:block absolute top-12 left-0 right-0 h-px"
            style={{
              background: "linear-gradient(90deg, transparent 4%, var(--border-2) 15%, var(--border-2) 85%, transparent 96%)",
              marginLeft: "12.5%",
              marginRight: "12.5%",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={i}
                  className="relative flex flex-col items-center text-center p-6 rounded-2xl transition-all"
                  style={{
                    background: step.highlight ? "rgba(234,123,60,0.08)" : "var(--surface)",
                    border: step.highlight ? "1.5px solid rgba(234,123,60,0.3)" : "1px solid var(--border)",
                  }}
                >
                  <div
                    className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: step.highlight
                        ? "linear-gradient(135deg, var(--accent), #F5A623)"
                        : "var(--surface-2)",
                      border: step.highlight ? "none" : "1px solid var(--border-2)",
                      boxShadow: step.highlight ? "0 4px 20px rgba(234,123,60,0.3)" : "none",
                    }}
                  >
                    <Icon
                      size={24}
                      color={step.highlight ? "#fff" : "var(--accent)"}
                    />
                  </div>

                  <div
                    className="absolute top-3 right-4 text-5xl font-black select-none"
                    style={{ color: step.highlight ? "rgba(234,123,60,0.15)" : "rgba(240,244,250,0.04)" }}
                  >
                    {step.nr}
                  </div>

                  <h3
                    className="text-lg font-bold mb-3"
                    style={{ color: "var(--text)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {step.text}
                  </p>

                  {step.highlight && (
                    <span
                      className="mt-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "rgba(234,123,60,0.2)", color: "var(--accent)" }}
                    >
                      ⚡ Ø 76 Stunden
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
