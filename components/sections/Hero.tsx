import { Icon } from "../Icon";
import { company } from "@/lib/content";

const heroStats = [
  { v: "9+", l: "YEARS", k: "업력" },
  { v: "50+", l: "PARTNERS", k: "누적 파트너사" },
  { v: "5y", l: "AWARDS", k: "국회 표창 연속" },
];

const kpis = [
  { v: "+250%", l: "ROAS" },
  { v: "1.8M", l: "REACH" },
  { v: "4.6x", l: "ENGAGE" },
];

function PerformanceConsole() {
  return (
    <div className="hair sheen-top relative overflow-hidden rounded-lg border border-white/10 bg-navy-850/70 p-6 shadow-[0_30px_70px_-30px_rgba(5,14,30,0.8)] backdrop-blur-sm">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-white/45">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-soft" />
          PERFORMANCE · LIVE
        </div>
        <span className="font-mono text-[11px] text-white/30">Q2 2026</span>
      </div>

      {/* headline metric */}
      <div className="mt-5 flex items-end justify-between">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-white/40">
            AVG. ROAS
          </div>
          <div className="mt-1 text-5xl font-black tracking-tight text-white">
            250<span className="text-brand-soft">%</span>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-md border border-brand/25 bg-brand/10 px-2.5 py-1 font-mono text-xs font-semibold text-brand-soft">
          <Icon name="trending-up" className="h-3.5 w-3.5" />
          +38.2%
        </div>
      </div>

      {/* area chart */}
      <div className="mt-5">
        <svg
          viewBox="0 0 320 112"
          className="h-28 w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5483c8" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#5483c8" stopOpacity="0" />
            </linearGradient>
          </defs>
          {/* gridlines */}
          {[0, 28, 56, 84].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y + 6}
              x2="320"
              y2={y + 6}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="1"
            />
          ))}
          <path
            d="M0,86 L40,78 L80,82 L120,64 L160,58 L200,44 L240,40 L280,24 L320,16 L320,112 L0,112 Z"
            fill="url(#heroFill)"
          />
          <path
            d="M0,86 L40,78 L80,82 L120,64 L160,58 L200,44 L240,40 L280,24 L320,16"
            fill="none"
            stroke="#a6c3ec"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="320" cy="16" r="3.5" fill="#a6c3ec" />
          <circle cx="320" cy="16" r="6" fill="none" stroke="#a6c3ec" strokeOpacity="0.4" strokeWidth="1.5" />
        </svg>
      </div>

      {/* kpi row */}
      <div className="mt-5 grid grid-cols-3 divide-x divide-white/10 border-t border-white/10 pt-4">
        {kpis.map((k) => (
          <div key={k.l} className="px-2 text-center first:pl-0 last:pr-0">
            <div className="text-lg font-extrabold text-white">{k.v}</div>
            <div className="font-mono text-[10px] tracking-[0.14em] text-white/40">
              {k.l}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950 via-navy-900 to-navy-850" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000,transparent)]" />
      <div className="animate-drift pointer-events-none absolute -right-32 -top-10 -z-10 h-[34rem] w-[34rem] rounded-full bg-brand/12 blur-[150px]" />
      <div className="animate-drift pointer-events-none absolute -left-40 top-1/3 -z-10 h-[28rem] w-[28rem] rounded-full bg-brand-2/12 blur-[140px]" />
      {/* ghost wordmark */}
      <div
        aria-hidden
        className="text-outline pointer-events-none absolute -right-6 top-24 -z-10 hidden text-[13rem] font-black leading-none tracking-tighter lg:block"
      >
        KCG
      </div>
      <div className="absolute left-0 top-20 h-12 w-1 bg-brand" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2.5 rounded-md border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-[0.16em] text-brand-soft backdrop-blur-sm">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            {company.role} · SINCE {company.since}
          </div>

          <h1 className="mt-7 text-[4.5rem] font-black leading-[0.92] tracking-tight text-white sm:text-[5.5rem]">
            KCG
          </h1>
          <p className="mt-1 text-2xl font-bold text-white/85 sm:text-[1.7rem]">
            {company.nameFull}
          </p>
          <div className="mt-6 h-[3px] w-16 bg-brand" />

          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/60 sm:text-xl">
            {company.tagline}{" "}
            <span className="font-bold text-white">
              {company.taglineStrong}
            </span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="btn-sheen inline-flex items-center gap-2 rounded-md bg-brand px-6 py-3 text-sm font-bold text-navy-950 shadow-[0_14px_44px_-12px_rgba(84,131,200,0.85)] transition hover:bg-brand-soft"
            >
              제안 문의하기 <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="group inline-flex items-center gap-2 rounded-md border border-white/15 px-6 py-3 text-sm font-bold text-white transition hover:border-white/35 hover:bg-white/[0.04]"
            >
              서비스 살펴보기
              <Icon
                name="arrow-down-right"
                className="h-4 w-4 text-white/50 transition group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-white"
              />
            </a>
          </div>

          <div className="mt-11 grid max-w-lg grid-cols-3 border-t border-white/10 pt-6">
            {heroStats.map((s, i) => (
              <div
                key={s.l}
                className={i > 0 ? "border-l border-white/10 pl-5" : "pr-5"}
              >
                <div className="text-[1.7rem] font-black tracking-tight text-white">
                  {s.v}
                </div>
                <div className="font-mono text-[10px] tracking-[0.16em] text-brand-soft/80">
                  {s.l}
                </div>
                <div className="mt-0.5 text-xs text-white/45">{s.k}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right - performance console */}
        <div className="relative">
          <div className="pointer-events-none absolute -inset-4 -z-10 bg-brand/5 blur-2xl" />
          <PerformanceConsole />
          <div className="animate-floaty-slow absolute -left-5 -top-5 hidden items-center gap-2 rounded-md border border-white/10 bg-navy-800/90 px-3 py-2 shadow-xl backdrop-blur sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand/12 text-brand-soft">
              <Icon name="circle-check" className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-white">
              Campaign Optimized
            </span>
          </div>
          <div className="animate-floaty absolute -bottom-5 -right-4 hidden items-center gap-2 rounded-md border border-white/10 bg-navy-800/90 px-3 py-2 shadow-xl backdrop-blur sm:flex">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-brand/12 text-brand-soft">
              <Icon name="users" className="h-4 w-4" />
            </span>
            <span className="text-xs font-semibold text-white">
              Audience Targeting
            </span>
          </div>
        </div>
      </div>

      {/* capability marquee strip */}
      <div className="marquee-mask relative mt-16 flex overflow-hidden border-y border-white/8 py-3.5 sm:mt-20">
        <div className="flex shrink-0 animate-marquee gap-8 pr-8 font-mono text-xs tracking-[0.18em] text-white/35">
          {[
            ...Array(2).fill([
              "SNS MARKETING",
              "SEARCH · SEO",
              "COMMUNITY VIRAL",
              "PERFORMANCE ADS",
              "DATA ANALYTICS",
              "BRAND STRATEGY",
              "INFLUENCER",
            ]),
          ]
            .flat()
            .map((t, i) => (
              <span key={i} className="flex items-center gap-8">
                {t}
                <span className="text-brand/50">✦</span>
              </span>
            ))}
        </div>
      </div>
    </section>
  );
}
