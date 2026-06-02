// 모든 카피·데이터의 단일 진실 소스 (소개.pdf · 사업자등록증 기반)

export const company = {
  nameKo: "케이씨지",
  nameEn: "KCG",
  nameFull: "코리아컴퍼니그룹",
  fullEn: "KOREA COMPANY GROUP",
  role: "ONLINE MARKETING PARTNER",
  tagline: "파트너사를 위한 성과 중심",
  taglineStrong: "디지털 마케팅 솔루션",
  since: "2017",
  years: "9+",
  partnersCount: "50+",
  ceo: "김동인",
  businessNo: "533-37-00826",
  bizType: "전문, 과학 및 기술서비스업",
  bizCategory: "광고 대행업",
  address: "경상북도 구미시 모로실로 32-1",
  addressDetail: "(상모동) e편한세상 트리베뉴 103동",
  email: "arnoldpalmer@naver.com",
  phone: "010-9000-4881",
  website: "www.kcgkorea.com",
  websiteUrl: "https://www.kcgkorea.com",
};

export const offices = [
  {
    label: "본사",
    en: "Headquarters",
    address: "경상북도 구미시 모로실로 32-1",
    detail: "(상모동) e편한세상 트리베뉴 103동",
  },
  {
    label: "서울지점",
    en: "Seoul Office",
    address: "서울특별시 송파구 위례광장로 121",
    detail: "송파꿈에그린위례 24단지 2417동",
  },
];

export const navLinks = [
  { id: "about", label: "회사 개요" },
  { id: "services", label: "서비스" },
  { id: "why", label: "왜 KCG" },
  { id: "performance", label: "실적" },
  { id: "leadership", label: "고문단" },
  { id: "awards", label: "수상" },
  { id: "press", label: "언론보도" },
  { id: "contact", label: "문의" },
];

export const heroChips = [
  { label: "Optimization", icon: "circle-check", tone: "green" },
  { label: "Audience Targeting", icon: "users", tone: "blue" },
  { label: "ROAS +250%", icon: "trending-up", tone: "cyan" },
  { label: "GROWTH", icon: "line-chart", tone: "cyan" },
];

export const aboutStats = [
  { value: "2017", label: "SINCE", sub: "설립연도" },
  { value: "9", suffix: "+", label: "YEARS", sub: "업력" },
  { value: "50", suffix: "+", label: "PARTNERS", sub: "누적 파트너사" },
];

export const aboutIntro = {
  quote: "디지털 마케팅의 새로운 기준",
  paragraphs: [
    "KCG(코리아컴퍼니그룹)는 2017년 설립 이래 국내외 다양한 브랜드의 성장을 견인해 온 온라인 마케팅 전문 기업입니다.",
    "SNS 광고, 검색 최적화(SEO), 커뮤니티 바이럴 등 급변하는 디지털 환경에 최적화된 통합 마케팅 솔루션을 제공합니다.",
    "단순 대행을 넘어, 파트너사의 비즈니스 목표 달성을 최우선으로 하는 전략적 파트너입니다.",
  ],
  tags: ["#SNS마케팅", "#SEO검색최적화", "#통합솔루션"],
};

export const coreValues = [
  { icon: "trending-up", title: "성과 중심", en: "Performance Oriented", accent: "brand-2" },
  { icon: "database", title: "데이터 기반", en: "Data Driven Strategy", accent: "blue" },
  { icon: "users", title: "장기 파트너십", en: "Long-term Partnership", accent: "purple" },
];

