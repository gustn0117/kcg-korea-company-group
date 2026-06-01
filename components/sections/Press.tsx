import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { pressItems, pressOutlets } from "@/lib/press";

const fmt = (d: string) => d.replace(/-/g, ".");

export function Press() {
  return (
    <section id="press" className="relative bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="09"
          eyebrow="In the Press"
          title="언론보도"
          desc="KCG의 파트너십과 행보가 주요 언론을 통해 소개되고 있습니다."
        />

        {/* outlet marquee */}
        <Reveal>
          <div className="marquee-mask mt-9 flex overflow-hidden">
            <div className="flex shrink-0 animate-marquee gap-3 pr-3">
              {[...pressOutlets, ...pressOutlets].map((o, i) => (
                <span
                  key={i}
                  className="whitespace-nowrap rounded-full border border-ink/10 bg-white px-5 py-2 text-sm font-bold text-ink/60"
                >
                  {o}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pressItems.map((item, i) => (
            <Reveal key={item.url} delay={(i % 3) * 70}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-5 shadow-soft transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-card"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                      item.category === "advisory"
                        ? "bg-orange/10 text-orange"
                        : "bg-brand/10 text-brand"
                    }`}
                  >
                    {item.outlet}
                  </span>
                  <span className="text-xs text-ink-soft">{fmt(item.date)}</span>
                </div>
                <h3 className="mt-3 line-clamp-3 flex-1 text-[15px] font-bold leading-snug text-ink transition group-hover:text-brand">
                  {item.title}
                </h3>
                <div className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-ink-soft transition group-hover:text-brand">
                  기사 보기
                  <Icon name="arrow-up-right" className="h-3.5 w-3.5" />
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-ink-soft">
          총 <span className="font-bold text-ink">{pressItems.length}건</span>의
          언론 보도 · 클릭하면 원문으로 이동합니다.
        </p>
      </div>
    </section>
  );
}
