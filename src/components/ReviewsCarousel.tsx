"use client";
import { useState } from "react";
import { REVIEWS } from "@/data/site";
import GoogleG from "./GoogleG";
import SectionLabel from "./SectionLabel";

type Review = {
  initials: string;
  name: string;
  vehicle: string;
  rating: number;
  text: string;
  color: string;
};

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`text-[15px] ${i <= count ? "text-amber-400" : "text-gray-300"}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 hover:border-[#c0392b] transition-colors flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
          style={{ background: r.color }}
        >
          {r.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm text-gray-900">{r.name}</div>
          <div className="text-xs text-gray-500">{r.vehicle}</div>
        </div>
        <GoogleG />
      </div>

      {/* Stars */}
      <Stars count={r.rating} />

      {/* Full text — no truncation at all */}
      <p className="text-[13px] text-gray-600 leading-[1.75] flex-1">
        {r.text}
      </p>
    </div>
  );
}

function AddReviewModal({
  onClose,
  onSubmit,
}: {
  onClose: () => void;
  onSubmit: (r: Review) => void;
}) {
  const [form, setForm] = useState({ name: "", vehicle: "", rating: 5, text: "" });
  const [submitted, setSubmitted] = useState(false);

  const COLORS = [
    "#c0392b","#1e4a8a","#1a5c2e","#5c1a5c",
    "#7a4e00","#1a4a5c","#2c4a1a","#4a1a2c",
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.text.trim()) return;
    const initials = form.name
      .trim()
      .split(" ")
      .map((w) => w[0].toUpperCase())
      .slice(0, 2)
      .join("");
    onSubmit({
      initials,
      name: form.name.trim(),
      vehicle: form.vehicle.trim() || "Verified Customer",
      rating: form.rating,
      text: form.text.trim(),
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    });
    setSubmitted(true);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8">
            <div className="text-5xl mb-4">🎉</div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Thank You!</h3>
            <p className="text-gray-500 text-sm mb-6">Your review has been added successfully.</p>
            <button
              onClick={onClose}
              className="bg-[#c0392b] text-white px-8 py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-extrabold text-gray-900 mb-1">Share Your Experience</h3>
            <p className="text-gray-400 text-sm mb-6">We&apos;d love to hear how we did!</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1 block">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1 block">Vehicle (optional)</label>
                <input
                  type="text"
                  placeholder="e.g. Honda Civic Owner"
                  value={form.vehicle}
                  onChange={(e) => setForm({ ...form, vehicle: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b]"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 block">Your Rating *</label>
                <div className="flex gap-2 items-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setForm({ ...form, rating: star })}
                      className={`text-2xl transition-transform hover:scale-110 ${
                        star <= form.rating ? "text-amber-400" : "text-gray-300"
                      }`}
                    >
                      ★
                    </button>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{form.rating}/5</span>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1 block">Your Review *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell others about your experience..."
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#c0392b] resize-none"
                />
                <div className="text-right text-xs text-gray-400 mt-1">{form.text.length} characters</div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#c0392b] text-white py-3 rounded-lg font-bold text-sm hover:bg-red-700 transition-colors"
              >
                Submit Review →
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

// ── Main Carousel ────────────────────────────────────────
export default function ReviewsCarousel() {
  const [allReviews, setAllReviews] = useState<Review[]>(REVIEWS);
  const [page, setPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // 2 reviews per page — shows 2 complete cards side by side
  const pages: Review[][] = [];
  for (let i = 0; i < allReviews.length; i += 2) {
    pages.push(allReviews.slice(i, i + 2));
  }
  const total = pages.length;

  const prev = () => setPage((p) => Math.max(p - 1, 0));
  const next = () => setPage((p) => Math.min(p + 1, total - 1));

  function handleAddReview(r: Review) {
    setAllReviews((prev) => [r, ...prev]);
    setPage(0);
  }

  return (
    <>
      <section className="bg-gray-100 py-20 px-6 md:px-9">
        {/* max-w-5xl gives enough room for 2 cards side by side with full text */}
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <SectionLabel>Testimonials</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">
                Honest Reviews from Our Customers
              </h2>
              <p className="text-gray-500 text-[15px]">
                Rated 4.7/5 on Google &nbsp;·&nbsp; {allReviews.length} reviews
              </p>
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="flex-shrink-0 flex items-center gap-2 bg-[#c0392b] text-white px-5 py-3 rounded-lg font-semibold text-sm hover:bg-red-700 transition-colors"
            >
              ✏️ Share Your Experience
            </button>
          </div>

          {/* Viewport */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${page * 100}%)` }}
            >
              {pages.map((group, gi) => (
                <div
                  key={gi}
                  // 2 columns side by side — each card gets ~half the width = full text visible
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-full flex-shrink-0 items-stretch"
                >
                  {group.map((r, i) => (
                    <ReviewCard key={`${gi}-${i}`} r={r} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          {total > 1 && (
            <>
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={prev}
                  disabled={page === 0}
                  aria-label="Previous"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center disabled:opacity-30 hover:enabled:border-[#c0392b] hover:enabled:bg-[#c0392b] group transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 3L5 8l5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
                  </svg>
                </button>

                <div className="flex gap-2">
                  {pages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === page ? "w-6 bg-[#c0392b]" : "w-2 bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  disabled={page === total - 1}
                  aria-label="Next"
                  className="w-10 h-10 rounded-full border-2 border-gray-300 bg-white flex items-center justify-center disabled:opacity-30 hover:enabled:border-[#c0392b] hover:enabled:bg-[#c0392b] group transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 3l5 5-5 5" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white" />
                  </svg>
                </button>
              </div>

              <p className="text-center text-xs text-gray-400 mt-3">
                Page {page + 1} of {total} &nbsp;·&nbsp; {allReviews.length} reviews total
              </p>
            </>
          )}
        </div>
      </section>

      {showModal && (
        <AddReviewModal
          onClose={() => setShowModal(false)}
          onSubmit={(r) => {
            handleAddReview(r);
            setShowModal(false);
          }}
        />
      )}
    </>
  );
}