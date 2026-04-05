"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#111111]/95 backdrop-blur-md border-b border-[#2A2A2A]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-white text-lg font-semibold tracking-tight hover:text-[#C9A052] transition-colors"
          style={{ fontFamily: "'Fraunces', serif" }}
        >
          Oksana Meier
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: "About", href: "#about" },
            { label: "Articles", href: "#articles" },
            { label: "Newsletter", href: "#newsletter" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-[#A0A0A0] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://oksanameier.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-[#C9A052] text-[#111111] font-semibold rounded-full hover:bg-[#E8C97A] transition-colors"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-5 h-0.5 bg-current transition-all" />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-[#2A2A2A] px-6 py-4 flex flex-col gap-4">
          {[
            { label: "About", href: "#about" },
            { label: "Articles", href: "#articles" },
            { label: "Newsletter", href: "#newsletter" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#A0A0A0] hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://oksanameier.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-4 py-2 bg-[#C9A052] text-[#111111] font-semibold rounded-full text-center hover:bg-[#E8C97A] transition-colors"
          >
            Subscribe
          </a>
        </div>
      )}
    </header>
  );
}
