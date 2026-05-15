import Image from "next/image";

const orte = [
  "Berlin",
  "Potsdam",
  "Teltow",
  "Kleinmachnow",
  "Ludwigsfelde",
  "Stahnsdorf",
  "Werder (Havel)",
  "Geltow",
  "Schwielowsee",
  "Brandenburg a.d. Havel",
  "Großbeeren",
  "Blankenfelde-Mahlow",
];

export default function ServiceGebiet() {
  return (
    <section
      className="py-24 px-5"
      style={{
        background: "linear-gradient(180deg, var(--bg) 0%, var(--surface) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
              Service-Gebiet
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ color: "var(--text)" }}>
              Wir kommen zu Ihnen.
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: "var(--muted)" }}>
              Mein Hauptgebiet ist Berlin und Brandenburg. Bei besonders komplexen oder bedeutenden
              Fällen fahren wir auch deutschlandweit – sprechen Sie uns einfach an.
            </p>

            <div className="flex flex-wrap gap-2">
              {orte.map((ort) => (
                <span
                  key={ort}
                  className="px-3 py-1.5 rounded-full text-sm font-medium"
                  style={{
                    background: "var(--surface-2)",
                    border: "1px solid var(--border-2)",
                    color: "var(--text)",
                  }}
                >
                  {ort}
                </span>
              ))}
              <span
                className="px-3 py-1.5 rounded-full text-sm font-bold"
                style={{
                  background: "rgba(2,82,150,0.08)",
                  border: "1px solid rgba(2,82,150,0.2)",
                  color: "var(--primary)",
                }}
              >
                + deutschlandweit auf Anfrage
              </span>
            </div>
          </div>

          <div
            className="flex-shrink-0 w-full md:w-72 p-8 rounded-2xl text-center"
            style={{
              background: "var(--bg)",
              border: "1px solid var(--border)",
            }}
          >
            <div className="w-full rounded-xl mb-4 overflow-hidden" style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.08)" }}>
              <Image
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=600&q=80"
                alt="KFZ-Gutachter fährt zum Kunden"
                width={600}
                height={300}
                className="w-full h-40 object-cover"
              />
            </div>
            <p className="text-2xl font-black mb-2" style={{ color: "var(--text)" }}>
              Anfahrt kostenlos
            </p>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              Die Fahrtkosten für die Begutachtung vor Ort trägt die gegnerische Versicherung –
              nicht Sie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
