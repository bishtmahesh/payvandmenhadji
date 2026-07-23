import type { Metadata } from "next";
import { Button } from "@/components/button";
import { EditorialList } from "@/components/content-blocks";
import { Container, Eyebrow, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Fees | Dr Payvand Menhadji, Specialist Periodontist",
  description:
    "Indicative fees for periodontal and implant treatment with Dr Payvand Menhadji. Clear costs, no surprises.",
};

const fees = [
  { item: "New patient periodontal consultation", price: "from £200" },
  { item: "Non-surgical periodontal therapy (per arch)", price: "from £800" },
  { item: "Periodontal surgery (per site)", price: "from £1,000" },
  { item: "Gum graft", price: "from £900" },
  { item: "Crown lengthening (per tooth / per region)", price: "Confirmed at consultation" },
  { item: "Dental implant placement (single tooth, excluding crown)", price: "Confirmed at consultation" },
  { item: "Peri-implantitis surgical management", price: "Confirmed at consultation" },
  { item: "Bone graft / ridge augmentation", price: "Confirmed at consultation" },
  { item: "Periodontal maintenance appointment", price: "Confirmed at consultation" },
];

export default function FeesPage() {
  return (
    <main>
      <PremiumHero preheading="Fees" title="Clear fees. No surprises.">
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">
          A full quote is given after an in-person consultation. The figures here are typical starting fees as a guide.
        </p>
      </PremiumHero>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>Typical Fees</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">Indicative only.</h2>
            <p className="mt-6 text-lg leading-8 text-[#34383a]">
              Every patient is different, so a full quote is only given after an in-person consultation. Your written treatment plan will set out the exact cost before any treatment begins.
            </p>
          </Reveal>
          <Reveal>
            <dl className="divide-y divide-[#dacbb8] border-y border-[#dacbb8]">
              {fees.map((fee) => (
                <div key={fee.item} className="flex flex-wrap items-baseline justify-between gap-3 py-5">
                  <dt className="text-lg text-[#0b1422]">{fee.item}</dt>
                  <dd className="font-display text-2xl text-[#b88742]">{fee.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm leading-7 text-[#746f68]">
              These are indicative only. Final fees are confirmed in writing after your consultation.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#eee2d1]">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>Payment</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">How payment works.</h2>
          </Reveal>
          <Reveal>
            <p className="max-w-3xl text-xl leading-9 text-[#34383a]">
              Fees are payable at each appointment by card or bank transfer. Many private health insurers contribute toward specialist periodontal and implant care, so please contact your insurer in advance to confirm cover.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>What Is Included</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">In every fee.</h2>
          </Reveal>
          <Reveal>
            <EditorialList
              items={[
                { title: "Planning & quotes", text: "All treatment planning and written quotes." },
                { title: "Imaging", text: "All necessary radiographs and clinical photography." },
                { title: "Reviews", text: "Post-operative review appointments included in the surgical fee." },
                { title: "Reporting", text: "Written report to your referring dentist after every stage." },
              ]}
            />
            <div className="mt-10">
              <Button href="/contact" variant="secondary">Book a consultation</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
