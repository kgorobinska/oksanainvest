// Articles pulled from Substack RSS feed at build/request time
// Feed: https://oksanameier.substack.com/feed

interface Article {
  title: string;
  description: string;
  pubDate: string;
  link: string;
  readTime?: string;
}

async function getArticles(): Promise<Article[]> {
  try {
    const res = await fetch(
      "https://oksanameier.substack.com/feed",
      { next: { revalidate: 3600 } } // refresh every hour
    );
    const xml = await res.text();

    // Parse RSS items
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || [];

    return items.slice(0, 6).map((item) => {
      const title =
        item.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/)?.[1] ||
        item.match(/<title>(.*?)<\/title>/)?.[1] ||
        "Untitled";

      const description =
        item.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>/)?.[1]
          ?.replace(/<[^>]+>/g, "")
          .slice(0, 160) ||
        item.match(/<description>(.*?)<\/description>/)?.[1]
          ?.replace(/<[^>]+>/g, "")
          .slice(0, 160) ||
        "";

      const pubDateRaw =
        item.match(/<pubDate>(.*?)<\/pubDate>/)?.[1] || "";
      const pubDate = pubDateRaw
        ? new Date(pubDateRaw).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })
        : "";

      const link =
        item.match(/<link>(.*?)<\/link>/)?.[1] ||
        item.match(/<guid[^>]*>(.*?)<\/guid>/)?.[1] ||
        "https://oksanameier.substack.com";

      return { title, description, pubDate, link };
    });
  } catch {
    return [];
  }
}

export default async function Articles() {
  const articles = await getArticles();

  return (
    <section id="articles" className="py-24 bg-[#F9F7F4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <p className="text-[#C9A052] text-sm font-medium tracking-[0.15em] uppercase mb-3">
              Latest Analysis
            </p>
            <h2
              className="text-[#1C1C1E] text-4xl font-semibold leading-tight"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              What I&apos;m writing about
            </h2>
          </div>
          <a
            href="https://oksanameier.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm text-[#C9A052] hover:text-[#A07830] transition-colors flex items-center gap-1"
          >
            All articles on Substack
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <a
                key={article.link}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white border border-[#E5E2DC] rounded-xl hover:border-[#C9A052]/40 hover:shadow-md transition-all"
              >
                {article.pubDate && (
                  <p className="text-[#A0A0A0] text-xs mb-3">{article.pubDate}</p>
                )}
                <h3
                  className="text-[#1C1C1E] text-lg font-semibold leading-snug mb-2 group-hover:text-[#C9A052] transition-colors"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-[#6B6B6B] text-sm leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                )}
                <div className="mt-4 flex items-center gap-1 text-[#C9A052] text-xs font-medium">
                  Read on Substack
                  <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-[#6B6B6B] mb-4">Articles loading...</p>
            <a
              href="https://oksanameier.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C9A052] hover:underline text-sm"
            >
              Read directly on Substack →
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
