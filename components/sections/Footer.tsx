import { Icon } from "../Icon";
import { company, navLinks } from "@/lib/content";

const bizRows = [
  { label: "상호", value: "케이씨지 (KCG · 코리아컴퍼니그룹)" },
  { label: "대표", value: company.ceo },
  { label: "사업자등록번호", value: company.businessNo },
  { label: "업태 / 종목", value: `${company.bizType} / ${company.bizCategory}` },
  {
    label: "주소",
    value: `${company.address} ${company.addressDetail}`,
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-navy-950">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-2xl font-black text-white">KCG</span>
              <span className="h-4 w-px bg-white/20" />
              <span className="text-sm text-white/55">코리아컴퍼니그룹</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/45">
              성과로 증명하는 온라인 마케팅 파트너. SNS·검색광고·커뮤니티 바이럴을
              아우르는 통합 디지털 마케팅 솔루션을 제공합니다.
            </p>
            <div className="mt-5 flex gap-2.5">
              {["instagram", "facebook", "youtube"].map((s) => (
                <span
                  key={s}
                  className="hair relative flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/50"
                  aria-label={s}
                >
                  <Icon name={s} className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-semibold tracking-[0.2em] text-brand font-mono uppercase">
              Business Info
            </div>
            <dl className="mt-4 space-y-2.5 text-sm">
              {bizRows.map((r) => (
                <div key={r.label} className="flex gap-3">
                  <dt className="w-28 shrink-0 text-white/40">{r.label}</dt>
                  <dd className="text-white/70">{r.value}</dd>
                </div>
              ))}
              <div className="flex gap-3">
                <dt className="w-28 shrink-0 text-white/40">이메일 / 전화</dt>
                <dd className="text-white/70">
                  <a
                    href={`mailto:${company.email}`}
                    className="transition hover:text-brand"
                  >
                    {company.email}
                  </a>
                  <span className="mx-1.5 text-white/25">·</span>
                  <a
                    href={`tel:${company.phone.replace(/-/g, "")}`}
                    className="transition hover:text-brand"
                  >
                    {company.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-5 gap-y-2 border-t border-white/10 pt-6">
          {navLinks.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="text-xs text-white/45 transition hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-6 text-xs text-white/35">
          © 2026 KCG 코리아컴퍼니그룹 (케이씨지). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
