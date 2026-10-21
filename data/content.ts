import type { GradientKey } from "@/lib/gradients";
import type { IconKey } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://buildveloper.com";
const email = "buildveloper@gmail.com";
const emailHref = `mailto:${email}`;

export const site = {
  name: "Christopher John",
  handle: "buildveloper",
  role: "AI Software Engineer",
  location: "Abuja, Nigeria",
  url: siteUrl,
  title: "Christopher John — AI Software Engineer & Automation Builder",
  description:
    "AI Software Engineer building apps, websites, and automations that solve real business problems. Based in Abuja, working with clients globally.",
  keywords: [
    "Christopher John",
    "buildveloper",
    "AI software engineer",
    "AI automation",
    "n8n developer",
    "SaaS developer",
    "Abuja software engineer",
    "Nigeria AI engineer",
  ],
  ogAlt: "buildveloper — Christopher John, AI Software Engineer",
};

export const nav = [
  { label: "What I do", href: "#services" },
  { label: "Projects", href: "#work" },
  { label: "Websites", href: "#websites" },
  { label: "How I work", href: "#process" },
  { label: "About", href: "#experience" },
] as const;

export const hero = {
  badge: "Taking new projects",
  eyebrow: "AI & Automation Engineer · Abuja, Nigeria → worldwide",
  headlineLead: "I build",
  words: ["AI apps", "web apps", "automations", "systems that work"],
  headlineTail: "that solve real business problems.",
  accessibleHeadline:
    "I build AI apps, web apps, and automations that solve real business problems.",
  subcopy:
    "I help businesses replace repetitive work with software and automation that people actually use.",
  current: {
    prefix: "Currently helping founder-led businesses at",
    label: "theForge.ng",
    href: "https://theforge.ng",
  },
  roleTags: ["AI apps", "Automation", "Websites", "Products"],
  ctas: {
    primary: { label: "Let's build something", href: "#contact" },
    secondary: { label: "See my work", href: "#work" },
  },
  portrait: "/portrait.jpg",
  portraitAlt:
    "Portrait of Christopher John, AI software engineer and automation builder based in Abuja",
  floatingChips: [
    { label: "AI assistants", icon: "bot" as IconKey },
    { label: "Automations", icon: "workflow" as IconKey },
    { label: "Websites", icon: "code" as IconKey },
  ],
};

export const stats = [
  {
    value: 15,
    suffix: "+",
    unit: "hrs/week",
    label: "Hours of admin removed",
    description: "For law firms and a design school CEO.",
    gradient: "violet" as GradientKey,
    icon: "clock" as IconKey,
  },
  {
    value: 10,
    suffix: "+",
    unit: "products & sites",
    label: "Live and in use",
    description: "Products, client sites, and internal tools.",
    gradient: "pink" as GradientKey,
    icon: "layers" as IconKey,
  },
  {
    value: 20,
    suffix: "+",
    unit: "months",
    label: "Months of building",
    description: "Apps, websites, and automation since Jan 2025.",
    gradient: "cyan" as GradientKey,
    icon: "rocket" as IconKey,
  },
];

export type Service = {
  id: string;
  index: string;
  title: string;
  description: string;
  bullets: string[];
  gradient: GradientKey;
  icon: IconKey;
  span: string;
  visual: "workflow" | "browser" | "revenue";
  href?: string;
  badge?: string;
};

export const services: Service[] = [
  {
    id: "automation",
    index: "01",
    title: "AI & Business Automation",
    description:
      "I connect the tools you already use and add AI where it saves time — so repetitive admin happens without someone doing it by hand.",
    bullets: [
      "Automated workflows",
      "AI assistants",
      "CRM & follow-ups",
      "Data entry & processing",
      "Notifications",
      "Internal tools",
    ],
    gradient: "cool",
    icon: "workflow",
    span: "lg:col-span-7",
    visual: "workflow",
  },
  {
    id: "product",
    index: "02",
    title: "Websites, Apps & Products",
    description:
      "Websites, dashboards, client portals, mobile apps, and first versions of a product — designed and built end to end.",
    bullets: [
      "Websites & landing pages",
      "Web apps & dashboards",
      "Mobile apps",
      "Client portals",
      "Online products",
      "Connecting your tools",
    ],
    gradient: "warm",
    icon: "code",
    span: "lg:col-span-5",
    visual: "browser",
  },
  {
    id: "revenue",
    index: "03",
    title: "Revenue Systems",
    description:
      "Your website, contact list, follow-ups, and reporting working as one system, so fewer leads fall through the cracks.",
    bullets: [
      "Customer pipeline",
      "Automated follow-up",
      "Website & landing pages",
      "Simple reporting",
    ],
    gradient: "citrus",
    icon: "trending",
    span: "lg:col-span-12",
    visual: "revenue",
    href: "https://theforge.ng",
    badge: "via theForge.ng",
  },
];

