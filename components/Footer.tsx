"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="kontakt"
      className="py-16 px-5"
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
                style={{ background: "var(--primary)" }}
              >
                S
              </div>
              <span className="font-bold" style={{ color: "var(--text)" }}>
                Schwanke KFZ-Gutachten
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Zertifizierter KFZ-Sachverständiger für Unfallgutachten, Wertgutachten und
              Schadenregulierung in Berlin & Brandenburg.
            </p>
          </div>

          <div>
            <p className="font-bold mb-4 text-sm" style={{ color: "var(--text)" }}>
              Kontakt
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:033283376770"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <Phone size={14} style={{ color: "var(--primary)" }} />
                03328 / 337 67 70
              </a>
              <a
                href="https://wa.me/491723831379"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm transition-colors"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <MessageCircle size={14} style={{ color: "#25D366" }} />
                WhatsApp: 0172 / 383 13 79
              </a>
              <div className="flex items-start gap-2 text-sm" style={{ color: "var(--muted)" }}>
                <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: "var(--primary)" }} />
                <span>Heinrich Heine Str. 2, 14513 Teltow</span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-bold mb-4 text-sm" style={{ color: "var(--text)" }}>
              Leistungen
            </p>
            <div className="flex flex-col gap-2">
              {["Unfallgutachten", "Wertgutachten", "Schadenregulierung", "Fahrzeugbewertung"].map(
                (l) => (
                  <span key={l} className="text-sm" style={{ color: "var(--muted)" }}>
                    {l}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}
        >
          <span>© {new Date().getFullYear()} Marco Schwanke – KFZ-Sachverständigenbüro</span>
          <div className="flex gap-4">
            <a
              href="/impressum"
              className="transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="transition-colors"
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
