const zahlen = [
  {
    value: "76",
    unit: "Std.",
    label: "Ø Fertigstellungszeit",
    sub: "Vom Anruf zum fertigen Gutachten",
  },
  {
    value: "~20",
    unit: "Jahre",
    label: "Erfahrung",
    sub: "In der Automobilbranche",
  },
  {
    value: "0",
    unit: "€",
    label: "Kosten für Sie",
    sub: "Bei unverschuldetem Unfall",
  },
  {
    value: "DE",
    unit: "weit",
    label: "Vor-Ort-Service",
    sub: "Wenn es sich lohnt, fahren wir überall hin",
  },
];

export default function TrustZahlen() {
  return (
    <section
      className="py-24 px-5"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
            Warum Schwanke?
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text)" }}>
            Zahlen, die zählen.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {zahlen.map((z, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center p-8 rounded-2xl"
              style={{
                background: "var(--bg)",
                border: "1px solid var(--border)",
              }}
            >
              <div className="flex items-end gap-1 mb-2">
                <span
                  className="text-5xl md:text-6xl font-black leading-none"
                  style={{ color: "var(--primary)" }}
                >
                  {z.value}
                </span>
                <span
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--primary)" }}
                >
                  {z.unit}
                </span>
              </div>
              <p className="font-bold mb-1" style={{ color: "var(--text)" }}>
                {z.label}
              </p>
              <p className="text-xs" style={{ color: "var(--muted)" }}>
                {z.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