export type Product = {
  id: string;
  name: string;
  tag: string;
  description: string;
  stack: string[];
  gradient: GradientKey;
  preview: string;
  url: string;
  featured?: boolean;
  badge?: string;
};

export const products: Product[] = [
  {
    id: "lumenforge",
    name: "LumenForge",
    tag: "All-in-one workspace",
    description:
      "A workspace for freelancers and small studios: projects, tasks, client updates, and invoices in one place, with AI that helps write the updates.",
    stack: ["Next.js", "TypeScript", "Groq", "Supabase/Turso"],
    gradient: "violet",
    preview: "/previews/lumenforge.jpg",
    url: "https://lumenforge-six.vercel.app/",
    featured: true,
  },
  {
    id: "vibeops",
    name: "VibeOps",
    tag: "Automation made simple",
    description:
      "Describe a messy process in plain English. It turns your words into a clear, step-by-step automated workflow.",
    stack: ["Next.js", "Command Code", "Turso"],
    gradient: "warm",
    preview: "/previews/vibeops.jpg",
    url: "https://vibeops-two.vercel.app/",
  },
  {
    id: "vibe-content-studio",
    name: "Vibe Content Studio",
    tag: "Content creation",
    description:
      "Turn a simple idea or “vibe” into ready-to-post content for LinkedIn, X, and blogs.",
    stack: ["Next.js", "Claude", "Supabase"],
    gradient: "pink",
    preview: "/previews/vibe-content-studio.jpg",
    url: "https://vibe-content-studio.vercel.app/",
  },
  {
    id: "credmail",
    name: "CredMail",
    tag: "Email trust",
    description:
      "Find out whether your email is set up to land in inboxes, not spam — with a clear report and fixes written in plain English.",
    stack: ["DNS", "Deliverability", "AI fixes"],
    gradient: "cool",
    preview: "/previews/credmail.jpg",
    url: "https://credmail.com",
    badge: "Co-founder & CTO",
  },
  {
    id: "ashevillere",
    name: "AshevilleRE",
    tag: "Property research",
    description:
      "Look up any Buncombe County address for flood risk, short-term-rental rules, and storm recovery information — all from public records you can verify.",
    stack: ["Public records", "Geospatial", "Clear answers"],
    gradient: "citrus",
    preview: "/previews/ashevillere.jpg",
    url: "https://ashevillere.com",
  },
];

export const showcaseFilters = [
  "All",
  "Junk Removal",
  "Electrical",
  "Outdoors",
  "Pressure Washing",
  "Blockchain",
  "Real Estate",
] as const;

export type ShowcaseCategory = Exclude<(typeof showcaseFilters)[number], "All">;

export type Showcase = {
  id: string;
  name: string;
  category: ShowcaseCategory;
  description: string;
  url: string;
  preview: string;
  accent: GradientKey;
};

export const showcases: Showcase[] = [
  {
    id: "cole-family",
    name: "Cole Family's Junk Removal",
    category: "Junk Removal",
    description:
      "A family-run junk removal site for Raeford, NC with upfront pricing and a photo-led quote flow.",
    url: "https://cole-family-junk-removal.vercel.app/",
    preview: "/previews/cole-family.jpg",
    accent: "orange",
  },
  {
    id: "electricore",
    name: "ElectriCore LLC",
    category: "Electrical",
    description:
      "A licensed electrician site for Dunn, NC built around service clarity, completed-work galleries, and quote requests.",
    url: "https://electricore.vercel.app/",
    preview: "/previews/electricore.jpg",
    accent: "cyan",
  },
  {
    id: "zp-outdoors",
    name: "ZP Outdoor Solutions",
    category: "Outdoors",
    description:
      "A warm, home-first site for a yard and outdoor solutions company — “your yard, built to feel like home.”",
    url: "https://zpoutdoors.vercel.app/",
    preview: "/previews/zp-outdoors.jpg",
    accent: "lime",
  },
  {
    id: "down-south-pw",
    name: "Down South Pressure Washing",
    category: "Pressure Washing",
    description:
      "A Wade, NC pressure washing site led by real before-and-after photography and photo-based estimates.",
    url: "https://down-south-pw.vercel.app/",
    preview: "/previews/down-south-pw.jpg",
    accent: "cyan",
  },
  {
    id: "nt-junk-haulers",
    name: "N&T Junk Haulers",
    category: "Junk Removal",
    description:
      "A mobile-first hauling site for a family crew across four NC counties, built around text-a-photo quotes.",
    url: "https://ntjunkhaulers.vercel.app/",
    preview: "/previews/nt-junk-haulers.jpg",
    accent: "pink",
  },
  {
    id: "rjr-junk",
    name: "RJR Junk Solutions",
    category: "Junk Removal",
    description:
      "A Hendersonville junk removal site with instant photo quotes, cleanout proof, and same-day service messaging.",
    url: "https://rjrjunk.vercel.app/",
    preview: "/previews/rjr-junk.jpg",
    accent: "orange",
  },
  {
    id: "verilaunch",
    name: "VeriLaunch",
    category: "Blockchain",
    description:
      "A tool that checks a crypto token on BOT Chain and shows exactly where each fact came from — no score, no guesswork.",
    url: "https://stealth-launch-phi.vercel.app/",
    preview: "/previews/verilaunch.jpg",
    accent: "violet",
  },
  {
    id: "luxastay",
    name: "The Luxastay Group",
    category: "Real Estate",
    description:
      "A premium group site spanning real estate, fintech, digital assets, and technology under one vision.",
    url: "https://luxastay-group.vercel.app/",
    preview: "/previews/luxastay.jpg",
    accent: "lime",
  },
];

