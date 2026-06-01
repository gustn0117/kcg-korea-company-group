import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  variable: "--font-pretendard",
  display: "swap",
  weight: "100 900",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/IBMPlexMono-400.woff2", weight: "400", style: "normal" },
    { path: "./fonts/IBMPlexMono-500.woff2", weight: "500", style: "normal" },
    { path: "./fonts/IBMPlexMono-600.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "KCG 코리아컴퍼니그룹 | 성과 중심 디지털 마케팅 파트너",
  description:
    "KCG(코리아컴퍼니그룹)는 2017년 설립 이래 SNS·검색광고·커뮤니티 바이럴을 아우르는 통합 디지털 마케팅 솔루션을 제공하는 온라인 마케팅 전문 기업입니다. 성과로 증명하는 파트너.",
  keywords: [
    "KCG",
    "코리아컴퍼니그룹",
    "디지털 마케팅",
    "SNS 마케팅",
    "검색광고",
    "SEO",
    "바이럴 마케팅",
    "광고대행",
    "퍼포먼스 마케팅",
  ],
  authors: [{ name: "KCG 코리아컴퍼니그룹" }],
  openGraph: {
    title: "KCG 코리아컴퍼니그룹 | 성과 중심 디지털 마케팅 파트너",
    description: "성과로 증명하는 온라인 마케팅 파트너, KCG 코리아컴퍼니그룹.",
    type: "website",
    locale: "ko_KR",
    siteName: "KCG 코리아컴퍼니그룹",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a1424",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${pretendard.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
