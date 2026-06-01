import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";
import { Icon } from "../Icon";
import { aboutIntro, coreValues } from "@/lib/content";
import { accentTint } from "@/lib/accents";

const stats = [
  { kind: "static" as const, value: "2017", label: "SINCE", sub: "설립연도", icon: "calendar" },
  { kind: "count" as const, to: 9, suffix: "+", label: "YEARS", sub: "업력", icon: "trending-up" },
  { kind: "count" as const, to: 50, suffix: "+", label: "PARTNERS", sub: "누적 파트너사", icon: "heart-handshake" },
];

export function About() {
  return (
    <section id="about" className="relative bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="01"
          eyebrow="Company Overview"
          title="회사 개요"
          desc="KCG 코리아컴퍼니그룹 — 성과로 증명하는 디지털 마케팅 전문 기업"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="hair hair-ink relative group h-full rounded-md border border-ink/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div className="flex items-start justify-between">
                  <div className="text-4xl font-black tracking-tight text-ink sm:text-5xl">
                    {s.kind === "static" ? (
                      s.value
                    ) : (
                      <CountUp to={s.to} suffix={s.suffix} />
                    )}
                  </div>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                </div>
                <div className="mt-3 font-mono text-[11px] font-medium tracking-[0.15em] text-ink/60">
                  {s.label}
                </div>
                <div className="text-sm text-ink-soft">{s.sub}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal>
            <div className="flex items-center gap-2.5">
              <Icon name="quote" className="h-5 w-5 text-brand" />
              <span className="text-xl font-extrabold text-ink">
                {aboutIntro.quote}
              </span>
            </div>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {aboutIntro.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {aboutIntro.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-ink/5 px-3 py-1.5 text-xs font-semibold text-ink-soft"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-ink-soft">
              Core Values
            </div>
            <div className="mt-3 space-y-3">
              {coreValues.map((v) => (
                <div
                  key={v.title}
                  className="hair hair-ink relative flex items-center gap-4 rounded-md border border-ink/10 bg-white p-4 shadow-soft"
                >
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-md ${accentTint[v.accent]}`}
                  >
                    <Icon name={v.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <div className="font-bold text-ink">{v.title}</div>
                    <div className="text-xs text-ink-soft">{v.en}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
