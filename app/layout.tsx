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
      </head>
      <body className="min-h-full flex flex-col bg-[#F9F7F4] text-[#1C1C1E]">
        {children}
      </body>
    </html>
  );
}
