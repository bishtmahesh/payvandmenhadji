import Image from "next/image";
import Link from "next/link";

const monogramLogo = "/images/payvand-pm-monogram.png";

export function Monogram({ compact = false }: { compact?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`relative block shrink-0 overflow-hidden rounded-full border border-[#b88742]/45 bg-[#061426] ${
        compact ? "size-11" : "size-14"
      }`}
    >
      <Image src={monogramLogo} alt="" fill sizes="56px" className="object-cover" />
    </span>
  );
}

export function BrandLockup({ light = false, compact = false }: { light?: boolean; compact?: boolean }) {
  return (
    <Link
      href="/"
      className="focus-ring flex shrink-0 items-center gap-3"
      aria-label="Dr Payvand Menhadji home"
    >
      <Monogram compact />
      <span className="grid min-w-0">
        <span
          className={`font-display leading-none tracking-[0.13em] ${
            compact ? "text-[0.78rem] sm:text-[0.9rem]" : "text-[0.86rem] sm:text-[1rem]"
          } ${light ? "text-[#f8f2e8]" : "text-[#0b1422]"}`}
        >
          PAYVAND MENHADJI
        </span>
        <span
          className={`mt-1 text-[0.5rem] font-semibold uppercase tracking-[0.24em] sm:text-[0.56rem] ${
            light ? "text-[#d7b36f]" : "text-[#b88742]"
          }`}
        >
          Specialist Periodontist
        </span>
      </span>
    </Link>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="focus-ring flex items-center gap-3" aria-label="Dr Payvand Menhadji home">
      <Monogram compact />
      <span className="grid">
        <span className={`font-display text-[1.05rem] leading-none tracking-[0.05em] sm:text-[1.25rem] ${light ? "text-[#f8f2e8]" : "text-[#0b1422]"}`}>
          Payvand Menhadji
        </span>
        <span className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.24em] ${light ? "text-[#d7b36f]" : "text-[#b88742]"}`}>
          Specialist Periodontist
        </span>
      </span>
    </Link>
  );
}
