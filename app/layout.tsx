import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kfz-gutachter-schwanke.de"),
  title: "KFZ-Gutachter Schwanke | Unfallgutachten Berlin & Brandenburg – 76 Stunden",
  description:
    "KFZ-Sachverständiger Marco Schwanke – zertifizierte Unfallgutachten, Wertgutachten & Schadenregulierung. Kostenlos bei unverschuldetem Unfall. Vor-Ort-Service in Berlin, Potsdam, Teltow & Brandenburg. ☎ 03328 / 337 67 70",
  keywords: [
    "KFZ-Gutachter Berlin",
    "KFZ-Sachverständiger Brandenburg",
    "Unfallgutachten Berlin",
    "Unfallgutachten Potsdam",
    "KFZ-Gutachter Teltow",
    "Schadenregulierung Berlin",
    "Wertgutachten KFZ",
    "Kfz Sachverständiger Kleinmachnow",
    "Marco Schwanke",
    "Gutachten nach Unfall kostenlos",
    "KFZ Gutachter Ludwigsfelde",
    "Unfallgutachten Blankenfelde-Mahlow",
  ],
  authors: [{ name: "Marco Schwanke – KFZ-Sachverständigenbüro" }],
  creator: "Marco Schwanke",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://www.kfz-gutachter-schwanke.de",
  },
  openGraph: {
    title: "KFZ-Gutachter Schwanke | Unfallgutachten in 76 Stunden",
    description:
      "Zertifizierte Unfallgutachten & Wertgutachten. Kostenlos bei unverschuldetem Unfall. Vor-Ort-Service in Berlin & Brandenburg.",
    url: "https://www.kfz-gutachter-schwanke.de",
    siteName: "KFZ-Gutachter Schwanke",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KFZ-Gutachter Schwanke | Gutachten in 76 Stunden",
    description:
      "Zertifizierter KFZ-Sachverständiger in Berlin & Brandenburg. Kostenlos bei unverschuldetem Unfall.",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.kfz-gutachter-schwanke.de",
  name: "KFZ-Gutachter Schwanke – Marco Schwanke",
  description:
    "Zertifizierter KFZ-Sachverständiger für Unfallgutachten, Wertgutachten und Schadenregulierung in Berlin und Brandenburg.",
  url: "https://www.kfz-gutachter-schwanke.de",
  telephone: "+4933283376770",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Teltow",
    addressRegion: "Brandenburg",
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 52.4006,
    longitude: 13.2646,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "14:00",
    },
  ],
  areaServed: [
    "Berlin",
    "Potsdam",
    "Teltow",
    "Kleinmachnow",
    "Ludwigsfelde",
    "Stahnsdorf",
    "Blankenfelde-Mahlow",
    "Brandenburg an der Havel",
  ],
  priceRange: "Kostenlos bei unverschuldetem Unfall",
  sameAs: ["https://www.kfz-gutachter-schwanke.de"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-screen" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
