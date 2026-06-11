import type { Metadata } from "next";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/content-blocks";
import { IndexGrid } from "@/components/index-grid";
import { Container, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import { treatments } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Periodontal & Implant Treatments | Dr Payvand Menhadji",
  description:
    "Specialist periodontal therapy, gum grafting, dental implants, peri-implantitis and crown lengthening across London.",
};

export default function TreatmentsPage() {
  return (
    <main>
      <PremiumHero
        preheading="Treatments"
        title="Specialist treatment for the gums, bone and implants that support your teeth."
      />

      <Section>
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <p className="text-xl leading-9 text-[#34383a]">
              Below is the full range of treatments I provide. Each one is offered only after a full diagnostic consultation — there is no standard plan. Select any treatment to read what it involves, what to expect, and how it is approached.
            </p>
          </Reveal>
          <IndexGrid base="/treatments" items={treatments} />
        </Container>
      </Section>

      <DarkCta title="Not sure which treatment you need?" copy="A consultation begins with diagnosis, not a plan. We will explain exactly what is happening and what your options are.">
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="ghostDark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
