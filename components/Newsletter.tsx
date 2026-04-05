export default function Newsletter() {
  return (
    <section id="newsletter" className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-4">
            The Newsletter
          </p>
          <h2
            className="text-white text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Investing intelligence from inside the AI industry
          </h2>
          <p className="text-[#A0A0A0] text-lg leading-relaxed mb-10">
            No noise. No recycled Bloomberg takes. Just structured analysis on
            AI companies, market signals, and the deals that matter — written
            by someone who sees how the technology actually works, not just how
            it&apos;s marketed.
          </p>

          {/* What you get */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-left">
            {[
              {
                icon: "🧠",
                title: "Insider perspective",
                desc: "Analysis from someone working inside enterprise AI — not reading press releases.",
              },
              {
                icon: "📊",
                title: "Market breakdowns",
                desc: "Deep dives into stocks, funds, and macro moves at the AI/finance intersection.",
              },
              {
                icon: "🎯",
                title: "No fluff",
                desc: "Structured thinking, clean data, honest takes. Never filler content.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-[#1A1A1A] border border-[#2A2A2A]"
              >
                <div className="text-2xl mb-2">{item.icon}</div>
                <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-[#6B6B6B] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <a
            href="https://oksanameier.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A052] text-[#111111] font-semibold rounded-full hover:bg-[#E8C97A] transition-all hover:scale-[1.02] text-sm"
          >
            Subscribe on Substack — free
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          <p className="mt-4 text-[#4A4A4A] text-xs">
            50+ subscribers · Free to start · No spam
          </p>
        </div>
      </div>
    </section>
  );
}
