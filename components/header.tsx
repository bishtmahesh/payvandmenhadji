"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { BrandLockup } from "@/components/brand";
import { conditionsNav, treatmentsNav } from "@/data/site-content";

type NavItem = {
  label: string;
  href?: string;
  // Display-only menu (desktop): items are shown but do not link anywhere.
  menu?: { label: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", menu: treatmentsNav.map((t) => ({ label: t.label })) },
  { label: "Conditions", menu: conditionsNav.map((c) => ({ label: c.label })) },
  { label: "For Dentists", href: "/for-dentists" },
];

// Mobile menu — fully linked to each page.
const mobileNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", children: treatmentsNav },
  { label: "Conditions", children: conditionsNav },
  { label: "For Dentists", href: "/for-dentists" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const isAtTop = !scrolled && !menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Close the mobile menu on navigation.
  useEffect(() => {
    setMenuOpen(false);
    setOpenSection(null);
  }, [pathname]);

  const linkColor = isAtTop
    ? "!text-white hover:!text-[#d7b36f]"
    : "!text-[#0b1422] hover:!text-[#0b1422]";

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

        {/* Desktop navigation */}
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

        {/* Hamburger (mobile) */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className={`focus-ring ml-auto grid size-10 shrink-0 place-items-center rounded-full border transition duration-300 lg:hidden ${
            isAtTop
              ? "border-[#d7b36f] bg-[#d7b36f] text-[#061426]"
              : "border-[#061426] bg-[#061426] text-[#f8f2e8]"
          }`}
        >
          {menuOpen ? <X className="size-5" strokeWidth={1.6} /> : <Menu className="size-5" strokeWidth={1.6} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-3xl border border-[#dacbb8] bg-[#f8f2e8] shadow-[0_24px_80px_rgba(6,20,38,0.22)] lg:hidden">
          <nav aria-label="Mobile navigation" className="max-h-[70svh] overflow-y-auto p-3">
            {mobileNav.map((item) =>
              item.children ? (
                <div key={item.label} className="border-b border-[#dacbb8]/70 last:border-b-0">
                  <button
                    type="button"
                    aria-expanded={openSection === item.label}
                    onClick={() => setOpenSection((s) => (s === item.label ? null : item.label))}
                    className="focus-ring flex w-full items-center justify-between gap-3 px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0b1422]"
                  >
                    {item.label}
                    <ChevronDown
                      className={`size-4 text-[#b88742] transition duration-300 ${openSection === item.label ? "rotate-180" : ""}`}
                      strokeWidth={2}
                    />
                  </button>
                  <div className={`grid transition-all duration-300 ${openSection === item.label ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="grid gap-1 pb-3 pl-4 pr-2">
                        {item.children.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="focus-ring rounded-xl px-4 py-2.5 text-sm leading-snug text-[#34383a] transition hover:bg-[#eee2d1] hover:text-[#0b1422]"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className="focus-ring block border-b border-[#dacbb8]/70 px-4 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#0b1422] last:border-b-0"
                >
                  {item.label}
                </Link>
              ),
            )}
            <Link
              href="/contact"
              className="focus-ring mt-3 flex items-center justify-center rounded-full border border-[#061426] bg-[#061426] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#f8f2e8] transition hover:bg-[#b88742] hover:text-[#061426]"
            >
              Enquire
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
