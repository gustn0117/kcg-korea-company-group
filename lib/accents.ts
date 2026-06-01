// Monochrome navy system — every accent key resolves to the same steel-blue.
// Kept as a keyed map so existing call sites (accent="brand-2" etc.) still work.
// Literal utility strings remain present so Tailwind v4 can statically detect them:
// text-brand bg-brand bg-brand/10

const keys = ["brand", "brand-2", "blue", "purple", "green", "orange"] as const;
const fill = (v: string) =>
  Object.fromEntries(keys.map((k) => [k, v])) as Record<string, string>;

export const accentText = fill("text-brand");
export const accentBar = fill("bg-brand");
export const accentTint = fill("bg-brand/10 text-brand");
export const accentGlow = fill("shadow-[0_0_34px_-12px_rgba(84,131,200,0.5)]");
