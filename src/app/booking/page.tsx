import type { Metadata } from "next";
import SectionLabel from "@/components/SectionLabel";
import { SITE, SERVICES } from "@/data/site";

export const metadata: Metadata = {
  title: `Book Appointment | ${SITE.name}`,
  description: "Book a car repair appointment at Canadian Pro Auto Workshop in Gulistan-e-Johar, Karachi.",
};

export default function BookingPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] border-b-2 border-[#c0392b] py-16 px-6 md:px-9 text-center">
        <SectionLabel center>Easy Scheduling</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">Book an Appointment</h1>
        <p className="text-gray-400 text-base max-w-md mx-auto">
          Fill out the form and we&apos;ll confirm your slot within the hour.
        </p>
      </section>

      <section className="py-20 px-6 md:px-9">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
          <form className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-3">
              <input type="text" placeholder="First Name" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]" />
              <input type="text" placeholder="Last Name" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]" />
            </div>
            <input type="tel" placeholder="Phone / WhatsApp Number" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]" />
            <input type="text" placeholder="Vehicle Make, Model & Year" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]" />
            <select required defaultValue="" className="px-4 py-3 border border-gray-200 rounded-lg text-sm text-gray-500 focus:outline-none focus:border-[#c0392b]">
              <option value="" disabled>Select Service</option>
              {SERVICES.map((s) => (
                <option key={s.title} value={s.title}>{s.title}</option>
              ))}
              <option value="Other">Other / General Maintenance</option>
            </select>
            <input type="date" required className="px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]" />
            <textarea placeholder="Additional notes or describe the issue..." rows={3} className="px-4 py-3 border border-gray-200 rounded-lg text-sm resize-none focus:outline-none focus:border-[#c0392b]" />
            <button type="submit" className="w-full bg-[#c0392b] text-white py-4 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors">
              Confirm Appointment →
            </button>
            <p className="text-center text-xs text-gray-400">
              Or call/WhatsApp directly:{" "}
              <a href={`tel:${SITE.phone}`} className="text-[#c0392b] font-bold">{SITE.phone}</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