export const services = [
  {
    icon: "instagram",
    accent: "brand-2",
    title: "SNS 마케팅",
    en: "Social Media Marketing",
    points: [
      { t: "인스타그램 광고 운영", d: "정교한 타겟팅 기반 스폰서드 광고 집행" },
      { t: "콘텐츠 기획 및 제작", d: "브랜드 아이덴티티를 담은 비주얼 제작" },
      { t: "채널 활성화", d: "팔로워 증대 및 인터랙션 강화 전략" },
    ],
  },
  {
    icon: "search",
    accent: "blue",
    title: "검색광고 / SEO",
    en: "Search Engine Optimization",
    points: [
      { t: "네이버·구글 검색 광고", d: "SA(Search Ads) 캠페인 효율 최적화" },
      { t: "키워드 최적화 전략", d: "고효율 키워드 발굴 및 입찰 전략 수립" },
      { t: "트래픽 & 전환율 향상", d: "랜딩 페이지 최적화를 통한 ROAS 개선" },
    ],
  },
  {
    icon: "users",
    accent: "purple",
    title: "커뮤니티·바이럴",
    en: "Community & Viral Marketing",
    points: [
      { t: "커뮤니티 관리 운영", d: "카페/밴드 등 타겟 커뮤니티 침투" },
      { t: "바이럴 캠페인 설계", d: "자연스러운 입소문 유도 및 리뷰 관리" },
      { t: "인플루언서 연계", d: "마이크로/메가 인플루언서 협업 브랜딩" },
    ],
  },
];

// 마케팅을 넘어선 원스톱 부가 서비스 (고문단 · 기술팀 역량 기반)
export const addonServices = [
  {
    icon: "scale",
    title: "법률 자문",
    en: "Legal Advisory",
    desc: "법무법인 은율과 연계한 계약 검토·규제 대응 및 기업 법무 지원",
  },
  {
    icon: "receipt",
    title: "세무 · 재무",
    en: "Tax & Finance",
    desc: "가율택스 전문 세무사와 함께하는 세무 신고·재무 전략 컨설팅",
  },
  {
    icon: "code",
    title: "홈페이지 제작",
    en: "Web Production",
    desc: "브랜드 아이덴티티를 담은 반응형 웹사이트·랜딩페이지 기획·개발",
  },
];

export const whyKcg = [
  {
    no: "01",
    icon: "target",
    accent: "brand-2",
    title: "성과 중심 집행",
    desc: "모든 캠페인은 KPI 기반으로 설계 및 운영됩니다. 불필요한 광고비 낭비를 제거하고, 클라이언트의 실질적인 목표 달성을 최우선 가치로 삼습니다.",
  },
  {
    no: "02",
    icon: "heart-handshake",
    accent: "blue",
    title: "장기 파트너십 지향",
    desc: "단발성 대행 프로젝트가 아닌, 파트너사의 지속적인 성장을 함께 고민합니다. 신뢰를 바탕으로 비즈니스의 성공 궤도를 함께 만들어가는 장기적 협력 모델을 추구합니다.",
  },
  {
    no: "03",
    icon: "layers",
    accent: "purple",
    title: "통합 채널 운영",
    desc: "SNS, 검색광고, 커뮤니티를 아우르는 멀티채널 전략으로 채널 간 시너지를 극대화합니다. 통합적인 관점에서 브랜드 메시지를 일관성 있게 전달합니다.",
  },
  {
    no: "04",
    icon: "zap",
    accent: "green",
    title: "빠른 실행력",
    desc: "전담팀의 즉각적인 대응과 유연한 전략 조정으로 급변하는 시장 트렌드에 빠르게 대응합니다. 데이터 분석 결과를 실시간으로 반영하여 효율을 높입니다.",
  },
];

export const performanceStats: {
  value: string;
  suffix?: string;
  label: string;
  sub: string;
  icon: string;
}[] = [
  { value: "50", suffix: "+", label: "누적 파트너사", sub: "신뢰로 쌓아온 협력 관계", icon: "heart-handshake" },
  { value: "9", suffix: "+", label: "마케팅 운영 경험(년)", sub: "2017년부터 축적된 노하우", icon: "calendar-check" },
  { value: "ALL", label: "전 산업군 협력 이력", sub: "산업별 맞춤 전략 보유", icon: "layers" },
];

