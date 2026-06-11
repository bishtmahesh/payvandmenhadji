import type { Metadata } from "next";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/content-blocks";
import { IndexGrid } from "@/components/index-grid";
import { Container, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import { conditions } from "@/data/site-content";

export const metadata: Metadata = {
  title: "Gum & Implant Conditions | Dr Payvand Menhadji, London",
  description:
    "Recognise the warning signs. A London Specialist Periodontist explains the gum and implant conditions she treats most often.",
};

export default function ConditionsPage() {
  return (
    <main>
      <PremiumHero
        preheading="Conditions"
        title="Recognise the warning signs. Understand what they mean."
      />

      <Section>
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <p className="text-xl leading-9 text-[#34383a]">
              Most gum problems develop slowly and without pain — which is why so many are caught late. The pages below explain the conditions I treat most often, what causes them, and what can be done. If anything sounds familiar, please book a consultation rather than wait.
            </p>
          </Reveal>
          <IndexGrid base="/conditions" items={conditions} />
        </Container>
      </Section>

      <DarkCta title="Does any of this sound familiar?" copy="If it does, the next step is a consultation — not a wait. We will explain what is happening and what your options are.">
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="ghostDark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
