import Link from "next/link";
import { Wordmark } from "@/components/brand";
import { conditionsNav, treatmentsNav } from "@/data/site-content";

// href present = working link; no href = display-only (delinked).
const exploreItems = [
  { label: "About", href: "/about" },
  { label: "For Dentists", href: "/for-dentists" },
  { label: "Contact", href: "/contact" },
  { label: "Fees" },
];

const legalItems = [
  { label: "Privacy Policy" },
  { label: "Complaints Procedure" },
  { label: "Cookie Policy" },
  { label: "Accessibility Statement" },
];

// Renders a working link when href is present, otherwise display-only text.
function MixedColumn({ title, items }: { title: string; items: { label: string; href?: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7b36f]">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-[#eee2d1]/78">
        {items.map((item) =>
          item.href ? (
            <Link key={item.label} href={item.href} className="focus-ring hover:text-[#f8f2e8]">
              {item.label}
            </Link>
          ) : (
            <span key={item.label}>{item.label}</span>
          ),
        )}
      </div>
    </div>
  );
}

// Display-only column: items are listed but do not link anywhere.
function TextColumn({ title, items }: { title: string; items: { label: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-[#d7b36f]">{title}</h2>
      <div className="mt-5 grid gap-3 text-sm text-[#eee2d1]/78">
        {items.map((item) => (
          <span key={item.label}>{item.label}</span>
        ))}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-[#d7b36f]/20 bg-[#061426] text-[#f8f2e8]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <Wordmark light />
          <p className="font-display mt-7 max-w-sm text-2xl leading-snug">
            Specialist periodontal and implant care with composure, precision, and long-term thinking.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2">
          <TextColumn title="Treatments" items={treatmentsNav.map((t) => ({ label: t.label }))} />
          <TextColumn title="Conditions" items={conditionsNav.map((c) => ({ label: c.label }))} />
          <MixedColumn title="Explore" items={exploreItems} />
          <MixedColumn title="Legal" items={legalItems} />
        </div>
      </div>
      <div className="border-t border-[#f8f2e8]/10 px-5 py-5 text-center text-xs text-[#eee2d1]/62 sm:px-8">
        © Dr Payvand Menhadji · Digital marketing partner:{" "}
        <a
          href="https://remedo.io"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring text-[#d7b36f] hover:text-[#f8f2e8]"
        >
          Remedo
        </a>
      </div>
    </footer>
  );
}
