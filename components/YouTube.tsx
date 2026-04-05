const videos = [
  {
    id: "WebZpqM99lA",
    title: "Top Pick",
  },
  {
    id: "RqcKsR_mq14",
    title: "Top Pick",
  },
  {
    id: "wqaGhZRmA5M",
    title: "Top Pick",
  },
  {
    id: "Bz8Uk39dEKY",
    title: "Top Pick",
  },
];

export default function YouTube() {
  return (
    <section className="py-24 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-3">
              On YouTube
            </p>
            <h2
              className="text-[#1C1C1E] text-4xl font-semibold leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Watch the analysis
            </h2>
            <p className="text-[#6B6B6B] mt-2 max-w-lg">
              Video breakdowns of the market moves, AI companies, and investment
              stories worth your time.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@OksanaInvest"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 text-sm text-[#C9A052] hover:text-[#A07830] transition-colors"
          >
            All videos on YouTube
            <svg
              width="14"
              height="14"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="group rounded-xl overflow-hidden border border-[#E5E2DC] bg-white hover:border-[#C9A052]/40 hover:shadow-md transition-all"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}?rel=0&modestbranding=1`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
