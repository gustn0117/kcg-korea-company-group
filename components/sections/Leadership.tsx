import { SectionHeading } from "../SectionHeading";
import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { cmo, advisors, type Advisor } from "@/lib/content";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-1 text-[11px] font-bold tracking-wider text-ink/40 uppercase">
        {label}
      </div>
      {children}
    </div>
  );
}

function AdvisorCard({ a }: { a: Advisor }) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-ink/10 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-card">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-xl font-extrabold text-ink">{a.name}</h3>
            <span className="rounded-full bg-orange/10 px-2.5 py-0.5 text-xs font-bold text-orange">
              {a.role}
            </span>
          </div>
          <p className="mt-1 text-sm font-semibold text-orange/90">{a.en}</p>
        </div>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-orange/10 text-orange">
          <Icon name={a.icon} className="h-5 w-5" />
        </span>
      </div>

      <div className="mt-5 space-y-3.5 text-sm">
        <Field label="현직 (Current)">
          <ul className="space-y-1">
            {a.current.map((c) => (
              <li key={c} className="text-ink-soft">
                · {c}
              </li>
            ))}
          </ul>
        </Field>
        {a.former && (
          <Field label="전직 (Former)">
            <p className="text-ink-soft">{a.former}</p>
          </Field>
        )}
        {a.career && (
          <Field label="주요 경력 (Career)">
            <ul className="space-y-1">
              {a.career.map((c) => (
                <li key={c} className="text-ink-soft">
                  · {c}
                </li>
              ))}
            </ul>
          </Field>
        )}
        {a.education && (
          <Field label="학력 (Education)">
            <p className="text-ink-soft">{a.education}</p>
          </Field>
        )}
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {a.expertise.map((e) => (
          <span
            key={e}
            className="rounded-md bg-ink/5 px-2 py-1 text-xs font-medium text-ink-soft"
          >
            {e}
          </span>
        ))}
      </div>

      <div className="mt-4 rounded-xl border-l-2 border-orange bg-orange/5 p-3.5">
        <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange">
          <Icon name="circle-check" className="h-3.5 w-3.5" />
          KCG에서의 역할
        </div>
        <div className="mt-1 text-sm font-medium text-ink">{a.roleKcg}</div>
      </div>
    </div>
  );
}

export function Leadership() {
  return (
    <section id="leadership" className="relative bg-mist py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          index="06"
          eyebrow="Leadership & Advisory"
          title="임원진 & 고문단"
          desc="최고의 전문가들과 함께 마케팅의 새로운 기준을 제시합니다."
        />

        <Reveal>
          <div className="relative mt-10 overflow-hidden rounded-2xl border border-orange/20 bg-linear-to-br from-white to-orange/5 p-7 shadow-soft sm:p-9">
            <div className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-orange/10 blur-2xl" />
            <div className="relative grid grid-cols-1 gap-7 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <div className="flex items-center gap-2 text-orange">
                  <span className="h-2 w-2 rounded-full bg-orange" />
                  <span className="text-xs font-bold tracking-[0.2em] uppercase">
                    Executive Board
                  </span>
                </div>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <h3 className="text-3xl font-black text-ink">{cmo.name}</h3>
                  <span className="rounded-full bg-orange/10 px-3 py-1 text-sm font-bold text-orange">
                    {cmo.role}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-orange/90">
                  {cmo.en}
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                  {cmo.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {cmo.expertise.map((e) => (
                    <span
                      key={e}
                      className="rounded-md bg-ink/5 px-2.5 py-1 text-xs font-medium text-ink-soft"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
              <div className="rounded-xl bg-white/70 p-5 ring-1 ring-ink/5">
                <div className="text-[11px] font-bold tracking-wider text-ink/40 uppercase">
                  담당 업무 (Responsibilities)
                </div>
                <ul className="mt-3 space-y-3">
                  {cmo.responsibilities.map((r) => (
                    <li key={r} className="flex gap-2.5 text-[15px] text-ink">
                      <Icon
                        name="check"
                        className="mt-0.5 h-4 w-4 shrink-0 text-orange"
                      />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 flex items-center gap-2 text-orange">
            <span className="h-2 w-2 rounded-full bg-orange" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase">
              Advisory Board
            </span>
            <span className="ml-1 text-sm font-semibold text-ink">
              KCG 고문단
            </span>
          </div>
        </Reveal>

        <div className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {advisors.map((a, i) => (
            <Reveal key={a.name} delay={(i % 2) * 90}>
              <AdvisorCard a={a} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
