"use client";

import Image from "next/image";
import { Phone, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";

const badges = [
  "Kostenlos bei unverschuldetem Unfall",
  "Direktabwicklung mit der Versicherung",
  "Auch am Wochenende",
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 20% 50%, rgba(2,82,150,0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, var(--border-2), transparent)" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-16 w-full">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Text-Seite */}
          <div className="flex-1 text-left">
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
              className="text-5xl md:text-6xl font-black tracking-tight mb-10 leading-tight"
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

            <p className="text-lg md:text-xl mb-8 max-w-xl" style={{ color: "var(--muted)" }}>
              Marco Schwanke – zertifizierter KFZ-Sachverständiger aus Teltow.
              Ich komme zu Ihnen, kläre die Schuldfrage und liefere ein gerichtsfestes Gutachten.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
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

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:033283376770"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all shadow-lg"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 4px 24px rgba(2,82,150,0.25)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--primary-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Phone size={20} />
                03328 / 337 67 70
              </a>
              <a
                href="https://wa.me/491723831379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all"
                style={{
                  border: "1.5px solid var(--border-2)",
                  color: "var(--text)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--primary)";
                  e.currentTarget.style.background = "rgba(2,82,150,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <MessageCircle size={20} style={{ color: "#25D366" }} />
                WhatsApp schreiben
              </a>
            </div>

            <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
              Anfahrt kostenlos · Zertifizierter Sachverständiger · Fast 20 Jahre Erfahrung
            </p>
          </div>

          {/* Bild-Seite */}
          <div className="flex-shrink-0 w-full md:w-[480px] relative">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                boxShadow: "0 24px 60px rgba(2,82,150,0.12), 0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=960&q=85"
                alt="KFZ-Sachverständiger bei der Arbeit"
                width={960}
                height={640}
                className="w-full h-auto object-cover"
                style={{ aspectRatio: "3/2" }}
                priority
              />
              {/* Kleines Trust-Badge über dem Bild */}
              <div
                className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.95)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-black text-sm"
                  style={{ background: "var(--primary)" }}
                >
                  76h
                </div>
                <div>
                  <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
                    Gutachten in Ø 76 Stunden
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    Von der Besichtigung bis zur Fertigstellung
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <a
        href="#ablauf"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "var(--muted)" }}
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs font-medium">Ablauf ansehen</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
