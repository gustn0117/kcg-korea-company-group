import {
  CircleCheck,
  Users,
  TrendingUp,
  LineChart,
  Database,
  Search,
  Target,
  HeartHandshake,
  Layers,
  Zap,
  CalendarCheck,
  ShoppingCart,
  Sparkles,
  Utensils,
  Landmark,
  Code,
  GraduationCap,
  Clapperboard,
  Stethoscope,
  MessagesSquare,
  PieChart,
  UserCheck,
  Headphones,
  Briefcase,
  Cpu,
  Receipt,
  Scale,
  ClipboardList,
  Lightbulb,
  FileSignature,
  Rocket,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  ArrowUpRight,
  ArrowDownRight,
  Award,
  Trophy,
  Quote,
  Building2,
  Check,
  Star,
  ExternalLink,
  Calendar,
  type LucideProps,
} from "lucide-react";
import type { ComponentType } from "react";

type IconType = ComponentType<LucideProps>;

/* lucide-react removed brand icons — provide them as custom SVGs */
function Instagram({ className }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.6" cy="6.4" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Facebook({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.9h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.9h-2.34V22c4.78-.79 8.43-4.94 8.43-9.94Z" />
    </svg>
  );
}
function Youtube({ className }: LucideProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M23.5 7.2a3 3 0 0 0-2.11-2.13C19.5 4.55 12 4.55 12 4.55s-7.5 0-9.39.52A3 3 0 0 0 .5 7.2 31.3 31.3 0 0 0 0 12a31.3 31.3 0 0 0 .5 4.8 3 3 0 0 0 2.11 2.13c1.89.52 9.39.52 9.39.52s7.5 0 9.39-.52a3 3 0 0 0 2.11-2.13A31.3 31.3 0 0 0 24 12a31.3 31.3 0 0 0-.5-4.8ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
    </svg>
  );
}

const map: Record<string, IconType> = {
  "circle-check": CircleCheck,
  users: Users,
  "trending-up": TrendingUp,
  "line-chart": LineChart,
  database: Database,
  instagram: Instagram,
  search: Search,
  target: Target,
  "heart-handshake": HeartHandshake,
  layers: Layers,
  zap: Zap,
  "calendar-check": CalendarCheck,
  "shopping-cart": ShoppingCart,
  sparkles: Sparkles,
  utensils: Utensils,
  landmark: Landmark,
  code: Code,
  "graduation-cap": GraduationCap,
  clapperboard: Clapperboard,
  stethoscope: Stethoscope,
  "messages-square": MessagesSquare,
  "pie-chart": PieChart,
  "user-check": UserCheck,
  headphones: Headphones,
  briefcase: Briefcase,
  cpu: Cpu,
  receipt: Receipt,
  scale: Scale,
  "clipboard-list": ClipboardList,
  lightbulb: Lightbulb,
  "file-signature": FileSignature,
  rocket: Rocket,
  mail: Mail,
  phone: Phone,
  "map-pin": MapPin,
  "arrow-up": ArrowUp,
  menu: Menu,
  x: X,
  "chevron-right": ChevronRight,
  "arrow-right": ArrowRight,
  "arrow-up-right": ArrowUpRight,
  "arrow-down-right": ArrowDownRight,
  award: Award,
  trophy: Trophy,
  quote: Quote,
  "building-2": Building2,
  facebook: Facebook,
  youtube: Youtube,
  check: Check,
  star: Star,
  "external-link": ExternalLink,
  calendar: Calendar,
};

export function Icon({
  name,
  className,
  strokeWidth,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Cmp = map[name] ?? Sparkles;
  return (
    <Cmp className={className} strokeWidth={strokeWidth ?? 1.5} aria-hidden />
  );
}
