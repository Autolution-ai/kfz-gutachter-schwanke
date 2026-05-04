"use client";

import { Phone, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";

const badges = [
  "Kostenlos bei unverschuldetem Unfall",
  "Direktabwicklung mit der Versicherung",
  "Auch am Wochenende",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(2,82,150,0.07) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-2), transparent)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-5 pt-24 pb-16 text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
          style={{
            background: "rgba(2,82,150,0.07)",
            borderColor: "rgba(2,82,150,0.2)",
            color: "var(--primary)",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "var(--primary)" }}
          />
          Verfügbar in Berlin & Brandenburg
        </div>

        <h1
          className="text-5xl md:text-7xl font-black tracking-tight mb-10 leading-tight"
          style={{ color: "var(--text)" }}
        >
          Unfallschaden?
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, var(--primary) 0%, #0B66C2 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Gutachten in 76 Std.
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-4 max-w-2xl mx-auto" style={{ color: "var(--muted)" }}>
          Marco Schwanke – zertifizierter KFZ-Sachverständiger aus Teltow.
          Ich komme zu Ihnen, kläre die Schuldfrage und liefere ein gerichtsfestes Gutachten.
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10 mt-8">
          {badges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full"
              style={{
                background: "rgba(2,82,150,0.06)",
                border: "1px solid var(--border-2)",
                color: "var(--text)",
              }}
            >
              <CheckCircle2 size={13} style={{ color: "var(--primary)" }} />
              {b}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:033283376770"
            className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all shadow-lg"
            style={{
              background: "var(--primary)",
              boxShadow: "0 4px 24px rgba(2,82,150,0.25)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-hover)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 32px rgba(2,82,150,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 24px rgba(2,82,150,0.25)";
            }}
          >
            <Phone size={20} />
            03328 / 337 67 70
          </a>
          <a
            href="https://wa.me/491723831379"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all text-white"
            style={{
              background: "var(--primary)",
              boxShadow: "0 4px 24px rgba(2,82,150,0.2)",
              opacity: 0.85,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "1";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "0.85";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <MessageCircle size={20} />
            WhatsApp schreiben
          </a>
        </div>

        <p className="mt-5 text-sm" style={{ color: "var(--muted)" }}>
          Anfahrt kostenlos · Zertifizierter Sachverständiger · Fast 20 Jahre Erfahrung
        </p>
      </div>

      <a
        href="#ablauf"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "var(--muted)" }}
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs font-medium">Ablauf ansehen</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