export type Impact = {
  title: string;
  description: string;
  icon: IconKey;
  tags?: string[];
  highlight?: string;
  span: string;
};

export const impact: Impact[] = [
  {
    title: "Client intake that files itself",
    description:
      "New enquiries are checked, organized, and added to the case system automatically — with a confirmation email and a safety net.",
    icon: "scale",
    tags: ["n8n", "Clio", "REST API"],
    highlight: "15+ hrs/week saved",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Website leads, captured instantly",
    description:
      "A visitor fills in a form, and the right person gets a qualified lead right away instead of it sitting in an inbox.",
    icon: "zap",
    tags: ["n8n", "Webhooks", "CRM"],
    span: "lg:col-span-5",
  },
  {
    title: "Evidence intake with a paper trail",
    description:
      "A secure way to receive files and prove nothing was changed after it arrived.",
    icon: "shield",
    tags: ["Security", "File handling", "Audit trail"],
    span: "lg:col-span-5",
  },
  {
    title: "Leads sorted automatically",
    description:
      "New leads are scored and routed to the right person, so sales teams spend time on the best fits.",
    icon: "target",
    tags: ["Scoring", "Routing"],
    span: "lg:col-span-4",
  },
  {
    title: "Content that turns interest into leads",
    description:
      "Web pages and follow-ups that explain the offer clearly and guide people to the next step.",
    icon: "pen",
    tags: ["Content", "Conversion"],
    span: "lg:col-span-4",
  },
  {
    title: "Less admin for clinical teams",
    description:
      "Automation that takes repetitive paperwork off clinicians and staff so they can focus on patients.",
    icon: "heart",
    tags: ["Healthcare", "Workflow"],
    span: "lg:col-span-4",
  },
];

export const processSteps = [
  {
    number: "01",
    title: "We talk about the problem",
    description:
      "You explain what's slow or messy in plain English. I ask questions and map what actually needs fixing.",
    icon: "search" as IconKey,
  },
  {
    number: "02",
    title: "I build the first version",
    description:
      "I build the smallest useful version, then make it reliable enough to use every day.",
    icon: "wrench" as IconKey,
  },
  {
    number: "03",
    title: "We test it with real work",
    description:
      "We run it on real scenarios and fix what breaks before it becomes a daily tool.",
    icon: "gauge" as IconKey,
  },
  {
    number: "04",
    title: "We improve what matters",
    description:
      "After it's live, I refine it around how your team actually uses it.",
    icon: "trending" as IconKey,
  },
];

export const processClosing =
  "The goal isn't to add AI for its own sake. It's to build software that makes a task easier, a process more efficient, or an idea possible.";

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  description: string;
  tags?: string[];
  current?: boolean;
};

