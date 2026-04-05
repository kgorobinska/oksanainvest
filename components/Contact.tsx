"use client";
import { useState } from "react";

export default function Contact({ formId }: { formId: string }) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot check — bots fill the hidden field, humans don't
    if (data.get("_gotcha")) {
      setStatus("idle");
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-4">
              Get in touch
            </p>
            <h2
              className="text-[#1C1C1E] text-4xl font-semibold leading-tight mb-6"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Let&apos;s work together
            </h2>
            <p className="text-[#3A3A3A] leading-relaxed mb-8">
              Open to consulting engagements in AI strategy, go-to-market, and
              market analysis. Based in Zurich — available globally.
            </p>
            <div className="space-y-3">
              {[
                { label: "AI Strategy & GTM", desc: "Product marketing and positioning for AI companies" },
                { label: "Investment Research", desc: "Deep-dive analysis on AI companies and market trends" },
                { label: "Advisory", desc: "Fractional CMO or strategic advisor for early-stage AI startups" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#C9A052] shrink-0" />
                  <div>
                    <p className="text-[#1C1C1E] font-medium text-sm">{item.label}</p>
                    <p className="text-[#6B6B6B] text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-[#E5E2DC] rounded-2xl p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3
                  className="text-[#1C1C1E] text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  Message sent
                </h3>
                <p className="text-[#6B6B6B] text-sm">
                  I&apos;ll get back to you within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Honeypot — hidden from humans, bots fill it */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

                <div>
                  <label className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#F9F7F4] text-[#1C1C1E] text-sm placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A052] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#F9F7F4] text-[#1C1C1E] text-sm placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A052] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                    Subject
                  </label>
                  <select
                    name="subject"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#F9F7F4] text-[#1C1C1E] text-sm focus:outline-none focus:border-[#C9A052] transition-colors"
                  >
                    <option value="">Select a topic...</option>
                    <option value="Consulting">Consulting enquiry</option>
                    <option value="Advisory">Advisory / fractional CMO</option>
                    <option value="Investment Research">Investment research</option>
                    <option value="Media / Speaking">Media or speaking</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1C1C1E] mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project or question..."
                    className="w-full px-4 py-3 rounded-lg border border-[#E5E2DC] bg-[#F9F7F4] text-[#1C1C1E] text-sm placeholder:text-[#A0A0A0] focus:outline-none focus:border-[#C9A052] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3.5 bg-[#1C1C1E] text-white text-sm font-semibold rounded-full hover:bg-[#C9A052] hover:text-[#111111] transition-all disabled:opacity-60"
                >
                  {status === "sending" ? "Sending..." : "Send message"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-xs text-center">
                    Something went wrong. Please email me directly at{" "}
                    <a href="mailto:oksana@oksanainvest.com" className="underline">
                      oksana@oksanainvest.com
                    </a>
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
