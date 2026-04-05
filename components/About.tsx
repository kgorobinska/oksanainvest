const credentials = [
  { label: "Current Role", value: "PMM at John Snow Labs & Pacific.ai" },
  { label: "Education", value: "IEMBA, University of St. Gallen (HSG)" },
  { label: "Exec Education", value: "UC Berkeley · UC Irvine · Tsinghua · SMU Singapore" },
  { label: "Track Record", value: "$500K+ consultancy revenue from zero" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oksanameier/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Substack",
    href: "https://oksanameier.substack.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@OksanaInvest",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/oksanameier",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Medium",
    href: "https://medium.com/@oksana-meier",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: bio */}
          <div>
            <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-4">
              About
            </p>
            <h2
              className="text-[#1C1C1E] text-4xl font-semibold leading-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The unfair advantage most analysts don&apos;t have
            </h2>

            <div className="space-y-4 text-[#3A3A3A] leading-relaxed">
              <p>
                I work inside AI. I write about what it means for your money.
              </p>
              <p>
                By day, I&apos;m a product marketing manager at{" "}
                <a href="https://www.johnsnowlabs.com" target="_blank" rel="noopener noreferrer" className="text-[#C9A052] hover:underline">
                  John Snow Labs
                </a>{" "}
                and{" "}
                <a href="https://pacific.ai" target="_blank" rel="noopener noreferrer" className="text-[#C9A052] hover:underline">
                  Pacific.ai
                </a>{" "}
                — in the room where enterprise AI gets built and deployed.
                That&apos;s an unfair advantage most market analysts don&apos;t have.
              </p>
              <p>
                Ten years building from nothing: 6-figure SMMA revenue, a
                wealth management client taken from startup to seven-figure
                revenue, dozens of AI tools launched in the pre-GPT era, and a
                compliance platform brought to market while the product was
                still being built. My corporate POC-to-production rate is 75%
                — against a 30–40% industry average. None of it came from a
                playbook.
              </p>
              <p>
                The analysis works the same way. No recycled takes. Structured
                thinking on markets, AI, and what the numbers actually mean.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#E5E2DC] rounded-full text-sm text-[#1C1C1E] hover:border-[#C9A052] hover:text-[#C9A052] transition-all"
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: credentials */}
          <div className="space-y-4">
            {credentials.map((c) => (
              <div
                key={c.label}
                className="p-5 bg-white border border-[#E5E2DC] rounded-xl"
              >
                <p className="text-[#6B6B6B] text-xs uppercase tracking-wider mb-1">
                  {c.label}
                </p>
                <p className="text-[#1C1C1E] font-medium">{c.value}</p>
              </div>
            ))}

            {/* POC stat callout */}
            <div className="p-5 bg-[#111111] rounded-xl">
              <p
                className="text-[#C9A052] text-4xl font-semibold mb-1"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                75%
              </p>
              <p className="text-[#A0A0A0] text-sm">
                POC-to-production rate — vs. 30–40% industry average
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
