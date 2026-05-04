import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="py-24 px-5"
      style={{
        background:
          "linear-gradient(135deg, var(--surface) 0%, var(--bg) 100%)",
      }}
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl p-10 md:p-16 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(234,123,60,0.15) 0%, rgba(11,102,194,0.1) 100%)",
            border: "1.5px solid rgba(234,123,60,0.25)",
          }}
        >
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1"
            style={{
              background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
              opacity: 0.6,
            }}
          />

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-6 border"
            style={{
              background: "rgba(234,123,60,0.1)",
              borderColor: "rgba(234,123,60,0.3)",
              color: "var(--accent)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            Kostenlose Erstberatung
          </div>

          <h2
            className="text-4xl md:text-5xl font-black tracking-tight mb-4"
            style={{ color: "var(--text)" }}
          >
            Unfall gehabt?
            <br />
            Jetzt handeln.
          </h2>
          <p className="text-lg mb-10 max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            Warten kostet Sie Beweise und Zeit. Rufen Sie jetzt an – ich berate Sie sofort,
            unverbindlich und kostenlos.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:033283376770"
              className="flex items-center gap-3 px-8 py-4 rounded-xl text-white font-bold text-lg transition-all w-full sm:w-auto justify-center"
              style={{
                background: "var(--accent)",
                boxShadow: "0 4px 24px rgba(234,123,60,0.35)",
              }}
            >
              <Phone size={20} />
              03328 / 337 67 70
            </a>
            <a
              href="https://wa.me/491723831379"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg transition-all w-full sm:w-auto justify-center"
              style={{
                border: "1.5px solid var(--border-2)",
                color: "var(--text)",
              }}
            >
              <MessageCircle size={20} style={{ color: "#25D366" }} />
              WhatsApp
            </a>
          </div>

          <p className="mt-6 text-sm" style={{ color: "var(--muted)" }}>
            Mo–Fr 8–18 Uhr · Sa 9–14 Uhr · Notfälle jederzeit
          </p>
        </div>
      </div>
    </section>
  );
}
