import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { services, addonServices } from "@/lib/content";
import { accentBar, accentTint, accentText } from "@/lib/accents";

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-navy-900 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="pointer-events-none absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-brand/5 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          index="02"
          eyebrow="Service Area"
          title="서비스 영역"
          desc="디지털 마케팅에 법률·세무·웹 제작까지 더한, 비즈니스 전반의 원스톱 솔루션."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 110}>
              <div className="hair group relative h-full overflow-hidden rounded-md border border-white/10 bg-navy-800/60 p-7 transition duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:bg-navy-800">
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${accentBar[s.accent]}`}
                />
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-md ${accentTint[s.accent]}`}
                >
                  <Icon name={s.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-white">{s.title}</h3>
                <p className="mt-1 text-sm text-white/45">{s.en}</p>
                <div className="my-5 h-px w-full bg-white/10" />
                <ul className="space-y-4">
                  {s.points.map((p) => (
                    <li key={p.t} className="flex gap-3">
                      <Icon
                        name="circle-check"
                        className={`mt-0.5 h-5 w-5 shrink-0 ${accentText[s.accent]}`}
                      />
                      <div>
                        <div className="text-[15px] font-semibold text-white">
                          {p.t}
                        </div>
                        <div className="text-sm text-white/50">{p.d}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        {/* one-stop add-on services */}
        <div className="mt-12">
          <Reveal>
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="h-2.5 w-2.5 bg-brand" />
              <span className="font-mono text-[11px] font-medium tracking-[0.22em] text-white/55 uppercase">
                One-stop Add-ons
              </span>
              <span className="text-sm font-semibold text-white/80">
                원스톱 부가 서비스
              </span>
            </div>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {addonServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="hair group relative flex h-full items-start gap-4 rounded-md border border-white/10 bg-navy-800/40 p-5 transition hover:-translate-y-1 hover:border-white/20 hover:bg-navy-800">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand/10 text-brand-soft">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-bold text-white">{s.title}</h4>
                    <p className="font-mono text-[10px] tracking-[0.14em] text-brand-soft/70 uppercase">
                      {s.en}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