export const experience: ExperienceItem[] = [
  {
    company: "theForge.ng",
    role: "AI Automation Engineer & Operations",
    period: "May 2026 – Present",
    description:
      "Building the websites, follow-up, and automation systems that help founder-led service businesses grow.",
    tags: ["Automation", "RevOps", "AI"],
    current: true,
  },
  {
    company: "Buildveloper Agency",
    role: "AI-Native Fullstack & System Engineer",
    period: "Jan 2025 – Present",
    description:
      "Designing and shipping apps, websites, and automation for client projects.",
    tags: ["Fullstack", "AI", "SaaS"],
    current: true,
  },
  {
    company: "Ochaxis Design School",
    role: "Administrative Officer / Executive Assistant",
    period: "Jun 2024 – May 2025",
    description:
      "Digitized bookkeeping, freed up 15+ hours a week for the CEO, ran social media and Facebook ads, and managed the WordPress site.",
    tags: ["Operations", "WordPress", "Meta Ads"],
  },
  {
    company: "Bluepage Softwares LTD",
    role: "WordPress Engineer Intern",
    period: "Feb 2025",
    description: "WordPress site build and maintenance.",
    tags: ["WordPress"],
  },
  {
    company: "Pinksale",
    role: "Community Moderator",
    period: "Jul – Nov 2023",
    description: "Community moderation for the Pinksale community.",
    tags: ["Community"],
  },
];

export type Tool = {
  name: string;
  brand?: string;
  short: string;
  color?: string;
};

export const tools: Tool[] = [
  { name: "n8n", brand: "n8n", short: "n8n", color: "#EA4B71" },
  { name: "OpenAI APIs", brand: "openai", short: "AI", color: "#10A37F" },
  { name: "Anthropic APIs", brand: "anthropic", short: "A", color: "#D4A27F" },
  { name: "Claude", brand: "claude", short: "C", color: "#D97757" },
  { name: "Cursor", brand: "cursor", short: "C" },
  { name: "Command Code", short: "CC", color: "#8B5CF6" },
  { name: "Git", brand: "git", short: "Git", color: "#F05032" },
  { name: "GitHub", brand: "github", short: "GH" },
  { name: "REST APIs", short: "API", color: "#2DE2E6" },
  { name: "Webhooks", short: "WH", color: "#FF8A3D" },
  { name: "GoHighLevel", short: "GHL", color: "#C8F560" },
  { name: "Zapier", brand: "zapier", short: "Z", color: "#FF4F00" },
  { name: "Google Workspace", brand: "google", short: "G", color: "#4285F4" },
  { name: "Microsoft 365", brand: "microsoft", short: "M", color: "#00A4EF" },
  { name: "Next.js", brand: "nextdotjs", short: "N" },
  { name: "Vercel", brand: "vercel", short: "V" },
  { name: "WordPress", brand: "wordpress", short: "W", color: "#21759B" },
];

export const certifications = [
  {
    name: "ALX",
    detail: "Certification",
    icon: "graduation" as IconKey,
  },
  {
    name: "Facebook and Instagram Ads Mastery",
    detail: "Certification",
    icon: "target" as IconKey,
  },
];

export const contact = {
  email,
  emailHref,
  phone: "+234 816 699 9918",
  phoneHref: "tel:+2348166999918",
  whatsapp:
    "https://wa.me/2348166999918?text=Hi%20Christopher%2C%20I%27d%20like%20to%20talk%20about%20a%20project.",
  linkedin: "https://www.linkedin.com/in/buildveloper",
  company: "https://theforge.ng",
  calendarUrl: "https://cal.com/buildveloper",
  formEndpoint: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || "",
  heading: "Let's build something useful.",
  description:
    "Tell me what's slow, messy, or stuck. I'll tell you what I'd build — and whether I'm the right person to build it.",
  formNote: "No newsletters. No automated sequences. Just a reply.",
  projectTypes: [
    "AI automation",
    "Web app or online product",
    "Website",
    "Revenue system",
    "Something else",
  ],
  linkPills: [
    {
      label: "Hire me",
      sublabel: "Tell me what you're building",
      href: `mailto:${email}?subject=Let%27s%20build%20something`,
      icon: "sparkles" as IconKey,
      external: false,
    },
    {
      label: "View my projects",
      sublabel: "Five live projects",
      href: "#work",
      icon: "layers" as IconKey,
      external: false,
    },
    {
      label: "Book a call",
      sublabel: "30 minutes on Cal.com",
      href: "https://cal.com/buildveloper",
      icon: "calendar" as IconKey,
      external: true,
    },
    {
      label: "Email me",
      sublabel: email,
      href: emailHref,
      icon: "mail" as IconKey,
      external: false,
    },
  ],
};

export const socials = [
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin" as IconKey },
  { label: "Cal.com", href: contact.calendarUrl, icon: "calendar" as IconKey },
  { label: "Email", href: contact.emailHref, icon: "mail" as IconKey },
  { label: "theForge.ng", href: contact.company, icon: "globe" as IconKey },
];

export const footerTagline =
  "AI software, automation, and products that solve real business problems.";
