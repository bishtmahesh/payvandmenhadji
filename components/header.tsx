"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { BrandLockup } from "@/components/brand";
import { conditionsNav, treatmentsNav } from "@/data/site-content";

type NavItem = {
  label: string;
  href?: string;
  // Display-only menu: items are shown but do not link anywhere.
  menu?: { label: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", menu: treatmentsNav.map((t) => ({ label: t.label })) },
  { label: "Conditions", menu: conditionsNav.map((c) => ({ label: c.label })) },
  { label: "For Dentists", href: "/for-dentists" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isAtTop = !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  const linkColor = isAtTop
    ? "!text-white hover:!text-[#d7b36f]"
    : "!text-[#0b1422] hover:!text-[#0b1422]";

  // Shared class so links and dropdown triggers render identically.
  // Triggers use <span> (not <button>) to avoid the global `button { font: inherit }`
  // rule overriding the font-size and making them larger than the link tabs.
  const navItemClass = `focus-ring relative inline-flex items-center gap-1 whitespace-nowrap text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition duration-300 after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-[#d7b36f] after:transition-all after:duration-300 hover:after:w-full xl:text-xs ${linkColor}`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-7xl items-center gap-5 rounded-full border px-4 py-3 shadow-[0_18px_70px_rgba(6,20,38,0.14)] backdrop-blur-xl transition-all duration-500 sm:px-5 ${
          isAtTop
            ? "border-[#f8f2e8]/12 bg-[#061426]/36"
            : "border-[#d7b36f]/18 bg-[#f8f2e8]/90"
        }`}
      >
        <BrandLockup light={isAtTop} compact />

        <nav
          aria-label="Primary navigation"
          className="ml-auto hidden min-w-0 flex-nowrap items-center gap-5 xl:gap-7 lg:flex"
        >
          {navItems.map((item) =>
            item.menu ? (
              <div key={item.label} className="group/menu relative">
                <span role="button" tabIndex={0} aria-haspopup="true" className={`${navItemClass} cursor-default`}>
                  {item.label}
                  <ChevronDown className="size-3 transition duration-300 group-hover/menu:rotate-180" strokeWidth={2} />
                </span>
                <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-4 opacity-0 transition duration-200 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100">
                  <div className="w-72 overflow-hidden rounded-2xl border border-[#dacbb8] bg-[#fbf7ef] p-2 shadow-[0_24px_80px_rgba(6,20,38,0.18)]">
                    {item.menu.map((sub) => (
                      <span key={sub.label} className="block cursor-default rounded-xl px-4 py-2.5 text-sm leading-snug text-[#0b1422]">
                        {sub.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.label} href={item.href!} className={navItemClass}>
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <Link
          href="/contact"
          className={`focus-ring ml-auto hidden shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] transition duration-300 lg:ml-2 lg:inline-flex xl:text-xs ${
            isAtTop
              ? "border-[#f8f2e8]/55 !text-[#f8f2e8] hover:border-[#d7b36f] hover:bg-[#d7b36f] hover:!text-[#061426]"
              : "border-[#b88742]/45 !text-[#0b1422] hover:border-[#061426] hover:bg-[#061426] hover:!text-[#f8f2e8]"
          }`}
        >
          Enquire
        </Link>

        <nav
          aria-label="Primary navigation mobile"
          className={`flex min-w-0 flex-1 gap-4 overflow-x-auto rounded-full border px-4 py-3 text-[0.62rem] font-semibold uppercase tracking-[0.13em] backdrop-blur-xl lg:hidden ${
            isAtTop
              ? "border-[#f8f2e8]/16 bg-[#061426]/28 text-white"
              : "border-[#dacbb8] bg-[#fbf7ef]/88 text-[#0b1422]"
          }`}
        >
          {navItems.map((item) =>
            item.href ? (
              <Link key={item.label} href={item.href} className="focus-ring shrink-0">
                {item.label}
              </Link>
            ) : (
              <span key={item.label} className="shrink-0 opacity-70">
                {item.label}
              </span>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}
