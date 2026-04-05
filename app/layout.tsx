import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oksana Meier — AI Insider. Market Analyst. Independent Voice.",
  description:
    "Investment analysis at the intersection of AI and markets. By a product marketing manager working inside enterprise AI — with the unfair advantage most analysts don't have.",
  metadataBase: new URL("https://oksanainvest.com"),
  openGraph: {
    title: "Oksana Meier — AI Insider. Market Analyst. Independent Voice.",
    description:
      "Investment analysis at the intersection of AI and markets.",
    url: "https://oksanainvest.com",
    siteName: "Oksana Invest",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Oksana Meier — AI Insider. Market Analyst. Independent Voice.",
    description: "Investment analysis at the intersection of AI and markets.",
    creator: "@oksanameier",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://oksanainvest.com/#oksana",
      name: "Oksana Meier",
      url: "https://oksanainvest.com",
      jobTitle: "Product Marketing Manager & Investment Analyst",
      description:
        "Investment analysis at the intersection of AI and markets. Product Marketing Manager at John Snow Labs and Pacific.ai — writing about what enterprise AI means for your portfolio.",
      sameAs: [
        "https://www.linkedin.com/in/oksanameier/",
        "https://x.com/oksanameier",
        "https://www.youtube.com/@OksanaInvest",
        "https://medium.com/@oksana-meier",
        "https://oksanameier.substack.com",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "Investment Analysis",
        "Financial Markets",
        "Enterprise AI",
        "Machine Learning",
        "Market Research",
      ],
      alumniOf: [
        { "@type": "CollegeOrUniversity", name: "University of St. Gallen (HSG)" },
        { "@type": "CollegeOrUniversity", name: "UC Berkeley" },
      ],
      worksFor: [
        { "@type": "Organization", name: "John Snow Labs" },
        { "@type": "Organization", name: "Pacific.ai" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://oksanainvest.com/#website",
      url: "https://oksanainvest.com",
      name: "Oksana Invest",
      description:
        "Investment analysis at the intersection of AI and markets by Oksana Meier.",
      publisher: { "@id": "https://oksanainvest.com/#oksana" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,300&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Google Analytics — replace GA_MEASUREMENT_ID with your real G-XXXXXXXXXX */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','GA_MEASUREMENT_ID');`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F7F4] text-[#1C1C1E]">
        {children}
      </body>
    </html>
  );
}
