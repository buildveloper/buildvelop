import {
  ArrowUpRight,
  Award,
  Bot,
  Briefcase,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Code2,
  Copy,
  Database,
  ExternalLink,
  FileCheck2,
  Gauge,
  GitBranch,
  Globe2,
  GraduationCap,
  HeartPulse,
  Layers,
  LayoutDashboard,
  Loader2,
  Mail,
  MapPin,
  Menu,
  MessagesSquare,
  Moon,
  PenLine,
  Phone,
  Quote,
  Rocket,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Sun,
  Target,
  TrendingUp,
  Wrench,
  Workflow,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import type { IconKey } from "@/lib/types";
import { cn } from "@/lib/cn";

const icons: Partial<Record<IconKey, LucideIcon>> = {
  workflow: Workflow,
  code: Code2,
  trending: TrendingUp,
  sparkles: Sparkles,
  target: Target,
  shield: ShieldCheck,
  gauge: Gauge,
  pen: PenLine,
  heart: HeartPulse,
  scale: Scale,
  zap: Zap,
  file: FileCheck2,
  dashboard: LayoutDashboard,
  calendar: CalendarDays,
  mail: Mail,
  phone: Phone,
  globe: Globe2,
  arrow: ArrowUpRight,
  award: Award,
  wrench: Wrench,
  search: Search,
  clock: Clock3,
  pin: MapPin,
  chat: MessagesSquare,
  bot: Bot,
  database: Database,
  webhook: Zap,
  git: GitBranch,
  layers: Layers,
  rocket: Rocket,
  check: Check,
  quote: Quote,
  sun: Sun,
  moon: Moon,
  menu: Menu,
  close: X,
  "chevron-down": ChevronDown,
  external: ExternalLink,
  copy: Copy,
  send: Send,
  loader: Loader2,
  briefcase: Briefcase,
  building: Building2,
  graduation: GraduationCap,
};

function LinkedInMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
    </svg>
  );
}

export function Icon({
  name,
  className,
  strokeWidth = 1.8,
}: {
  name?: IconKey | string;
  className?: string;
  strokeWidth?: number;
}) {
  if (name === "linkedin") {
    return <LinkedInMark className={className} />;
  }
  const Component = (name ? icons[name as IconKey] : undefined) ?? Sparkles;
  return (
    <Component
      aria-hidden="true"
      className={cn("h-5 w-5", className)}
      strokeWidth={strokeWidth}
    />
  );
}
