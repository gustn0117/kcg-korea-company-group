import { Reveal } from "./Reveal";

type Props = {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  desc?: string;
  dark?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  desc,
  dark = false,
  align = "left",
}: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "text-center" : ""}>
      {/* mono kicker */}
      <div
        className={`flex items-center gap-2.5 ${centered ? "justify-center" : ""}`}
      >
        <span className="h-2.5 w-2.5 bg-brand" />
        {index && (
          <span
            className={`font-mono text-xs font-medium ${
              dark ? "text-brand-soft" : "text-brand"
            }`}
          >
            {index}
          </span>
        )}
        <span className={dark ? "text-white/20" : "text-ink/20"}>/</span>
        <span
          className={`font-mono text-[11px] font-medium uppercase tracking-[0.22em] ${
            dark ? "text-white/55" : "text-ink-soft"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <div
        className={`relative mt-4 flex flex-col gap-3 md:flex-row md:items-end ${
          centered ? "justify-center" : "md:justify-between"
        }`}
      >
        <h2
          className={`text-[1.75rem] font-extrabold leading-[1.08] tracking-tight sm:text-[2.6rem] ${
            dark ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
        {desc && (
          <p
            className={`max-w-md text-sm leading-relaxed md:text-right ${
              dark ? "text-white/55" : "text-ink-soft"
            }`}
          >
            {desc}
          </p>
        )}
      </div>

      {/* gradient divider with leading accent segment */}
      <div
        className={`relative mt-6 h-px w-full ${
          dark
            ? "bg-linear-to-r from-white/15 to-transparent"
            : "bg-linear-to-r from-ink/15 to-transparent"
        }`}
      >
        <span className="absolute left-0 top-0 h-px w-16 bg-brand" />
      </div>
    </Reveal>
  );
}
