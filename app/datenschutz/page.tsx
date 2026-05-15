import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutz – KFZ-Gutachter Schwanke",
  description: "Datenschutzerklärung des KFZ-Sachverständigenbüros Marco Schwanke gemäß DSGVO.",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
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

        <h1 className="text-4xl font-black mb-2" style={{ color: "var(--text)" }}>
          Datenschutzerklärung
        </h1>
        <p className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          Gemäß Art. 13, 14 DSGVO
        </p>

        <div className="flex flex-col gap-8 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              1. Verantwortlicher
            </h2>
            <p>
              Marco Schwanke<br />
              KFZ-Sachverständigenbüro<br />
              [Straße und Hausnummer]<br />
              14513 Teltow<br />
              Telefon: 03328 / 337 67 70<br />
              E-Mail: [E-Mail-Adresse]
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Diese Website erhebt keine personenbezogenen Daten durch Formulare, Tracking-Tools
              oder Cookies, die über technisch notwendige Funktionen hinausgehen. Es wird kein
              Google Analytics, kein Facebook Pixel oder vergleichbare Dienste eingesetzt.
            </p>
            <p className="mt-3">
              Wenn Sie uns über Telefon oder WhatsApp kontaktieren, verarbeiten wir die von Ihnen
              übermittelten Daten (Name, Telefonnummer, Schadensbeschreibung) ausschließlich zur
              Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO
              (Vertragsanbahnung).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              3. Hosting
            </h2>
            <p>
              Diese Website wird bei Vercel Inc. (340 Pine Street, Suite 900, San Francisco, CA 94104,
              USA) gehostet. Beim Abruf der Website werden automatisch Verbindungsdaten (IP-Adresse,
              Browsertyp, Datum und Uhrzeit) in Server-Logs erfasst. Diese Daten werden nicht mit
              anderen Datenquellen zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse am sicheren Betrieb der Website).
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              4. Schriftarten
            </h2>
            <p>
              Diese Website verwendet die Schriftart „Inter" über den Dienst Google Fonts. Die
              Schriftdateien werden beim Build-Prozess heruntergeladen und vom eigenen Server
              ausgeliefert. Es werden keine Daten an Google übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              5. Bildmaterial und Videos
            </h2>
            <p>
              Das auf dieser Website verwendete Bildmaterial stammt von Unsplash
              (unsplash.com – kostenlose Lizenz für kommerzielle Nutzung) und Pexels
              (pexels.com – kostenlose Lizenz für kommerzielle Nutzung). Die Medien werden
              vom eigenen Server ausgeliefert; es werden keine Daten an Unsplash oder Pexels
              übertragen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              6. WhatsApp
            </h2>
            <p>
              Diese Website enthält Links zum WhatsApp-Dienst der WhatsApp Ireland Limited. Wenn Sie
              auf den WhatsApp-Link klicken, verlassen Sie unsere Website. Die Datenverarbeitung
              durch WhatsApp unterliegt dann den Datenschutzbestimmungen von WhatsApp/Meta.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              7. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16),
              Löschung (Art. 17), Einschränkung der Verarbeitung (Art. 18) sowie
              Datenübertragbarkeit (Art. 20). Zur Wahrnehmung Ihrer Rechte wenden Sie sich
              bitte an die oben genannte Kontaktadresse. Sie haben außerdem das Recht,
              Beschwerde bei einer Datenschutz-Aufsichtsbehörde einzulegen.
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold mb-3" style={{ color: "var(--text)" }}>
              8. Aktualität
            </h2>
            <p>
              Diese Datenschutzerklärung hat den Stand Mai 2025. Wir behalten uns vor, sie bei
              Änderungen der rechtlichen Rahmenbedingungen oder unserer Dienste anzupassen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
