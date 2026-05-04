import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KFZ-Gutachter Schwanke | Unfallgutachten in 76 Stunden",
  description:
    "KFZ-Sachverständiger Marco Schwanke – Unfallgutachten, Wertgutachten & Schadenregulierung. Kostenlos bei unverschuldetem Unfall. Vor-Ort-Service in Berlin & Brandenburg. ☎ 03328 / 3376770",
  keywords: [
    "KFZ-Gutachter",
    "KFZ-Sachverständiger",
    "Unfallgutachten",
    "Berlin",
    "Brandenburg",
    "Teltow",
    "Potsdam",
    "Marco Schwanke",
    "Wertgutachten",
    "Schadenregulierung",
  ],
  openGraph: {
    title: "KFZ-Gutachter Schwanke | Gutachten in 76 Stunden",
    description:
      "Professionelle Unfallgutachten & Wertgutachten. Kostenlos bei unverschuldetem Unfall. Berlin & Brandenburg.",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="min-h-screen" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
