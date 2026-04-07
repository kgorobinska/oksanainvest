import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#111111] flex flex-col justify-center overflow-hidden">
      {/* Subtle background texture / grain */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />

      {/* Gold top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#C9A052] via-[#E8C97A] to-transparent" />

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left: text */}
          <div>
            {/* Eyebrow */}
            <p className="animate-fade-up text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-6">
              AI Insider · Market Analyst · Independent Voice
            </p>

            {/* Main headline */}
            <h1
              className="animate-fade-up-delay-1 text-white leading-[1.05] mb-8"
              style={{
                fontFamily: "'Fraunces', serif",
                fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                fontWeight: 600,
              }}
            >
              I work inside AI.
              <br />
              <span className="text-[#C9A052]">I write about</span>
              <br />
              what it means
              <br />
              for your money.
            </h1>

            {/* Sub-copy */}
            <p className="animate-fade-up-delay-2 text-[#A0A0A0] text-lg leading-relaxed mb-10 max-w-xl">
              Investment analysis from someone in the room where enterprise AI
              gets built — not just marketed. No recycled takes. Structured
              thinking on markets, AI, and what the numbers actually mean.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up-delay-3 flex flex-wrap gap-4">
              <a
                href="https://oksanameier.substack.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#C9A052] text-[#111111] font-semibold text-sm rounded-full hover:bg-[#E8C97A] transition-all hover:scale-[1.02]"
              >
                Subscribe — it&apos;s free
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#articles"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-[#3A3A3A] text-[#D0D0D0] text-sm rounded-full hover:border-[#C9A052] hover:text-[#C9A052] transition-all"
              >
                Read the analysis
              </a>
            </div>

            {/* Social proof bar */}
            <div className="animate-fade-up-delay-3 mt-14 pt-8 border-t border-[#2A2A2A] flex flex-wrap gap-8">
              {[
                { label: "Substack subscribers", value: "50+" },
                { label: "Years in B2B consulting", value: "10" },
                { label: "Continents worked across", value: "6" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p
                    className="text-white text-2xl font-semibold mb-0.5"
                    style={{ fontFamily: "'Fraunces', serif" }}
                  >
                    {stat.value}
                  </p>
                  <p className="text-[#6B6B6B] text-xs tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: headshot */}
          <div className="animate-fade-up-delay-2 hidden lg:flex justify-center items-center">
            <div className="relative">
              {/* Gold ring accent */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#C9A052] via-[#E8C97A] to-transparent opacity-60 blur-sm" />
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-[#C9A052]/30">
                <Image
                  src="/headshot.jpg"
                  alt="Oksana Meier — AI Insider & Market Analyst"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom fade into cream — use rgba(17,17,17,0) not 'transparent' to avoid grey banding */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #F9F7F4 0%, rgba(17,17,17,0) 100%)",
        }}
      />
    </section>
  );
}
