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
            <div
              className="w-full h-40 rounded-xl mb-4 flex flex-col items-center justify-center gap-2"
              style={{ background: "var(--surface-2)", border: "2px dashed var(--border-2)" }}
            >
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>
                <path d="M21 15l-5-5L5 21"/>
              </svg>
              <span className="text-xs font-medium" style={{ color: "var(--muted)" }}>Foto einfügen</span>
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
