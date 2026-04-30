"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/data/site";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b-2 border-[#c0392b] h-16 flex items-center justify-between px-6 md:px-9">
        
        {/* Logo — exactly as you had it */}
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setMenuOpen(false)}>
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain rounded-full border border-[#c0392b] group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-sm tracking-wide">
              {SITE.name.split(" ").slice(0, 2).join(" ")}
            </span>
            <span className="text-[#c0392b] text-[10px] font-semibold tracking-[2px] uppercase">
              {SITE.tagline}
            </span>
          </div>
        </Link>

        {/* Desktop nav — centered, exactly as before */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium uppercase tracking-wide transition-colors whitespace-nowrap ${
                pathname === l.href
                  ? "text-[#c0392b]"
                  : "text-gray-400 hover:text-[#c0392b]"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Mobile right side — Call Now + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="bg-[#c0392b] text-white text-xs font-bold px-4 py-2 rounded"
          >
            Call Now
          </a>
          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white p-1"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown — only shows on small screens when open */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#0a0a0a] border-b-2 border-[#c0392b]">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`flex px-6 py-4 text-sm font-medium uppercase tracking-wide border-b border-white/5 transition-colors ${
                pathname === l.href
                  ? "text-[#c0392b] bg-white/5"
                  : "text-gray-400 hover:text-[#c0392b] hover:bg-white/5"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="px-6 py-4">
            <Link
              href="/booking"
              onClick={() => setMenuOpen(false)}
              className="block w-full bg-[#c0392b] text-white text-center py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
            >
              📞 Book Appointment
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
