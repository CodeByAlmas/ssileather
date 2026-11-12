"use client";

import { useState } from "react";

export default function InquiryForm() {
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Safe mock / API hook
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
    }, 800);
  };

  return (
    <section id="contact-section" className="bg-white text-black py-24 md:py-36">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <div className="lg:col-span-5">
          <span className="font-mono text-xs uppercase tracking-widest text-red-600 font-bold block mb-3">
            COMMERCIAL DESK // KANPUR & GLOBAL
          </span>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-none mb-6">
            GET IN <span className="text-red-600">TOUCH</span>
          </h2>
          <p className="text-neutral-700 text-lg leading-relaxed max-w-md font-sans">
            Looking for OEM sampling, MOQ details, or CIF container freight rates? Our export team reviews technical specs
            within 24 hours.
          </p>
        </div>

        <div className="lg:col-span-7">
          {sent ? (
            <div className="p-10 border border-neutral-300 rounded bg-neutral-50">
              <h3 className="font-bold text-2xl uppercase tracking-tight text-neutral-900">Inquiry Received</h3>
              <p className="mt-2 text-neutral-600 text-sm">
                Our export development team at SS International Kanpur will review your technical specifications.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600 mb-2">
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    className="w-full border-b border-neutral-400 py-3 text-neutral-900 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border-b border-neutral-400 py-3 text-neutral-900 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600 mb-2">
                  Business Email *
                </label>
                <input
                  required
                  type="email"
                  className="w-full border-b border-neutral-400 py-3 text-neutral-900 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                />
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600 mb-2">
                  Order Scope / Target Product *
                </label>
                <select
                  required
                  className="w-full border-b border-neutral-400 py-3 text-neutral-900 focus:outline-none focus:border-red-600 transition-colors bg-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="bulk-belts">Bulk Belt Manufacturing (1,000+ units)</option>
                  <option value="private-label">Private Label & Custom Buckle Development</option>
                  <option value="polo-belts">Artisan Argentine Polo Series</option>
                  <option value="dog-accessories">Pet Collars & Leashes</option>
                  <option value="sample-request">Refundable Sample Evaluation</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs uppercase tracking-wider text-neutral-600 mb-2">
                  Technical Specifications / Target MOQ
                </label>
                <textarea
                  rows={3}
                  className="w-full border-b border-neutral-400 py-3 text-neutral-900 focus:outline-none focus:border-red-600 transition-colors bg-transparent resize-none"
                  placeholder="Specify leather type (Full-grain, veg-tan), target delivery port (FOB/CIF), and hardware finish..."
                />
              </div>

              <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs text-neutral-500 font-sans max-w-sm">
                  Submissions comply with export confidentiality and NDA protocols.
                </p>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-red-600 hover:bg-red-700 text-white font-mono text-xs uppercase tracking-widest px-10 py-4 font-bold transition-all disabled:opacity-50"
                >
                  {submitting ? "Sending..." : "Submit Inquiry"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}