import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ContentPage } from "@/data/site-content";
import { Reveal } from "@/components/reveal";

export function IndexGrid({ base, items }: { base: string; items: ContentPage[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <Reveal key={item.slug}>
          <Link
            href={`${base}/${item.slug}`}
            className="focus-ring luxury-shadow group flex h-full flex-col border border-[#dacbb8] bg-[#fbf7ef]/78 p-7 transition duration-500 hover:-translate-y-1 hover:border-[#b88742]/55 hover:bg-[#fbf7ef]"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <h3 className="font-display text-3xl leading-tight text-[#0b1422]">{item.navLabel}</h3>
              <span className="grid size-10 shrink-0 place-items-center rounded-full border border-[#b88742]/45 text-[#b88742] transition duration-300 group-hover:bg-[#b88742] group-hover:text-[#fbf7ef]">
                <ArrowUpRight className="size-5" strokeWidth={1.5} />
              </span>
            </div>
            <p className="mt-auto leading-7 text-[#34383a]">{item.summary}</p>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
