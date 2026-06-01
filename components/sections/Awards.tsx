import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { awards, assemblyAwards } from "@/lib/content";

export function Awards() {
  return (
    <section
      id="awards"
      className="relative overflow-hidden bg-navy-950 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-dotgrid opacity-25" />
      <div className="pointer-events-none absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-orange/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          dark
          index="07"
          eyebrow="History & Awards"
          title="수상 내역"
          desc="수상 이력은 실력의 증거입니다. 국회와 주요 언론이 인정한 KCG의 공신력."
        />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-[1.25fr_0.75fr]">
          <Reveal>
            <ol className="relative ml-2 border-l border-white/15">
              {awards.map((y) => (
                <li key={y.year} className="relative pb-7 pl-7 last:pb-0">
                  <span className="absolute top-1 -left-[7px] h-3.5 w-3.5 rounded-full border-2 border-brand bg-navy-950" />
                  <div className="text-lg font-extrabold text-brand">
                    {y.year}
                  </div>
                  <ul className="mt-1.5 space-y-1.5">
                    {y.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-2 text-sm leading-relaxed text-white/70"
                      >
                        <Icon
                          name="award"
                          className="mt-0.5 h-4 w-4 shrink-0 text-white/25"
                        />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={120}>
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-orange/30 bg-linear-to-br from-navy-900 to-navy-850 p-8">
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange/15 blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-2 text-white/50">
                  <Icon name="trophy" className="h-4 w-4 text-orange" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    National Assembly
                  </span>
                </div>
                <div className="mt-3 text-4xl font-black text-orange">
                  국회 표창
                </div>
                <div className="text-3xl font-black text-white">5년 연속</div>
                <p className="mt-3 text-sm leading-relaxed text-white/55">
                  2022년부터 2026년까지 5년 연속 국회 표창을 수상하며 공신력을
                  입증했습니다.
                </p>
                <div className="mt-6 space-y-2.5">
                  {assemblyAwards.map((a) => (
                    <div
                      key={a.year}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                    >
                      <span className="text-sm font-extrabold text-orange">
                        {a.year}
                      </span>
                      <span className="text-sm text-white/75">{a.body}</span>
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
