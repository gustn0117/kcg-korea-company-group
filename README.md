# KCG 코리아컴퍼니그룹 — 원페이지 홈페이지

성과 중심 디지털 마케팅 대행사 **KCG(케이씨지 · 코리아컴퍼니그룹)** 의 회사 소개 원페이지 사이트입니다.
회사 소개 PDF와 사업자등록증을 기반으로 제작했습니다.

## 기술 스택

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS 기반 `@theme` 토큰)
- **Pretendard** 가변 폰트 (self-host, `next/font/local`)
- **lucide-react** 아이콘 + 일부 커스텀 SVG(인스타/페북/유튜브)
- 스크롤 리빌은 경량 커스텀 훅(IntersectionObserver + CSS) — 무거운 애니메이션 라이브러리 미사용

## 실행 방법

```bash
npm install        # 최초 1회
npm run dev        # 개발 서버 (기본 http://localhost:3000)
npm run build      # 프로덕션 빌드
npm run start      # 빌드 결과 실행
```

## 구조

```
app/
  layout.tsx        # 폰트·메타데이터(SEO)·루트 레이아웃
  page.tsx          # 전체 섹션 조립
  globals.css       # Tailwind v4 테마(네이비/시안/오렌지)·배경 패턴·리빌 애니메이션
  fonts/            # Pretendard 가변 폰트(woff2)
components/
  Nav.tsx           # 고정 내비 + 스크롤 스파이 + 모바일 메뉴
  Reveal.tsx        # 스크롤 진입 리빌 래퍼
  CountUp.tsx       # 숫자 카운트업
  BackToTop.tsx     # 맨 위로 버튼
  Icon.tsx          # 아이콘 매핑
  SectionHeading.tsx
  sections/         # Hero·About·Services·WhyKcg·Performance·Team·
                    # Leadership·Awards·Partners·Press·Process·Contact·Footer
lib/
  content.ts        # 모든 카피·데이터 (단일 진실 소스)
  press.ts          # 언론보도 데이터(실제 기사 제목·언론사·날짜)
  accents.ts        # 포인트 컬러 클래스 맵
```

## 콘텐츠 수정

- 회사 소개 문구·서비스·고문단·수상 등 → `lib/content.ts`
- 언론보도 카드 → `lib/press.ts`
- 색상·폰트·배경 패턴 → `app/globals.css`

## 참고

- 설립연도는 회사 소개자료(PDF) 기준 **2017년 / 업력 9년+** 으로 표기했습니다.
  (사업자등록증상 개업일은 2020-12-09)
- 파트너사 **로고 원본이 없어** 이름 기반 카드로 표현했습니다. 로고 이미지를
  받으면 `Partners.tsx`에서 교체할 수 있습니다.
- 푸터에 사업자등록번호 등 공식 사업자 정보를 전체 표기했습니다.
