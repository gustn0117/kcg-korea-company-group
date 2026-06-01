import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { CountUp } from "../CountUp";
import { Icon } from "../Icon";
import { performanceStats, industries } from "@/lib/content";

export function Performance() {
  return (
    <section
      id="performance"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-diagonal opacity-50" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-brand-2/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          index="04"
          eyebrow="Partnership Performance"
          title="파트너십 실적"
          desc="다양한 산업군에서 검증된 성공적인 파트너십을 보유하고 있습니다."
        />

        <Reveal>
          <div className="mt-10 grid grid-cols-1 gap-2 rounded-lg border border-white/10 bg-navy-800/50 p-2 sm:grid-cols-3">
            {performanceStats.map((s, i) => (
              <div key={s.label} className="relative px-6 py-8 text-center">
                {i > 0 && (
                  <div className="absolute top-1/2 left-0 hidden h-16 w-px -translate-y-1/2 bg-white/10 sm:block" />
                )}
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <div className="mt-4 text-4xl font-black text-white sm:text-5xl">
                  {s.value === "ALL" ? (
                    "ALL"
                  ) : (
                    <CountUp to={Number(s.value)} suffix={s.suffix ?? ""} />
                  )}
                </div>
                <div className="mt-2 font-bold text-white/90">{s.label}</div>
                <div className="text-sm text-white/50">{s.sub}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <h3 className="mt-14 mb-5 text-lg font-bold text-white">
            주요 협력 산업군
          </h3>
        </Reveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((it, i) => (
            <Reveal key={it.title} delay={(i % 4) * 80}>
              <div className="group flex h-full items-center gap-4 rounded-md border border-white/10 bg-navy-800/50 p-5 transition hover:-translate-y-1 hover:border-brand/30 hover:bg-navy-800">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/5 text-brand transition group-hover:bg-brand/15">
                  <Icon name={it.icon} className="h-6 w-6" />
                </span>
                <div>
                  <div className="font-bold text-white">{it.title}</div>
                  <div className="text-sm text-white/50">{it.desc}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
