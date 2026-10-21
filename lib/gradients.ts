export type GradientKey =
  | "violet"
  | "pink"
  | "orange"
  | "cyan"
  | "lime"
  | "signature"
  | "cool"
  | "warm"
  | "citrus";

export const gradientCss: Record<GradientKey, string> = {
  violet: "linear-gradient(135deg, var(--grad-violet), var(--grad-pink))",
  pink: "linear-gradient(135deg, var(--grad-pink), var(--grad-orange))",
  orange: "linear-gradient(135deg, var(--grad-orange), var(--grad-pink))",
  cyan: "linear-gradient(135deg, var(--grad-cyan), var(--grad-violet))",
  lime: "linear-gradient(135deg, var(--grad-lime), var(--grad-cyan))",
  signature:
    "linear-gradient(115deg, var(--grad-violet), var(--grad-pink) 46%, var(--grad-orange))",
  cool: "linear-gradient(135deg, var(--grad-cyan), var(--grad-violet), var(--grad-pink))",
  warm: "linear-gradient(135deg, var(--grad-pink), var(--grad-orange))",
  citrus: "linear-gradient(135deg, var(--grad-lime), var(--grad-cyan))",
};

export const gradientGlow: Record<GradientKey, string> = {
  violet: "rgba(139, 92, 246, 0.32)",
  pink: "rgba(255, 77, 157, 0.3)",
  orange: "rgba(255, 138, 61, 0.3)",
  cyan: "rgba(45, 226, 230, 0.26)",
  lime: "rgba(200, 245, 96, 0.24)",
  signature: "rgba(255, 77, 157, 0.3)",
  cool: "rgba(45, 226, 230, 0.26)",
  warm: "rgba(255, 138, 61, 0.28)",
  citrus: "rgba(200, 245, 96, 0.22)",
};

export const textGradientClass: Record<GradientKey, string> = {
  violet: "text-gradient text-gradient-violet",
  pink: "text-gradient text-gradient-pink",
  orange: "text-gradient text-gradient-orange",
  cyan: "text-gradient text-gradient-cyan",
  lime: "text-gradient text-gradient-lime",
  signature: "text-gradient text-gradient-signature",
  cool: "text-gradient text-gradient-cool",
  warm: "text-gradient text-gradient-warm",
  citrus: "text-gradient text-gradient-citrus",
};