export const industries = [
  { icon: "shopping-cart", title: "이커머스/쇼핑몰", desc: "ROAS 최적화" },
  { icon: "sparkles", title: "뷰티/코스메틱", desc: "SNS 바이럴 확산" },
  { icon: "utensils", title: "식품/F&B", desc: "체험단 및 리뷰" },
  { icon: "landmark", title: "금융/핀테크", desc: "신뢰도 구축" },
  { icon: "code", title: "IT/SaaS", desc: "B2B 리드 확보" },
  { icon: "graduation-cap", title: "교육/이러닝", desc: "수강생 모집" },
  { icon: "clapperboard", title: "엔터테인먼트", desc: "팬덤 마케팅" },
  { icon: "stethoscope", title: "병원/의료", desc: "지역 기반 홍보" },
];

export const teams = [
  { icon: "instagram", name: "SNS/콘텐츠팀", desc: "인스타그램·유튜브 등 채널별 콘텐츠 기획 및 운영 전담" },
  { icon: "search", name: "검색광고팀", desc: "네이버·구글 키워드 광고(SA) 및 검색엔진 최적화(SEO) 수행" },
  { icon: "messages-square", name: "커뮤니티팀", desc: "타겟 커뮤니티 바이럴 캠페인 및 여론 관리·모니터링" },
  { icon: "pie-chart", name: "데이터분석팀", desc: "캠페인 성과 측정, 데이터 분석 및 마케팅 전략 고도화" },
];

export const operations = [
  { icon: "user-check", title: "전담 매니저 배정", desc: "1:1 파트너 관리 및 성과 리포트 정기 제공" },
  { icon: "target", title: "KPI 설정 및 추적", desc: "캠페인별 명확한 목표 설정 및 데이터 트래킹" },
  { icon: "headphones", title: "실시간 소통 채널", desc: "카카오톡/슬랙 등을 통한 즉각적인 피드백" },
  { icon: "zap", title: "빠른 의사결정", desc: "시장 변화에 따른 유연하고 신속한 전략 수정" },
];

export const ceoProfile = {
  name: "김동인",
  role: "대표이사",
  en: "Chief Executive Officer",
  message: [
    "KCG 코리아컴퍼니그룹은 2017년 출발 이래 ‘성과로 증명한다’는 단 하나의 원칙으로 파트너사와 함께 성장해 왔습니다.",
    "화려한 약속보다 정직한 데이터와 끈질긴 실행을 믿습니다. 고객의 성장을 곧 우리의 성공으로 여기며, 그 약속을 지키는 파트너가 되겠습니다.",
  ],
  focus: ["성과 중심 경영", "장기 파트너십", "통합 마케팅 전략"],
};

export const cmo = {
  name: "장하리",
  role: "총괄 이사",
  en: "Chief Marketing Officer",
  desc: "KCG의 전사 마케팅 전략과 성장을 이끄는 핵심 리더십입니다.",
  expertise: ["브랜드 전략", "디지털 마케팅", "퍼포먼스 마케팅", "고객 경험(CX) 설계", "데이터 기반 마케팅 분석"],
  responsibilities: [
    "전사 마케팅 전략 및 실행 로드맵 수립",
    "브랜드 포지셔닝 및 아이덴티티 강화 전략 기획",
    "디지털 마케팅(퍼포먼스, 콘텐츠, SNS 등) 운영 총괄",
  ],
};

export type Advisor = {
  name: string;
  role: string;
  en: string;
  icon: string;
  current: string[];
  former?: string;
  career?: string[];
  education?: string;
  expertise: string[];
  roleKcg: string;
};

