import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { whyKcg } from "@/lib/content";
import { accentBar, accentTint } from "@/lib/accents";

export function WhyKcg() {
  return (
    <section id="why" className="relative bg-mist py-20 sm:py-28">
      <div className="absolute inset-0 bg-grid-ink opacity-70" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="03"
          eyebrow="Why KCG"
          title="왜 KCG인가?"
          desc="단순 대행을 넘어선, KCG만의 4가지 핵심 경쟁력"
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {whyKcg.map((w, i) => (
            <Reveal key={w.no} delay={i * 90}>
              <div className="hair hair-ink group relative h-full overflow-hidden rounded-md border border-ink/10 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
                <div
                  className={`absolute inset-x-0 top-0 h-1 ${accentBar[w.accent]}`}
                />
                <span className="pointer-events-none absolute top-4 right-5 text-5xl font-black text-ink/5">
                  {w.no}
                </span>
                <span
                  className={`flex h-14 w-14 items-center justify-center rounded-md ${accentTint[w.accent]}`}
                >
                  <Icon name={w.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-ink">{w.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {w.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
