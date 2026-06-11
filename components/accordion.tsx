"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export type AccordionItem = {
  title: string;
  text: string;
  meta?: string;
};

export function LuxuryAccordion({ items }: { items: AccordionItem[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="overflow-hidden border-y border-[#dacbb8]">
      {items.map((item, index) => {
        const active = open === index;
        return (
          <article key={item.title} className="border-b border-[#dacbb8] last:border-b-0">
            <button
              type="button"
              aria-expanded={active}
              onClick={() => setOpen(active ? -1 : index)}
              className="focus-ring group flex w-full items-center justify-between gap-6 py-7 text-left"
            >
              <span className="grid gap-2">
                {item.meta ? <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b88742]">{item.meta}</span> : null}
                <span className="font-display text-3xl leading-tight text-[#0b1422] sm:text-4xl">{item.title}</span>
              </span>
              <span className="grid size-11 shrink-0 place-items-center rounded-full border border-[#b88742]/45 text-[#b88742] transition duration-300 group-hover:bg-[#b88742] group-hover:text-[#061426]">
                <ChevronDown className={`size-5 transition duration-300 ${active ? "rotate-180" : ""}`} strokeWidth={1.5} />
              </span>
            </button>
            <div className={`grid transition-all duration-500 ease-out ${active ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className="max-w-3xl pb-8 text-lg leading-8 text-[#34383a]">{item.text}</p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
