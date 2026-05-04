"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

const links = [
  { label: "Ablauf", href: "#ablauf" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-black text-sm"
            style={{ background: "var(--primary)" }}
          >
            S
          </div>
          <span className="font-bold text-base" style={{ color: "var(--text)" }}>
            Schwanke{" "}
            <span className="font-normal" style={{ color: "var(--muted)" }}>
              KFZ-Gutachten
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium rounded-lg transition-colors"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="tel:033283376770"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white transition-all"
          style={{ background: "var(--accent)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--accent-hover)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--accent)")}
        >
          <Phone size={15} />
          Jetzt anrufen
        </a>

        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--text)" }}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-5 pb-5 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(255,255,255,0.98)", borderTop: "1px solid var(--border)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="py-3 text-sm font-medium"
              style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:033283376770"
            className="mt-3 flex items-center justify-center gap-2 py-3 rounded-lg text-sm font-semibold text-white"
            style={{ background: "var(--accent)" }}
          >
            <Phone size={15} />
            Jetzt anrufen
          </a>
        </div>
      )}
    </header>
  );
}
