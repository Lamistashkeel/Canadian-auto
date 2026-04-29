import type { Metadata } from "next";
import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `About Us | ${SITE.name}`,
  description: "Learn about Canadian Pro Auto Workshop — 10+ years of trusted auto repair in Gulistan-e-Johar, Karachi.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0a0a0a] border-b-2 border-[#c0392b] py-16 px-6 md:px-9 text-center">
        <SectionLabel center>About Us</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">{SITE.name}</h1>
        <p className="text-gray-400 text-base max-w-xl mx-auto">Karachi&apos;s trusted name in professional auto repair and vehicle maintenance since over a decade.</p>
      </section>

      {/* Story + Stats */}
      <section className="py-20 px-6 md:px-9 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <SectionLabel>Our Story</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">Built on Trust, Driven by Expertise</h2>
            <p className="text-gray-500 leading-7 mb-4">
              Canadian Pro Auto Workshop was established with a simple mission: bring Canadian-standard auto repair quality to Karachi. Located at Gulistan-e-Johar, we&apos;ve grown from a small garage into a full-service workshop trusted by thousands of vehicle owners across the city.
            </p>
            <p className="text-gray-500 leading-7">
              Our team of certified mechanics combines years of hands-on experience with modern diagnostic technology to deliver repairs that last — and service you can trust.
            </p>
          </div>
          <div className="bg-gray-50 rounded-xl p-8 border-l-4 border-[#c0392b]">
            <div className="grid grid-cols-2 gap-6">
              {[
                { val: "10+", label: "Years Experience" },
                { val: "4.7★", label: "Google Rating" },
                { val: "25+", label: "Services Offered" },
                { val: "6", label: "Days a Week" },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <strong className="block text-4xl font-extrabold text-[#c0392b]">{s.val}</strong>
                  <span className="text-xs text-gray-500 uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="bg-[#0a0a0a] rounded-xl p-10">
          <h3 className="text-xl font-bold text-white mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "⭐", title: "Honesty", desc: "Clear quotes, no hidden fees, no unnecessary repairs." },
              { icon: "✅", title: "Quality", desc: "Genuine parts, skilled hands, lasting results every time." },
              { icon: "⚡", title: "Speed", desc: "Fast turnaround — most jobs completed same day." },
            ].map((v) => (
              <div key={v.title} className="text-center p-5">
                <div className="w-12 h-12 bg-[#c0392b] rounded-full mx-auto mb-3 flex items-center justify-center text-xl">{v.icon}</div>
                <h4 className="text-white font-bold text-sm mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-6">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <Link href="/contact" className="bg-[#c0392b] text-white px-8 py-3 rounded font-bold text-sm hover:bg-red-700 transition-colors inline-block">
            Contact Us Today →
          </Link>
        </div>
      </section>
    </>
  );
}
