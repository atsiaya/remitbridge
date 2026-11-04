import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "sun";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-line bg-paper text-ink hover:bg-mist",
  sun: "bg-sun text-ink hover:bg-sun/90",
};

const sizes: Record<Size, string> = {
  md: "h-10 px-5 text-[15px]",
  lg: "h-12 px-7 text-base",
};

export function buttonClasses(
  variant: Variant = "primary",
  size: Size = "md",
  className = "",
) {
  return `${base} ${variants[variant]} ${sizes[size]} ${className}`.trim();
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {children}
    </Link>
  );
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-6xl px-5 sm:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
}

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
}: {
  id?: string;
  tone?: "paper" | "mist";
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`py-20 sm:py-28 ${tone === "mist" ? "bg-mist" : ""} ${className}`.trim()}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  title,
  body,
  align = "left",
}: {
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto text-center" : ""}>
      <h2
        className={`font-display text-3xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl ${
          centered ? "mx-auto max-w-3xl" : "max-w-2xl"
        }`}
      >
        {title}
      </h2>
      {body ? (
        <p
          className={`mt-4 text-lg text-muted text-pretty ${
            centered ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}
