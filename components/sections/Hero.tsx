import { Icon } from "../Icon";
import { company } from "@/lib/content";

function FloatChip({
  className,
  icon,
  label,
  tone,
}: {
  className: string;
  icon: string;
  label: string;
  tone: "green" | "blue" | "cyan";
}) {
  const tones: Record<string, string> = {
    green: "text-green",
    blue: "text-blue",
    cyan: "text-brand",
  };
  return (
    <div
      className={`absolute flex items-center gap-2.5 rounded-xl border border-white/10 bg-navy-800/80 px-3.5 py-2.5 shadow-xl backdrop-blur ${className}`}
    >
      <span
        className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/5 ${tones[tone]}`}
      >
        <Icon name={icon} className="h-4 w-4" />
      </span>
      <span className="text-sm font-semibold whitespace-nowrap text-white">
        {label}
      </span>
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-navy-900 pt-28 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-32"
    >
      {/* background layers */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-navy-950 via-navy-900 to-navy-850" />
      <div className="absolute inset-0 -z-10 bg-diagonal opacity-70" />
      <div className="absolute inset-0 -z-10 bg-dotgrid opacity-40" />
      <div className="pointer-events-none absolute -left-44 top-4 -z-10 h-[34rem] w-[34rem] rounded-full border border-brand/15" />
      <div className="pointer-events-none absolute -right-32 -bottom-10 -z-10 h-[32rem] w-[32rem] rounded-full bg-brand/10 blur-[130px]" />
      <div className="pointer-events-none absolute top-1/3 right-1/4 -z-10 h-72 w-72 rounded-full bg-brand-2/10 blur-[100px]" />
      <div className="absolute top-16 left-0 h-1.5 w-28 bg-brand" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr]">
        {/* left */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold tracking-[0.18em] text-brand">
            <Icon name="sparkles" className="h-3.5 w-3.5" />
            SINCE {company.since}
          </div>

          <p className="mt-6 text-sm font-semibold tracking-[0.2em] text-white/70">
            {company.role}
          </p>
          <h1 className="mt-3 text-6xl font-black leading-[0.95] tracking-tight text-white sm:text-7xl">
            KCG
          </h1>
          <p className="mt-2 text-2xl font-bold text-white/90 sm:text-3xl">
            {company.nameFull}
          </p>
          <div className="mt-6 h-1 w-16 rounded-full bg-brand" />

          <p className="mt-7 text-lg leading-relaxed text-white/65 sm:text-xl">
            {company.tagline}
            <br />
            <span className="font-bold text-white">
              {company.taglineStrong}
            </span>
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-bold text-navy-950 shadow-[0_12px_40px_-10px_rgba(31,211,232,0.8)] transition hover:bg-brand-soft"
            >
              제안 문의하기 <Icon name="arrow-right" className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
            >
              서비스 살펴보기
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-9 gap-y-4">
            {[
              { v: "9+", l: "업력(년)" },
              { v: "50+", l: "누적 파트너사" },
              { v: "5년 연속", l: "국회 표창" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-extrabold text-brand">{s.v}</div>
                <div className="text-xs text-white/50">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* right - floating chip composition */}
        <div className="relative hidden h-[26rem] lg:block">
          <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-linear-to-br from-navy-700/60 to-navy-800/30 backdrop-blur-sm" />
          <div className="absolute top-1/2 left-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand/20" />
          <div className="absolute top-1/2 left-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-2xl border border-brand/30 bg-navy-800/80 text-center shadow-[0_0_60px_-12px_rgba(31,211,232,0.6)] backdrop-blur">
            <Icon name="line-chart" className="h-7 w-7 text-brand" />
            <span className="mt-1 text-xs font-bold tracking-widest text-white">
              GROWTH
            </span>
          </div>

          <FloatChip
            className="top-4 left-0 animate-floaty"
            icon="circle-check"
            tone="green"
            label="Optimization"
          />
          <FloatChip
            className="top-24 right-0 animate-floaty-slow"
            icon="trending-up"
            tone="cyan"
            label="ROAS +250%"
          />
          <FloatChip
            className="bottom-12 left-2 animate-floaty-slow"
            icon="users"
            tone="blue"
            label="Audience Targeting"
          />
          <FloatChip
            className="right-6 bottom-0 animate-floaty"
            icon="search"
            tone="cyan"
            label="Keyword SEO"
          />
        </div>
      </div>
    </section>
  );
}
