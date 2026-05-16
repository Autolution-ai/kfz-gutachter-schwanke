import Image from "next/image";
import { Award, Users, Clock } from "lucide-react";

const punkte = [
  { icon: Award, text: "Zertifizierter KFZ-Sachverständiger" },
  { icon: Clock, text: "Fast 20 Jahre Automobilbranche" },
  { icon: Users, text: "Persönlicher Ansprechpartner – kein Call-Center" },
];

export default function UeberMarco() {
  return (
    <section
      id="ueber-uns"
      className="py-24 px-5"
      style={{ background: "var(--bg)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div
            className="flex-shrink-0 w-full md:w-72 rounded-2xl overflow-hidden"
            style={{ boxShadow: "0 12px 40px rgba(2,82,150,0.1), 0 4px 12px rgba(0,0,0,0.06)" }}
          >
            <Image
              src="https://image.jimcdn.com/app/cms/image/transf/dimension=354x10000:format=jpg/path/s03b8ffe50e0f5273/image/i812dac85df8f864a/version/1753359480/image.jpg"
              alt="Marco Schwanke – KFZ-Sachverständiger"
              width={600}
              height={600}
              className="w-full h-auto"
            />
          </div>

          <div className="flex-1">
            <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: "var(--primary)" }}>
              Über mich
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6" style={{ color: "var(--text)" }}>
              Marco Schwanke.
              <br />
              <span style={{ color: "var(--muted)" }}>Ihr Gutachter in der Region.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              Als zertifizierter KFZ-Sachverständiger mit fast zwei Jahrzehnten Erfahrung in der
              Automobilbranche kenne ich jeden Aspekt des Schadensgeschäfts. Ich beschränke mich
              nicht nur auf das Erstellen von Gutachten – ich stehe Ihnen durch den gesamten Prozess
              der Schadenregulierung mit Rat und Tat zur Seite.
            </p>

            <div className="flex flex-col gap-3">
              {punkte.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(2,82,150,0.1)", border: "1px solid rgba(2,82,150,0.15)" }}
                  >
                    <Icon size={16} style={{ color: "var(--primary)" }} />
                  </div>
                  <span className="font-medium" style={{ color: "var(--text)" }}>
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
