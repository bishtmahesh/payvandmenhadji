import type { ReactNode } from "react";

export function CredentialsRow({ items }: { items: string[] }) {
  return (
    <div className="border-y border-[#ded2c1]">
      <div className="mx-auto grid max-w-7xl gap-px px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item} className="py-6 text-sm text-[#3e4142] lg:border-l lg:border-[#ded2c1] lg:px-7 first:lg:border-l-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export function EditorialList({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="divide-y divide-[#ded2c1] border-y border-[#ded2c1]">
      {items.map((item) => (
        <div key={item.title} className="grid gap-4 py-7 md:grid-cols-[0.8fr_1.2fr]">
          <h3 className="font-display text-2xl text-[#111827]">{item.title}</h3>
          <p className="max-w-2xl leading-7 text-[#3e4142]">{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function ProofPoints({ items }: { items: { title: string; text: string }[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((item) => (
        <article key={item.title} className="border-t border-[#b88742]/45 pt-6">
          <h3 className="font-display text-3xl text-[#0b1422]">{item.title}</h3>
          <p className="mt-4 leading-7 text-[#3e4142]">{item.text}</p>
        </article>
      ))}
    </div>
  );
}

export function ProcessSteps({ items }: { items: string[] }) {
  return (
    <ol className="grid gap-5 md:grid-cols-5">
      {items.map((item, index) => (
        <li key={item} className="group border border-[#dacbb8] bg-[#fbf7ef]/72 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#b88742]/55 hover:bg-[#fbf7ef]">
          <span className="font-display text-3xl text-[#b88742]">0{index + 1}</span>
          <p className="mt-8 text-base leading-7 text-[#34383a]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

export function DarkCta({
  title,
  copy,
  children,
}: {
  title: string;
  copy?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#061426] px-5 py-20 text-[#f8f2e8] sm:px-8 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(215,179,111,0.14),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 h-px w-full bg-gradient-to-r from-[#d7b36f]/70 via-[#d7b36f]/12 to-transparent" />
        <h2 className="font-display max-w-3xl text-5xl leading-tight sm:text-6xl">{title}</h2>
        {copy ? <p className="mt-6 max-w-xl text-lg leading-8 text-[#eee2d1]/82">{copy}</p> : null}
        <div className="mt-9 flex flex-wrap gap-3">{children}</div>
      </div>
    </section>
  );
}
