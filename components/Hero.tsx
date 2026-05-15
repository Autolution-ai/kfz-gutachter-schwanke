"use client";

import { Phone, MessageCircle, CheckCircle2, ChevronDown } from "lucide-react";

const badges = [
  "Kostenlos bei unverschuldetem Unfall",
  "Direktabwicklung mit der Versicherung",
  "Auch am Wochenende",
];

const stats = [
  { value: "76", unit: "Std.", label: "Ø Fertigstellungszeit", sub: "Von Besichtigung bis Gutachten" },
  { value: "~20", unit: "Jahre", label: "Branchenerfahrung", sub: "In der Automobilbranche" },
  { value: "0", unit: "€", label: "Kosten für Sie", sub: "Bei unverschuldetem Unfall" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://videos.pexels.com/video-files/8987024/8987024-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(2,18,45,0.92) 0%, rgba(2,25,60,0.80) 55%, rgba(2,18,45,0.65) 100%)",
          zIndex: 1,
        }}
      />

      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12), transparent)", zIndex: 2 }}
      />

      <div className="relative w-full max-w-6xl mx-auto px-5 pt-28 pb-24" style={{ zIndex: 2 }}>
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Text links */}
          <div className="flex-1 min-w-0">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-8 border"
              style={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(255,255,255,0.2)",
                color: "rgba(255,255,255,0.85)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#4ADE80" }} />
              Verfügbar in Berlin & Brandenburg
            </div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.05]"
              style={{ color: "#FFFFFF" }}
            >
              Unfallschaden?
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #60A5FA 0%, #93C5FD 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Gutachten in 76 Std.
              </span>
            </h1>

            <p
              className="text-lg md:text-xl mb-8 max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.72)" }}
            >
              Marco Schwanke – zertifizierter KFZ-Sachverständiger aus Teltow.
              Ich komme zu Ihnen, kläre die Schuldfrage und liefere ein gerichtsfestes Gutachten.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-10">
              {badges.map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1.5 text-sm px-3.5 py-2 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid rgba(255,255,255,0.18)",
                    color: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <CheckCircle2 size={13} style={{ color: "#4ADE80" }} />
                  {b}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:033283376770"
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 4px 30px rgba(2,82,150,0.5)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--primary-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 40px rgba(2,82,150,0.65)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 30px rgba(2,82,150,0.5)";
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
                  background: "rgba(255,255,255,0.1)",
                  border: "1.5px solid rgba(255,255,255,0.28)",
                  color: "#FFFFFF",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.18)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.28)";
                }}
              >
                <MessageCircle size={20} style={{ color: "#25D366" }} />
                WhatsApp schreiben
              </a>
            </div>

            <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.38)" }}>
              Anfahrt kostenlos · Zertifizierter Sachverständiger · Fast 20 Jahre Erfahrung
            </p>
          </div>

          {/* Stat-Karten rechts */}
          <div className="hidden md:flex flex-col gap-4 flex-shrink-0 w-64">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl px-6 py-5"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex items-end gap-1.5 mb-1">
                  <span
                    className="font-black leading-none"
                    style={{ color: "#FFFFFF", fontSize: "2.25rem" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    className="font-bold mb-0.5"
                    style={{ color: "#60A5FA", fontSize: "1.1rem" }}
                  >
                    {stat.unit}
                  </span>
                </div>
                <p className="font-semibold text-sm mb-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {stat.label}
                </p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

      <a
        href="#ablauf"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce"
        style={{ color: "rgba(255,255,255,0.45)", zIndex: 2 }}
        aria-label="Nach unten scrollen"
      >
        <span className="text-xs font-medium">Ablauf ansehen</span>
        <ChevronDown size={18} />
      </a>
    </section>
  );
}
