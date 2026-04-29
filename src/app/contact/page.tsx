import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact Us | ${SITE.name}`,
  description: "Contact Canadian Pro Auto Workshop in Gulistan-e-Johar, Karachi. Call, WhatsApp or visit us.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] border-b-2 border-[#c0392b] py-16 px-6 md:px-9 text-center">
        <SectionLabel center>Get in Touch</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">Contact Us</h1>
        <p className="text-gray-400 text-base max-w-lg mx-auto">
          We&apos;re open 6 days a week, 11 AM – 11 PM. Drop by or call us anytime.
        </p>
      </section>

      <section className="py-20 px-6 md:px-9">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-14">
          {/* Info */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="flex flex-col gap-5">
              {[
                { bg: "#c0392b", icon: "📞", label: "Phone / WhatsApp", val: SITE.phone, href: `tel:${SITE.phone}` },
                { bg: "#1e4a8a", icon: "📍", label: "Address", val: SITE.address, href: "#" },
                { bg: "#1a5c2e", icon: "🕐", label: "Business Hours", val: "Sat–Thu: 11:00 AM – 11:00 PM\nFriday: Closed", href: "#" },
              ].map((c) => (
                <div key={c.label} className="flex gap-3 items-start">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-base" style={{ background: c.bg }}>
                    {c.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-gray-900">{c.label}</div>
                    <a href={c.href} className="text-sm text-gray-500 leading-6 whitespace-pre-line hover:text-[#c0392b] transition-colors">{c.val}</a>
                  </div>
                </div>
              ))}
            </div>

            {/* Google Map embed placeholder */}
            {/* Google Map */}
<div className="mt-8 rounded-xl overflow-hidden border border-gray-200 w-full h-72">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d463643.927815442!2d67.02607160000001!3d24.78798130000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339004a7bc50b%3A0x8764fae71afe09e8!2sCanadian%20Pro%20Auto%20Workshop!5e0!3m2!1sen!2s!4v1777312277308!5m2!1sen!2s"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
          </div>

          {/* Form */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
            <form className="flex flex-col gap-4">
              <input type="text" placeholder="Your Name" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] transition-colors" />
              <input type="tel" placeholder="Phone Number" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] transition-colors" />
              <input type="text" placeholder="Vehicle Make & Model" className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] transition-colors" />
              <textarea placeholder="Describe your issue..." rows={4} className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] transition-colors resize-none" />
              <button type="submit" className="w-full bg-[#c0392b] text-white py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
