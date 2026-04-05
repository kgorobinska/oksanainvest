const links = [
  { label: "Substack", href: "https://oksanameier.substack.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/oksanameier/" },
  { label: "YouTube", href: "https://www.youtube.com/@OksanaInvest" },
  { label: "X / Twitter", href: "https://x.com/oksanameier" },
  { label: "Medium", href: "https://medium.com/@oksana-meier" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#1E1E1E] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p
              className="text-white text-xl font-semibold mb-1"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Oksana Meier
            </p>
            <p className="text-[#6B6B6B] text-sm">
              AI Insider · Market Analyst · Independent Voice
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6B6B6B] text-sm hover:text-[#C9A052] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1E1E1E] flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
          <p className="text-[#3A3A3A] text-xs">
            © {new Date().getFullYear()} Oksana Meier · oksanainvest.com
          </p>
          <p className="text-[#3A3A3A] text-xs">
            Not financial advice. Independent analysis only.
          </p>
        </div>
      </div>
    </footer>
  );
}
