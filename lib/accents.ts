// Literal class maps so Tailwind v4 can statically detect every utility.
export const accentText: Record<string, string> = {
  brand: "text-brand",
  "brand-2": "text-brand-2",
  blue: "text-blue",
  purple: "text-purple",
  green: "text-green",
  orange: "text-orange",
};

export const accentBar: Record<string, string> = {
  brand: "bg-brand",
  "brand-2": "bg-brand-2",
  blue: "bg-blue",
  purple: "bg-purple",
  green: "bg-green",
  orange: "bg-orange",
};

export const accentTint: Record<string, string> = {
  brand: "bg-brand/10 text-brand",
  "brand-2": "bg-brand-2/10 text-brand-2",
  blue: "bg-blue/10 text-blue",
  purple: "bg-purple/10 text-purple",
  green: "bg-green/10 text-green",
  orange: "bg-orange/10 text-orange",
};

export const accentGlow: Record<string, string> = {
  brand: "shadow-[0_0_34px_-10px_rgba(31,211,232,0.55)]",
  "brand-2": "shadow-[0_0_34px_-10px_rgba(45,212,191,0.55)]",
  blue: "shadow-[0_0_34px_-10px_rgba(59,130,246,0.55)]",
  purple: "shadow-[0_0_34px_-10px_rgba(124,111,240,0.55)]",
  green: "shadow-[0_0_34px_-10px_rgba(52,211,153,0.55)]",
  orange: "shadow-[0_0_34px_-10px_rgba(249,115,22,0.55)]",
};
