"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoIcon from "./LogoIcon";
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

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b-2 border-[#c0392b] h-16 flex items-center justify-between px-6 md:px-9">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 group">
         <img
    src="/images/logo.png"   // put your uploaded logo inside public/logo.png
    alt="Logo"
    className="w-12 h-12 object-contain rounded-full border border-[#c0392b] group-hover:scale-105 transition-transform"
  />
        <div className="flex flex-col leading-tight">
          <span className="text-white font-extrabold text-sm tracking-wide">{SITE.name.split(" ").slice(0, 2).join(" ")}</span>
          <span className="text-[#c0392b] text-[10px] font-semibold tracking-[2px] uppercase">{SITE.tagline}</span>
        </div>
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`text-[13px] font-medium uppercase tracking-wide transition-colors ${
              pathname === l.href ? "text-[#c0392b]" : "text-gray-400 hover:text-[#c0392b]"
            }`}
          >
            {l.label}
          </Link>
        ))}
      </div>

      {/* Mobile hamburger placeholder — can extend */}
      <div className="md:hidden flex items-center">
        <a
          href={`tel:${SITE.phone}`}
          className="bg-[#c0392b] text-white text-xs font-bold px-4 py-2 rounded"
        >
          Call Now
        </a>
      </div>
    </nav>
  );
}
