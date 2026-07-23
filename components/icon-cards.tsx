import type { LucideIcon } from "lucide-react";

export function IconCards({
  items,
  dark = false,
}: {
  items: { title: string; text: string; icon: LucideIcon }[];
  dark?: boolean;
}) {
  return (
    <div className="grid gap-5 md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article
            key={item.title}
            className={`group border p-7 transition duration-500 hover:-translate-y-1 ${
              dark
                ? "border-[#f8f2e8]/12 bg-[#0b2138]/55 text-[#f8f2e8] hover:border-[#d7b36f]/45"
                : "border-[#dacbb8] bg-[#fbf7ef]/78 text-[#0b1422] hover:border-[#b88742]/55 hover:bg-[#fbf7ef]"
            }`}
          >
            <div className={`mb-8 grid size-12 place-items-center rounded-full border transition duration-500 ${
              dark ? "border-[#d7b36f]/45 text-[#d7b36f] group-hover:bg-[#d7b36f] group-hover:text-[#061426]" : "border-[#b88742]/45 text-[#b88742] group-hover:bg-[#b88742] group-hover:text-[#fbf7ef]"
            }`}>
              <Icon className="size-5" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-3xl leading-tight">{item.title}</h3>
            <p className={`mt-4 leading-7 ${dark ? "text-[#eee2d1]/82" : "text-[#34383a]"}`}>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}
