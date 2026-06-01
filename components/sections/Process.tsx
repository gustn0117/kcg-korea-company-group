import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          index="10"
          eyebrow="Proposal & Cooperation"
          title="제안 & 협력 방안"
          desc="파트너사와 함께하는 4단계 성장 로드맵"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 100}>
              <div className="group relative h-full rounded-md border border-white/10 bg-navy-800/60 p-6 text-center transition hover:-translate-y-1.5 hover:border-brand/30 hover:bg-navy-800">
                <div className="text-xs font-bold tracking-[0.2em] text-brand">
                  {s.step}
                </div>
                <span className="mx-auto mt-4 flex h-16 w-16 items-center justify-center rounded-md bg-brand/10 text-brand transition group-hover:bg-brand/20">
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/55">
                  {s.desc}
                </p>
                {i < processSteps.length - 1 && (
                  <Icon
                    name="chevron-right"
                    className="absolute top-1/2 -right-3 hidden h-6 w-6 -translate-y-1/2 text-white/20 md:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-10 flex flex-col items-center justify-between gap-5 overflow-hidden rounded-lg border border-white/10 bg-linear-to-r from-navy-800 to-navy-850 p-8 sm:flex-row sm:p-10">
            <div>
              <h3 className="text-2xl font-extrabold text-white">
                KCG와 함께, 지금 시작하세요.
              </h3>
              <p className="mt-2 text-white/60">
                성과 중심의 디지털 마케팅 파트너십을 제안드립니다.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand px-7 py-3.5 text-sm font-bold text-navy-950 shadow-[0_12px_40px_-10px_rgba(84,131,200,0.8)] transition hover:bg-brand-soft"
            >
              제안 문의하기 <Icon name="arrow-right" className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
