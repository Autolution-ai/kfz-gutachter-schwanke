import { Star } from "lucide-react";

const reviews = [
  {
    name: "Stefan K.",
    location: "Potsdam",
    car: "VW Golf, Heckschaden",
    text: "Nach meinem Unfall war ich total überfordert. Marco hat innerhalb eines Tages einen Termin gemacht und mir alles erklärt. Das Gutachten war in knapp 3 Tagen fertig. Die Versicherung hat ohne Diskussion gezahlt.",
    stars: 5,
  },
  {
    name: "Andrea M.",
    location: "Berlin-Steglitz",
    car: "BMW 3er, Seitenschaden",
    text: "Absolut professionell und unkompliziert. Herr Schwanke ist pünktlich erschienen, hat sich Zeit genommen und alle meine Fragen beantwortet. Nie wieder ohne unabhängigen Gutachter!",
    stars: 5,
  },
  {
    name: "Thomas R.",
    location: "Kleinmachnow",
    car: "Mercedes C-Klasse, Totalschaden",
    text: "Hatte einen Totalschaden und war unsicher wegen der Versicherungssumme. Dank des Gutachtens wurde deutlich mehr erstattet als zunächst angeboten. Klare Empfehlung.",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="var(--accent)" style={{ color: "var(--accent)" }} />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      className="py-24 px-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
            Kundenstimmen
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ color: "var(--text)" }}>
            Was Kunden sagen.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="flex flex-col p-7 rounded-2xl"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
            >
              <Stars count={r.stars} />
              <p className="mt-5 mb-6 text-sm leading-relaxed flex-1 italic" style={{ color: "var(--muted)" }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div
                className="pt-5 flex items-center gap-3"
                style={{ borderTop: "1px solid var(--border)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0"
                  style={{ background: "var(--surface-2)", color: "var(--accent)", border: "1px solid var(--border-2)" }}
                >
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                    {r.name}
                  </p>
                  <p className="text-xs" style={{ color: "var(--muted)" }}>
                    {r.location} · {r.car}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
