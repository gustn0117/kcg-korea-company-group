import { Reveal } from "../Reveal";
import { Icon } from "../Icon";
import { company, offices } from "@/lib/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-navy-950 py-24 sm:py-32"
    >
      <div className="absolute inset-0 bg-grid opacity-25" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/10 blur-[150px]" />

      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <p className="text-sm font-semibold tracking-[0.25em] text-brand">
            ONLINE MARKETING PARTNER
          </p>
          <h2 className="mt-5 text-4xl font-black leading-tight text-white sm:text-5xl">
            성과로 증명하는
            <br />
            <span className="text-gradient">디지털 마케팅 파트너</span>
          </h2>
          <div className="mx-auto mt-7 h-1 w-16 rounded-none bg-brand" />
          <p className="mt-7 text-lg font-bold text-white">
            KCG 코리아컴퍼니그룹
          </p>
          <p className="mt-2 leading-relaxed text-white/55">
            파트너사의 성장을 함께 만들어갈 준비가 되어 있습니다.
            <br className="hidden sm:block" /> 지금 제안을 문의해 주세요.
          </p>

          <div className="mx-auto mt-9 flex max-w-3xl flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${company.email}`}
              className="hair group relative flex flex-1 items-center justify-center gap-3 rounded-md border border-white/10 bg-white/5 px-5 py-4 transition hover:border-brand/40 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand text-navy-950">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-white/50">이메일</div>
                <div className="font-semibold text-white">{company.email}</div>
              </div>
            </a>
            <a
              href={`tel:${company.phone.replace(/-/g, "")}`}
              className="hair group relative flex flex-1 items-center justify-center gap-3 rounded-md border border-white/10 bg-white/5 px-5 py-4 transition hover:border-brand/40 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand text-navy-950">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-white/50">전화</div>
                <div className="font-semibold text-white">{company.phone}</div>
              </div>
            </a>
            <a
              href={company.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hair group relative flex flex-1 items-center justify-center gap-3 rounded-md border border-white/10 bg-white/5 px-5 py-4 transition hover:border-brand/40 hover:bg-white/10"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand text-navy-950">
                <Icon name="external-link" className="h-5 w-5" />
              </span>
              <div className="text-left">
                <div className="text-xs text-white/50">웹사이트</div>
                <div className="font-semibold text-white">{company.website}</div>
              </div>
            </a>
          </div>

          {/* offices */}
          <div className="mx-auto mt-5 flex max-w-3xl flex-col gap-3 sm:flex-row">
            {offices.map((o) => (
              <div
                key={o.label}
                className="flex flex-1 items-start gap-2.5 rounded-md border border-white/8 bg-white/3 px-4 py-3 text-left"
              >
                <Icon
                  name="map-pin"
                  className="mt-0.5 h-4 w-4 shrink-0 text-brand-soft"
                />
                <div>
                  <div className="font-mono text-[10px] tracking-[0.14em] text-brand-soft/80 uppercase">
                    {o.label} · {o.en}
                  </div>
                  <div className="mt-0.5 text-sm text-white/60">
                    {o.address} {o.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
