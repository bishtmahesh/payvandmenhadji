import type { Metadata } from "next";
import { Handshake, Layers, ScanLine, ShieldCheck } from "lucide-react";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { DarkCta, ProcessSteps } from "@/components/content-blocks";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { EditorialImagePlaceholder } from "@/components/placeholders";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Specialist Dental Implants London | Dr Payvand Menhadji",
  description:
    "Dental implants planned and placed by a Specialist Periodontist in London. Single tooth, multiple teeth and complex cases, designed for long-term stability.",
};

export default function DentalImplantsPage() {
  return (
    <main>
      <PremiumHero preheading="Treatments" title="Dental implants.">
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">
          Replacing missing teeth — planned and placed by a specialist for long-term stability.
        </p>
      </PremiumHero>

      {/* What it is — text left, image right */}
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal>
            <Eyebrow>What It Is</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              The closest thing to a natural tooth.
            </h2>
            <p className="mt-8 text-xl leading-9 text-[#34383a]">
              A dental implant is a small titanium fixture that integrates with the jawbone to support a crown, bridge or denture — but only when it is planned and placed with care.
            </p>
            <blockquote className="mt-10 border-l border-[#b88742] pl-7 font-display text-3xl leading-snug text-[#0b1422]">
              Implants are placed only after the gums are healthy. This single rule prevents most long-term failures.
            </blockquote>
          </Reveal>
          <Reveal>
            <EditorialImagePlaceholder
              label="Dr Payvand Menhadji clinical portrait"
              intent="Abstract consultation or instrument detail, no fake treatment imagery."
              variant="detail"
              src="/images/dr-payvand-hero.png"
              position="object-[78%_24%] scale-110"
              className="min-h-[460px]"
            />
          </Reveal>
        </Container>
      </Section>

      {/* My approach */}
      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <Eyebrow>My Approach</Eyebrow>
              <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
                Planned around the final result.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#34383a]">
              Every case is planned digitally, with the final tooth designed first and the implant positioned to support it — not the other way around.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Healthy gums first", text: "Implants are placed only once the surrounding tissues are stable and healthy.", icon: ShieldCheck },
                { title: "Digital planning", text: "3D imaging guides the position, so aesthetics and function are designed from the start.", icon: ScanLine },
                { title: "Augmentation where needed", text: "Bone or gum grafting ensures the implant has stable, healthy tissue around it.", icon: Layers },
                { title: "Co-owned with your team", text: "The final crown is made by your restorative dentist, shared with your wider team.", icon: Handshake },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Types of cases */}
      <Section>
        <Container>
          <Reveal className="mb-8 max-w-3xl">
            <Eyebrow>Types Of Cases</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              From single teeth to complex sites.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion
              items={[
                { title: "Single missing tooth", text: "A single implant-supported crown that sits and functions like a natural tooth.", meta: "01" },
                { title: "Multiple missing teeth", text: "Bridges supported on implants to restore a row of teeth.", meta: "02" },
                { title: "Replacing a failing tooth", text: "Including immediate placement at the time of extraction where indicated.", meta: "03" },
                { title: "Complex cases", text: "Sites requiring bone or sinus augmentation before an implant can be placed.", meta: "04" },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      {/* What to expect */}
      <Section className="bg-[#f4ecdf]">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>What To Expect</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              A planned, staged pathway.
            </h2>
          </Reveal>
          <Reveal>
            <ProcessSteps
              items={[
                "Consultation and 3D assessment",
                "Digital treatment plan",
                "Implant placement",
                "Healing and integration",
                "Final crown and review",
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <DarkCta
        title="Find out whether implants are right for you."
        copy="A considered first step — for patients and referring dentists alike."
      >
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="ghostDark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
