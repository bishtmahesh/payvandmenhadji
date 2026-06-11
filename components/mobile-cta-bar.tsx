import Link from "next/link";

// Sticky bottom CTA bar — mobile only.
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-[#d7b36f]/30 bg-[#061426]/95 px-3 py-3 backdrop-blur-xl lg:hidden">
      <Link
        href="/contact"
        className="focus-ring flex flex-1 items-center justify-center rounded-full bg-[#d7b36f] px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#061426] transition hover:bg-[#f8f2e8]"
      >
        Book Now
      </Link>
      <Link
        href="/for-dentists"
        className="focus-ring flex flex-1 items-center justify-center rounded-full border border-[#f8f2e8]/45 px-4 py-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#f8f2e8] transition hover:border-[#d7b36f] hover:text-[#d7b36f]"
      >
        Refer a patient
      </Link>
    </div>
  );
}
