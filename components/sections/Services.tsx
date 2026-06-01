import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { services } from "@/lib/content";
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
          desc="데이터와 크리에이티브가 결합된 통합 디지털 마케팅 솔루션을 제공합니다."
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
      </div>
    </section>
  );
}
