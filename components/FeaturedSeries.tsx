const series = [
  {
    part: "Part 1",
    title: "The Man Who Knew",
    subtitle: "Housing Crisis",
    description:
      "Twenty years after his first impossible prediction, Dr. Michael Burry placed his final public bet — and walked away.",
    date: "Nov 22, 2025",
    href: "https://oksanameier.substack.com/p/part-1-michael-burry-files-the-man",
  },
  {
    part: "Part 2",
    title: "The GameStop Short Squeeze",
    subtitle: "",
    description:
      "How Dr. Michael Burry designed the GameStop squeeze 18 months before Reddit. Then walked away.",
    date: "Nov 23, 2025",
    href: "https://oksanameier.substack.com/p/part-2-michael-burry-files-the-gamestop",
  },
  {
    part: "Part 3",
    title: "The AI Bubble",
    subtitle: "",
    description:
      "Michael Burry bet against AI: $9.2M on Palantir, ~$10M on Nvidia. Here's the full breakdown.",
    date: "Nov 24, 2025",
    href: "https://oksanameier.substack.com/p/part-3-michael-burry-files-the-ai",
  },
  {
    part: "Part 4",
    title: "A Masterclass in Corporate Governance",
    subtitle: "",
    description:
      "The GameStop Letters — what we didn't know until November 27, 2025.",
    date: "Nov 28, 2025",
    href: "https://oksanameier.substack.com/p/michael-burry-files-the-gamestop",
  },
  {
    part: "Part 5",
    title: "Michael Burry Doesn't Do Interviews",
    subtitle: "The Full Interview",
    description:
      "The rarest thing in finance: Michael Burry on record. A full breakdown of what he said, and what it means.",
    date: "Dec 3, 2025",
    href: "https://oksanameier.substack.com/p/part-3-michael-burry-files-the-ai",
  },
];

export default function FeaturedSeries() {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-3">
              Featured Series
            </p>
            <h2
              className="text-white text-4xl font-semibold leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              The Michael Burry Files
            </h2>
            <p className="text-[#6B6B6B] mt-2 max-w-lg">
              Five-part deep dive into the most contrarian investor of our
              generation — and what his moves signal for the market right now.
            </p>
          </div>
          <a
            href="https://oksanameier.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-[#C9A052] hover:text-[#E8C97A] transition-colors flex items-center gap-1"
          >
            Read all on Substack
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {series.map((item, i) => (
            <a
              key={item.part}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group p-6 rounded-xl border border-[#2A2A2A] bg-[#1A1A1A] hover:border-[#C9A052]/50 hover:bg-[#1F1F1F] transition-all ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[#C9A052] text-xs font-medium tracking-wider uppercase">
                  {item.part}
                </span>
                <span className="text-[#3A3A3A] text-xs">{item.date}</span>
              </div>
              <h3
                className="text-white text-xl font-semibold leading-snug mb-2 group-hover:text-[#C9A052] transition-colors"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                {item.title}
                {item.subtitle && (
                  <span className="block text-[#C9A052]">{item.subtitle}</span>
                )}
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed">
                {item.description}
              </p>
              <div className="mt-4 flex items-center gap-1 text-[#C9A052] text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                Read on Substack
                <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
