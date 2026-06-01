export type PressItem = {
  title: string;
  outlet: string;
  date: string; // YYYY-MM-DD
  url: string;
  category: "partnership" | "advisory";
};

// 사용자 제공 링크에서 수집한 실제 기사 제목·언론사·발행일 (최신순)
export const pressItems: PressItem[] = [
  {
    title: "케이씨지, 가율택스 서지호 대표 세무사 고문 영입… 재무·세무 역량 강화",
    outlet: "경북신문",
    date: "2026-06-01",
    url: "http://www.kbsm.net/news/view.php?idx=465407",
    category: "advisory",
  },
  {
    title: "케이씨지-더마핏, 전략적 파트너십 체결···디지털 마케팅·브랜드 사업협력 확대",
    outlet: "이넷뉴스",
    date: "2026-05-20",
    url: "https://www.enetnews.co.kr/news/articleView.html?idxno=50273",
    category: "partnership",
  },
  {
    title: "케이씨지, IT 전문 기업 '크레드잇'과 전략적 파트너십 체결",
    outlet: "매일안전신문",
    date: "2026-04-22",
    url: "https://idsn.co.kr/news/view/1065596901204586",
    category: "partnership",
  },
  {
    title: "케이씨지-블록체인투데이, 마케팅 협력 체결···콘텐츠·미디어 시너지",
    outlet: "이넷뉴스",
    date: "2026-04-16",
    url: "https://www.enetnews.co.kr/news/articleView.html?idxno=48997",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), 카페이클립스와 마케팅 파트너십 체결···브랜드 경쟁력 강화 나서",
    outlet: "이넷뉴스",
    date: "2026-04-14",
    url: "https://www.enetnews.co.kr/news/articleView.html?idxno=48858",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), 금산 엔젤홈 하우스와 파트너십 체결…유기견 보호 위한 공익 지원 나선다",
    outlet: "K스피릿",
    date: "2026-03-31",
    url: "http://www.ikoreanspirit.com/news/articleView.html?idxno=84555",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), 가율택스와 파트너십 체결…마케팅·세무 서비스 협력 강화",
    outlet: "메가경제",
    date: "2026-03-25",
    url: "https://www.megaeconomy.co.kr/news/newsview.php?ncode=1065581033683114",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), 법무법인 은율과 파트너십 체결…마케팅·법률 협력 시너지 기대",
    outlet: "글로벌에픽",
    date: "2026-03-24",
    url: "http://www.globalepic.co.kr/view.php?ud=2026032415362875266cf2d78c68_29",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), 양산 연세미소치과와 파트너십 체결···디지털 헬스케어 마케팅 강화",
    outlet: "이넷뉴스",
    date: "2026-03-20",
    url: "https://www.enetnews.co.kr/news/articleView.html?idxno=48007",
    category: "partnership",
  },
  {
    title: "케이씨지(KCG), ㈜에스티씨와 파트너십 체결",
    outlet: "K스피릿",
    date: "2026-03-20",
    url: "http://www.ikoreanspirit.com/news/articleView.html?idxno=84440",
    category: "partnership",
  },
  {
    title: "케이씨지, 보컬리스트 김수현과 파트너십 체결…음악·콘텐츠 협업 본격화",
    outlet: "글로벌에픽",
    date: "2026-03-10",
    url: "http://www.globalepic.co.kr/view.php?ud=2026031013213421006cf2d78c68_29",
    category: "partnership",
  },
  {
    title: "케이씨지, 보니따 필라테스와 마케팅 협약 체결",
    outlet: "K스피릿",
    date: "2026-03-05",
    url: "http://www.ikoreanspirit.com/news/articleView.html?idxno=84205",
    category: "partnership",
  },
  {
    title: "케이씨지, 주식회사 큰획과 전략적 파트너십 체결",
    outlet: "메가경제",
    date: "2026-03-04",
    url: "https://www.megaeconomy.co.kr/news/newsview.php?ncode=1065601264554909",
    category: "partnership",
  },
  {
    title: "케이씨지, ESG 플랫폼 기업 포아브와 마케팅 협약 체결",
    outlet: "매일안전신문",
    date: "2026-02-20",
    url: "https://idsn.co.kr/news/view/1065603810815436",
    category: "partnership",
  },
  {
    title: "케이씨지, 스킨케어 브랜드 픽프롬과 마케팅 협약 체결",
    outlet: "내외경제TV",
    date: "2026-02-13",
    url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4018819",
    category: "partnership",
  },
  {
    title: "케이씨지, 인앤클린과 마케팅 협약 체결…지역 기반 성장 가속화",
    outlet: "글로벌에픽",
    date: "2026-01-14",
    url: "http://www.globalepic.co.kr/view.php?ud=2026011413332172806cf2d78c68_29",
    category: "partnership",
  },
  {
    title: "케이씨지, 쥬벤스성형외과와 마케팅 협약 체결",
    outlet: "내외경제TV",
    date: "2026-01-08",
    url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4016718",
    category: "partnership",
  },
  {
    title: "케이씨지·에스티디페, 브랜드 마케팅 강화 위한 업무협약 체결",
    outlet: "내외경제TV",
    date: "2026-01-07",
    url: "https://www.nbntv.co.kr/news/articleView.html?idxno=4016607",
    category: "partnership",
  },
  {
    title: "케이씨지, 류인수 전 에프엑스기어 영업·마케팅 이사 고문 영입",
    outlet: "더쎈뉴스",
    date: "2025-02-25",
    url: "https://www.mhns.co.kr/news/articleView.html?idxno=710455",
    category: "advisory",
  },
  {
    title: "케이씨지, 법률 고문으로 인하대학교 공과대학원 겸임교수 김민규 변호사 영입",
    outlet: "아이티비즈",
    date: "2025-02-24",
    url: "http://www.it-b.co.kr/news/articleView.html?idxno=80403",
    category: "advisory",
  },
  {
    title: "케이씨지, 이상오 전 빗썸 개발팀장 고문 영입",
    outlet: "매일안전신문",
    date: "2025-02-24",
    url: "https://idsn.co.kr/news/view/1065603233173089",
    category: "advisory",
  },
];

// 보도에 등장한 언론사 (로고 그리드용)
export const pressOutlets = [
  "이넷뉴스",
  "매일안전신문",
  "메가경제",
  "글로벌에픽",
  "K스피릿",
  "내외경제TV",
  "경북신문",
  "더쎈뉴스",
  "아이티비즈",
];
