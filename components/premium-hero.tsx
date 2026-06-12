import Image from "next/image";
import type { ReactNode } from "react";
import { Button } from "@/components/button";

type PremiumHeroProps = {
  preheading?: string;
  title: string;
  children?: ReactNode;
  home?: boolean;
  image?: string;
};

export function PremiumHero({ preheading, title, children, home = false, image }: PremiumHeroProps) {
  const img = image ?? "/images/dr-payvand-hero.png";

  return (
    <section className="relative isolate overflow-hidden bg-[#061426]">
      {/* MOBILE / small devices: overlay hero — text sits low on the image, below her face. */}
      <div className="relative min-h-[100svh] overflow-hidden lg:hidden">
        <Image
          src={img}
          alt="Dr Payvand Menhadji"
          fill
          priority={home}
          sizes="100vw"
          className="scale-105 object-cover object-[78%_8%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,20,38,0.92)_0%,rgba(6,20,38,0.55)_28%,rgba(6,20,38,0)_55%)]" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-8">
          {preheading ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b36f]">{preheading}</p>
          ) : null}
          <h1
            className={`font-display tracking-normal text-[#f8f2e8] ${
              home ? "text-[2.1rem] leading-[1.12] sm:text-[2.6rem]" : "text-[2.2rem] leading-[1.08] sm:text-[2.9rem]"
            }`}
          >
            {title}
          </h1>
          {home ? (
            <div className="mt-5 -ml-4">
              <SignatureMark />
            </div>
          ) : null}
          {children ? <div className="mt-6">{children}</div> : null}
        </div>
      </div>

      {/* DESKTOP (lg+): full-bleed overlay hero */}
      <div className="relative hidden min-h-[100svh] lg:block">
        <Image
          src={img}
          alt="Dr Payvand Menhadji"
          fill
          priority={home}
          sizes="100vw"
          className="origin-[72%_38%] -translate-y-[20%] scale-125 object-cover object-right-top"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,20,38,0.82)_0%,rgba(6,20,38,0.7)_30%,rgba(6,20,38,0.36)_55%,rgba(6,20,38,0.05)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(6,20,38,0.56)_0%,rgba(6,20,38,0.08)_42%,rgba(6,20,38,0.16)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_35%,rgba(215,179,111,0.17),transparent_31%)]" />
        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-32 pt-48 sm:px-8">
          <div className={`reveal ${home ? "max-w-3xl" : "max-w-4xl"}`}>
            {preheading ? (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-[#d7b36f]">{preheading}</p>
            ) : null}
            <h1
              className={`font-display tracking-normal text-[#f8f2e8] ${
                home ? "max-w-[44rem] text-[3.5rem] leading-[1.08]" : "max-w-5xl text-[4.75rem] leading-[1.05]"
              }`}
            >
              {title}
            </h1>
            {home ? (
              <div className="mt-6 -ml-7">
                <SignatureMark />
              </div>
            ) : null}
            {children ? <div className={home ? "mt-6" : "mt-7"}>{children}</div> : null}
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d7b36f]/60 to-transparent" />
      </div>
    </section>
  );
}

export function HomeHeroActions() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button href="/contact" variant="dark">Book a consultation</Button>
      <Button href="/for-dentists" variant="dark">Refer a patient</Button>
    </div>
  );
}

function SignatureMark() {
  return (
    <svg
      aria-hidden="true"
      className="h-16 w-48 opacity-90 sm:h-20 sm:w-60"
      viewBox="120 220 560 340"
      role="img"
    >
      <defs>
        <filter id="signatureGold">
          <feComponentTransfer>
            <feFuncR type="table" tableValues="1 0" />
            <feFuncG type="table" tableValues="1 0" />
            <feFuncB type="table" tableValues="1 0" />
          </feComponentTransfer>
          <feColorMatrix
            type="matrix"
            values="
              0 0 0 0 0.843
              0 0 0 0 0.702
              0 0 0 0 0.435
              0.2126 0.7152 0.0722 0 0
            "
          />
        </filter>
      </defs>
      <image
        href="/images/signature-pm.webp"
        x="0"
        y="0"
        width="800"
        height="800"
        preserveAspectRatio="xMidYMid meet"
        filter="url(#signatureGold)"
      />
    </svg>
  );
}
