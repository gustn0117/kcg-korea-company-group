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
      <div
        className={`flex items-center gap-3 ${centered ? "justify-center" : ""}`}
      >
        {index && (
          <span className="text-sm font-extrabold text-brand">{index}</span>
        )}
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.25em] ${
            dark ? "text-white/50" : "text-ink-soft"
          }`}
        >
          {eyebrow}
        </span>
      </div>

      <div
        className={`mt-3 flex flex-col gap-3 md:flex-row md:items-end ${
          centered ? "justify-center" : "md:justify-between"
        }`}
      >
        <h2
          className={`text-[1.7rem] font-extrabold leading-tight tracking-tight sm:text-4xl ${
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

      <div
        className={`mt-6 h-px w-full ${dark ? "bg-white/10" : "bg-ink/10"}`}
      />
    </Reveal>
  );
}
