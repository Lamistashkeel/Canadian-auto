import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { SITE, SERVICES } from "@/data/site";

export const metadata: Metadata = {
  title: `Services | ${SITE.name}`,
  description: "Complete auto repair services in Karachi — engine, brakes, A/C, electrical, oil change, detailing and more.",
};

function ServiceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9" stroke="#c0392b" strokeWidth="1.5" />
      <path d="M9 13h8M13 9v8" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] border-b-2 border-[#c0392b] py-16 px-6 md:px-9 text-center">
        <SectionLabel center>What We Offer</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">Our Services</h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">Complete auto repair and maintenance — all under one roof in Gulistan-e-Johar.</p>
      </section>

      <section className="py-20 px-6 md:px-9">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="border border-gray-200 rounded-xl p-7 hover:border-[#c0392b] hover:-translate-y-0.5 transition-all">
              <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                <ServiceIcon />
              </div>
              <h3 className="font-bold text-[15px] text-gray-900 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-6">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/booking" className="bg-[#c0392b] text-white px-8 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors inline-block">
            Book a Service →
          </Link>
        </div>
      </section>
    </>
  );
}
