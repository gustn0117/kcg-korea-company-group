"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { navLinks } from "@/lib/content";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-navy-900/85 shadow-lg backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="text-xl font-black tracking-tight text-white">
              KCG
            </span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span className="hidden text-xs font-medium text-white/55 transition group-hover:text-white/85 sm:block">
              코리아컴퍼니그룹
            </span>
          </a>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition ${
                  active === l.id
                    ? "text-brand"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-sm font-bold text-navy-950 shadow-[0_0_24px_-6px_rgba(31,211,232,0.7)] transition hover:bg-brand-soft sm:inline-flex"
            >
              제안 문의
              <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-white transition hover:bg-white/10 lg:hidden"
              aria-label="메뉴 열기"
              aria-expanded={open}
            >
              <Icon name={open ? "x" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden border-white/10 bg-navy-900/95 backdrop-blur-md transition-[max-height] duration-300 lg:hidden ${
          open ? "max-h-[26rem] border-b" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-2">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className={`border-b border-white/5 py-3 text-[15px] font-medium last:border-0 ${
                active === l.id ? "text-brand" : "text-white/80"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 mb-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-brand px-4 py-2.5 text-sm font-bold text-navy-950"
          >
            제안 문의
            <Icon name="arrow-right" className="h-4 w-4" />
          </a>
        </nav>
      </div>
    </header>
  );
}
