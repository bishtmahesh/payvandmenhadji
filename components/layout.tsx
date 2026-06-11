import type { ReactNode } from "react";

export function Section({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`px-5 py-20 sm:px-8 lg:py-28 ${className}`}>{children}</section>;
}

export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`mx-auto max-w-7xl ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-[#b88742]">
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  copy,
  children,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  children?: ReactNode;
}) {
  return (
    <Section className="pb-14 pt-16 lg:pb-20 lg:pt-24">
      <Container className="reveal">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
        <h1 className="font-display max-w-5xl text-5xl leading-[1.02] tracking-normal text-[#0b1422] sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        {copy ? <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3e4142]">{copy}</p> : null}
        {children}
      </Container>
    </Section>
  );
}
