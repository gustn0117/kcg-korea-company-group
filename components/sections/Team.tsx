import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { teams, operations } from "@/lib/content";

export function Team() {
  return (
    <section id="team" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="05"
          eyebrow="Team Capabilities"
          title="팀 역량"
          desc="분야별 전문 전담팀 구성과 체계적인 운영 방식"
        />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {teams.map((t, i) => (
              <Reveal key={t.name} delay={i * 80}>
                <div className="hair hair-ink relative group h-full rounded-md border border-ink/10 bg-mist p-6 transition hover:-translate-y-1 hover:bg-white hover:shadow-card">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md bg-brand/10 text-brand">
                    <Icon name={t.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-bold text-ink">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                    {t.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <div className="hair relative h-full overflow-hidden rounded-md bg-navy-900 p-7">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="pointer-events-none absolute -right-16 -bottom-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-brand">
                  <Icon name="zap" className="h-5 w-5" />
                  <span className="text-xs font-semibold tracking-[0.2em] font-mono uppercase">
                    KCG Way
                  </span>
                </div>
                <h3 className="mt-2 text-xl font-bold text-white">
                  KCG 운영 방식
                </h3>
                <div className="mt-6 space-y-5">
                  {operations.map((o) => (
                    <div key={o.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-white/5 text-brand">
                        <Icon name={o.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="font-semibold text-white">{o.title}</div>
                        <div className="text-sm text-white/55">{o.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
