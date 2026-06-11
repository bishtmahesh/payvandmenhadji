import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghostDark";
};

export function Button({ href, children, variant = "primary" }: ButtonProps) {
  const styles = {
    primary:
      "border-[#111827] bg-[#111827] text-[#f7f1e7] hover:bg-[#283242] hover:border-[#283242]",
    secondary:
      "border-[#b88742]/60 bg-transparent text-[#0b1422] hover:border-[#0b1422] hover:bg-[#eee2d1]",
    dark:
      "border-[#d7b36f] bg-[#d7b36f] !text-[#0b1422] hover:bg-[#f8f2e8] hover:border-[#f8f2e8] hover:!text-[#0b1422]",
    ghostDark:
      "border-[#f8f2e8]/42 bg-[#061426]/10 text-[#f8f2e8] hover:border-[#d7b36f] hover:bg-[#d7b36f] hover:text-[#061426]",
  };

  return (
    <Link
      href={href}
      className={`focus-ring inline-flex min-h-12 items-center justify-center rounded-full border px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
    </Link>
  );
}
