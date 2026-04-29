import Link from "next/link";
import SectionLabel from "@/components/SectionLabel";
import ReviewsCarousel from "@/components/ReviewsCarousel";
import { SITE, SERVICES } from "@/data/site";

/* ── tiny icon helper ──────────────────────────────── */
function ServiceIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="9" stroke="#c0392b" strokeWidth="1.5" />
      <path
        d="M9 13h8M13 9v8"
        stroke="#c0392b"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section
        className="relative min-h-[580px] flex items-center overflow-hidden bg-[#0a0a0a]"
        style={{
          backgroundImage: "url('/images/hero-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "right center",
        }}
      >
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* bg pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c0392b' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative z-10 px-6 md:px-9 py-24 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red-900/20 border border-red-700/40 text-red-400 text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-1.5 rounded-full mb-5">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            Karachi&apos;s Trusted Auto Workshop
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
            Your Car Deserves{" "}
            <span className="text-[#c0392b]">Expert Care</span>
          </h1>

          <p className="text-gray-300 text-base leading-7 mb-8 max-w-lg">
            Professional auto repair, diagnostics, and maintenance — delivered
            with Canadian-standard precision at Gulistan-e-Johar.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/booking"
              className="bg-[#c0392b] text-white px-7 py-3 rounded font-semibold text-sm flex items-center gap-2 hover:bg-red-700 transition-colors"
            >
              📞 Book Appointment
            </Link>

            <Link
              href="/services"
              className="border border-white/30 text-white px-7 py-3 rounded font-semibold text-sm hover:bg-white/10 transition-colors"
            >
              Explore Services →
            </Link>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
            {[
              { val: SITE.yearsExperience, label: "Years Experience" },
              { val: `${SITE.googleRating}★`, label: "Google Rating" },
              { val: SITE.carServiced, label: "Cars Serviced" },
            ].map((s) => (
              <div key={s.label}>
                <strong className="block text-2xl font-extrabold text-white">
                  {s.val}
                </strong>
                <span className="text-[11px] text-gray-400 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES STRIP ───────────────────────────────── */}
      <section className="bg-gray-50 py-14 px-6 md:px-9">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              icon: "⭐",
              title: "Certified Technicians",
              desc: "Years of hands-on expertise for all vehicle makes and models.",
            },
            {
              icon: "💰",
              title: "Transparent Pricing",
              desc: "Clear estimates before any work begins — no hidden costs.",
            },
            {
              icon: "⚡",
              title: "Fast Turnaround",
              desc: "Most repairs completed same-day so you're back on the road fast.",
            },
            {
              icon: "✅",
              title: "Warranty on Work",
              desc: "All repairs come with our full satisfaction guarantee.",
            },
          ].map((f) => (
            <div key={f.title} className="text-center px-2">
              <div className="w-12 h-12 bg-[#0a0a0a] rounded-full flex items-center justify-center mx-auto mb-4 text-xl">
                {f.icon}
              </div>
              <h3 className="text-[13px] font-bold uppercase tracking-wide text-gray-900 mb-2">
                {f.title}
              </h3>
              <p className="text-[13px] text-gray-500 leading-6">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT SPLIT ──────────────────────────────────── */}
      <section className="grid md:grid-cols-2 min-h-[420px]">
        <div className="relative min-h-[280px] md:min-h-full">
          <img
            src="/images/gallery/shop-img3.webp"
            alt="Workshop"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* optional dark overlay for consistency */}
          <div className="absolute inset-0 bg-black/40" />
        </div>



        <div className="flex flex-col justify-center px-10 md:px-16 py-16 bg-white">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-snug mb-4">
            Focused on Reliable Repairs &amp; Honest Service
          </h2>
          <p className="text-gray-500 text-[15px] leading-7 mb-4">
            With over 10 years of experience, Canadian Pro Auto Workshop brings
            a deep commitment to quality workmanship and transparent
            communication.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center gap-1 text-[#c0392b] text-sm font-semibold border-b border-[#c0392b] pb-0.5 w-max hover:opacity-80 transition-opacity"
          >
            Learn More →
          </Link>
        </div>
      </section>

      {/* ── SERVICES PREVIEW ─────────────────────────────── */}
      <section className="py-20 px-6 md:px-9 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel center>Our Services</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              What We Do Best
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {SERVICES.slice(0, 6).map((s) => (
              <div
                key={s.title}
                className="border border-gray-200 rounded-lg p-7 hover:border-[#c0392b] transition-all"
              >
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <ServiceIcon />
                </div>
                <h3 className="font-bold text-[15px] text-gray-900 mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
    </>
  );
}