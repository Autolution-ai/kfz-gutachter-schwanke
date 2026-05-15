import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum – KFZ-Gutachter Schwanke",
  description: "Impressum und Anbieterkennzeichnung des KFZ-Sachverständigenbüros Marco Schwanke.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
  return (
    <div className="min-h-screen py-24 px-5" style={{ background: "var(--bg)" }}>
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-colors"
          style={{ color: "var(--muted)" }}
        >
          ← Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-black mb-10" style={{ color: "var(--text)" }}>
          Impressum
        </h1>

        <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Angaben gemäß § 5 TMG
            </h2>
            <p>
              Marco Schwanke<br />
              KFZ-Sachverständigenbüro<br />
              Heinrich Heine Str. 2<br />
              14513 Teltow
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Kontakt
            </h2>
            <p>
              Telefon: 03328 / 337 67 70<br />
              WhatsApp: 0172 / 383 13 79<br />
              E-Mail: sv.buero.schwanke@gmx.de
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Berufsbezeichnung und berufsrechtliche Regelungen
            </h2>
            <p>
              Berufsbezeichnung: Öffentlich bestellter und vereidigter Sachverständiger (sofern zutreffend)
              bzw. zertifizierter KFZ-Sachverständiger.<br />
              Zuständige Kammer: [zuständige Kammer / Verband eintragen]
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Umsatzsteuer-ID
            </h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
              [USt-ID eintragen, sofern vorhanden]
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Streitschlichtung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--primary)" }}
              >
                https://ec.europa.eu/consumers/odr
              </a>
              .<br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              Haftung für Inhalte
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
