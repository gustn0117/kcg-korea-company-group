import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { partners } from "@/lib/content";

export function Partners() {
  return (
    <section id="partners" className="relative bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="08"
          eyebrow="Partners"
          title="협업 대표 파트너사"
          desc="KCG는 다양한 분야의 전문 기업들과 함께 성장하고 있습니다."
        />

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((p, i) => (
            <Reveal key={p} delay={(i % 6) * 50}>
              <div className="flex h-20 items-center justify-center rounded-md border border-ink/10 bg-mist px-3 text-center text-sm font-bold text-ink/65 transition hover:-translate-y-1 hover:border-brand/40 hover:bg-white hover:text-ink hover:shadow-card">
                {p}
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-right text-xs text-ink-soft">
          * 추가 파트너사 업데이트 계속 진행 중
        </p>
      </div>
    </section>
  );
}