export const advisors: Advisor[] = [
  {
    name: "김민규",
    role: "법률 고문",
    en: "Legal Advisor",
    icon: "scale",
    current: ["법무법인 은율 변호사", "인하대학교 공과대학원 겸임교수", "KCG(케이씨지) 법률 고문 (2025.02 ~)"],
    expertise: ["IT / 블록체인", "금융 규제 대응", "기업 법무"],
    roleKcg: "법률 자문 및 규제 준수(Compliance)",
  },
  {
    name: "류인수",
    role: "고문",
    en: "Business Strategy Advisor",
    icon: "briefcase",
    current: ["TokenInsight 한국사업 고문", "KCG(케이씨지) 고문 (신규 영입)"],
    former: "에프엑스기어(FXGEAR) 글로벌 영업·마케팅 이사",
    education: "서울대학교 졸업",
    expertise: ["IT / XR 산업", "블록체인 / AI 비즈니스", "글로벌 마케팅 전략"],
    roleKcg: "사업 확장 및 마케팅 전략 고도화 담당",
  },
  {
    name: "이상오",
    role: "기술 고문",
    en: "Technical Advisor",
    icon: "cpu",
    current: ["KCG(케이씨지) 기술 고문 (2025.02 ~)"],
    career: ["빗썸 개발팀장 (블록체인/핀테크)", "엔씨소프트 (게임 개발)"],
    education: "고려대학교 정보경영공학과 · 정보보호전공 석사",
    expertise: ["블록체인 개발", "핀테크 / 보안", "게임 개발", "시스템 최적화"],
    roleKcg: "기술 자문 및 시스템 고도화",
  },
  {
    name: "서지호",
    role: "세무 고문",
    en: "Tax Advisor",
    icon: "receipt",
    current: ["가율택스(Gayul Tax) 대표 세무사", "KCG(케이씨지) 세무 고문"],
    expertise: ["기업 세무 컨설팅", "재무 전략 수립", "세무 리스크 관리", "재무 구조 최적화"],
    roleKcg: "재무 안정성 확보 및 리스크 관리",
  },
];

export const awards = [
  { year: "2018", items: ["후오비 글로벌 엘리트"] },
  { year: "2020", items: ["블록체인타임즈 선정 대한민국 블록체인 혁신리더"] },
  { year: "2021", items: ["중앙일보 히트브랜드 대상"] },
  {
    year: "2022",
    items: [
      "월드블록체인컨버전스 운영위원",
      "헤럴드경제·코리아헤럴드 대한민국 미래경영대상 고객만족 서비스 부문 대상",
      "헤럴드경제·코리아헤럴드 대한민국 혁신인물 브랜드 대상 고객만족서비스 부문 대상",
      "스포츠조선 자랑스러운 혁신한국인 파워브랜드 대상 디지털자산 부문 대상",
      "국회 과학기술정보방송통신위원장 표창",
    ],
  },
  { year: "2023", items: ["국회 정무위원장 표창"] },
  { year: "2024", items: ["국회 산업통상자원중소벤처기업위원장 표창"] },
  { year: "2025", items: ["국회 산업통상자원중소벤처기업위원장 표창"] },
  { year: "2026", items: ["국회 재정경제기획위원장 표창"] },
];

export const assemblyAwards = [
  { year: "2022", body: "과학기술정보방송통신위원회" },
  { year: "2023", body: "정무위원회" },
  { year: "2024", body: "산업통상자원중소벤처기업위원회" },
  { year: "2025", body: "산업통상자원중소벤처기업위원회" },
  { year: "2026", body: "재정경제기획위원회" },
];

export const partners = [
  "Jouvence",
  "In&Clean",
  "Hivework",
  "CREDIT",
  "법무법인 은율",
  "가율택스",
  "CABIN CREW",
  "연세미소치과",
  "FOAV",
  "le Bom",
  "BONITA 필라테스",
  "plume",
  "BLOCKCHAIN TODAY",
  "cafe eclipse",
  "유엔미디어",
  "금산 엔젤홈 하우스",
  "더마핏",
  "크레드잇",
];

export const processSteps = [
  { step: "STEP 01", icon: "clipboard-list", title: "니즈 파악", desc: "파트너사 목표 및 현황 분석 미팅" },
  { step: "STEP 02", icon: "lightbulb", title: "전략 제안", desc: "맞춤형 마케팅 플랜 및 견적 제시" },
  { step: "STEP 03", icon: "file-signature", title: "계약 체결", desc: "협력 범위 확정 및 KPI 목표 설정" },
  { step: "STEP 04", icon: "rocket", title: "캠페인 실행", desc: "전담팀 배정 및 즉시 운영 시작" },
];
