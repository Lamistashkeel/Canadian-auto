import Link from "next/link";
import LogoIcon from "./LogoIcon";
import { SITE } from "@/data/site";

const NAV = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

const SERVICES_SHORT = ["Engine Repair", "Brake Service", "A/C Repair", "Oil Change", "Electrical", "Detailing"];

function FacebookIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#1877F2" />
      <path d="M27 20H22.5V30H18.5V20H16V16.5H18.5V14.5C18.5 11.9 20 10 22.8 10L26 10.02V13.4H24C23.1 13.4 22.5 13.9 22.5 14.9V16.5H26L27 20Z" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <defs>
        <radialGradient id="igGrad" cx="30%" cy="107%" r="150%">
          <stop offset="0%" stopColor="#ffd676" />
          <stop offset="25%" stopColor="#f86434" />
          <stop offset="50%" stopColor="#d82d7e" />
          <stop offset="75%" stopColor="#9b36b7" />
          <stop offset="100%" stopColor="#515bd4" />
        </radialGradient>
      </defs>
      <rect width="40" height="40" rx="10" fill="url(#igGrad)" />
      <rect x="10" y="10" width="20" height="20" rx="6" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="20" cy="20" r="5" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="26.5" cy="13.5" r="1.5" fill="white" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="10" fill="#25D366" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 9C14 9 9 14 9 20C9 21.9 9.5 23.7 10.4 25.3L9 31L14.9 29.6C16.4 30.5 18.2 31 20 31C26 31 31 26 31 20C31 14 26 9 20 9ZM20 29C18.3 29 16.7 28.5 15.4 27.7L15 27.5L11.5 28.4L12.4 25L12.1 24.5C11.2 23.2 10.8 21.6 10.8 20C10.8 15.1 14.9 11 19.8 11C22.2 11 24.5 12 26.1 13.7C27.8 15.3 28.8 17.6 28.8 20C29 24.9 24.9 29 20 29Z" fill="white" />
      <path d="M25.5 22.5C25.2 22.3 23.7 21.5 23.4 21.4C23.1 21.3 22.9 21.3 22.7 21.5C22.5 21.8 21.9 22.5 21.7 22.7C21.5 22.9 21.4 22.9 21.1 22.8C20.8 22.6 19.9 22.3 18.8 21.3C18 20.5 17.4 19.5 17.2 19.2C17 18.9 17.2 18.7 17.3 18.5C17.5 18.3 17.7 18.1 17.8 17.9C17.9 17.7 18 17.5 17.9 17.3C17.8 17.1 17.2 15.6 17 15.1C16.8 14.6 16.5 14.6 16.3 14.6H15.8C15.6 14.6 15.2 14.7 14.9 15C14.6 15.3 13.9 16 13.9 17.5C13.9 19 15 20.4 15.1 20.6C15.3 20.8 17.3 24 20.5 25.3C23.7 26.5 23.7 26.1 24.3 26C24.9 25.9 26.1 25.2 26.4 24.5C26.6 23.8 26.6 23.2 26.5 23.1C26.3 22.8 25.8 22.6 25.5 22.5Z" fill="white" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-6 md:px-9">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-10">
          {/* Brand col */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
    src="/images/logo.png"   // put your uploaded logo inside public/logo.png
    alt="Logo"
    className="w-12 h-12 object-contain rounded-full border border-[#c0392b] group-hover:scale-105 transition-transform"
  />
              <div className="flex flex-col leading-tight">
                <span className="text-white font-extrabold text-sm">Canadian Pro</span>
                <span className="text-[#c0392b] text-[10px] font-semibold tracking-[2px] uppercase">Auto Workshop</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-7 mb-5">
              Karachi's trusted auto repair workshop — delivering Canadian-standard quality at Gulistan-e-Johar since over a decade.
            </p>
            <div className="flex gap-3">
              <a href={SITE.social.facebook} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-transform">
                <FacebookIcon />
              </a>
              <a href={SITE.social.instagram} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-transform">
                <InstagramIcon />
              </a>
              <a href={SITE.social.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:-translate-y-0.5 transition-transform">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[1.5px] mb-4">Quick Links</h4>
            {NAV.map((l) => (
              <Link key={l.href} href={l.href} className="block text-gray-500 text-sm mb-2 hover:text-[#c0392b] transition-colors">
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white text-xs font-bold uppercase tracking-[1.5px] mb-4">Contact</h4>
            <a href={`tel:${SITE.phone}`} className="block text-gray-500 text-sm mb-2 hover:text-[#c0392b]">{SITE.phone}</a>
            <p className="text-gray-500 text-sm leading-6 mb-3">{SITE.address}</p>
            <span className="inline-flex items-center gap-2 bg-red-950/30 border border-red-800/40 text-red-400 text-[11px] px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-400 inline-block" />
              Open Today 11AM–11PM
            </span>
          </div>
        </div>

        <div className="border-t border-white/5 pt-5 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-gray-600 text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p className="text-gray-600 text-xs">Sat–Thu: 11 AM – 11 PM &nbsp;|&nbsp; Friday: Closed</p>
        </div>
      </div>
    </footer>
  );
}
