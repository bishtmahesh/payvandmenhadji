import { ClipboardCheck, GraduationCap, Handshake, Infinity, Microscope, ShieldCheck } from "lucide-react";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/content-blocks";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { EditorialImagePlaceholder } from "@/components/placeholders";
import { HomeHeroActions, PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import { TrustStrip } from "@/components/trust-strip";

const careAreas = [
  {
    title: "Gum disease and periodontal therapy",
    text: "Diagnosis-led care for inflammation, attachment loss, and the foundations that protect natural teeth.",
    meta: "Periodontal stability",
  },
  {
    title: "Gum recession and gum grafting",
    text: "Soft tissue planning for exposed roots, thin tissue, sensitivity, and aesthetic gum-line concerns.",
    meta: "Soft tissue care",
  },
  {
    title: "Dental implants",
    text: "Implant assessment and surgical care with attention to bone, soft tissue, hygiene access, and longevity.",
    meta: "Implant planning",
  },
  {
    title: "Peri-implantitis",
    text: "Specialist management for inflammation and bone loss around dental implants.",
    meta: "Implant maintenance",
  },
  {
    title: "Periodontal regeneration / bone grafting",
    text: "Regenerative and reconstructive approaches where the biology and defect anatomy support treatment.",
    meta: "Regenerative care",
  },
  {
    title: "Crown lengthening",
    text: "Aesthetic and restorative crown lengthening planned around proportion, tooth structure, and tissue stability.",
    meta: "Restorative support",
  },
];

export default function Home() {
  return (
    <main>
      <PremiumHero
        home
        preheading="London Specialist Periodontist"
        title="Specialist periodontal and implant care in London."
      >
        <HomeHeroActions />
      </PremiumHero>

      <TrustStrip />

      <Section className="py-18 lg:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr]">
          <Reveal>
            <Eyebrow>Introduction</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl lg:text-[4.25rem]">
              Precision, Biology, Aesthetics.
            </h2>
          </Reveal>
          <Reveal className="lg:pt-10">
            <p className="max-w-3xl text-xl leading-9 text-[#34383a]">
              Dental concerns often begin at the gums. Dr Menhadji focuses on the tissues supporting teeth and implants, treating problems predictably to protect long-term stability.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-3">
              {[
                { title: "Conservative", text: "Care begins with diagnosis, risk control, and preserving what can be preserved.", icon: ShieldCheck },
                { title: "Surgical", text: "Surgery is planned when it meaningfully improves biology, access, or stability.", icon: ClipboardCheck },
                { title: "Long-term", text: "Treatment is considered in the context of maintenance, function, and future dentistry.", icon: Infinity },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="group border-t border-[#b88742]/45 pt-6">
                    <Icon className="mb-8 size-6 text-[#b88742] transition duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                    <h3 className="font-display text-3xl text-[#0b1422]">{item.title}</h3>
                    <p className="mt-4 leading-7 text-[#34383a]">{item.text}</p>
                  </article>
                );
              })}
            </div>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-8 max-w-6xl">
            <Eyebrow>Selected Areas Of Care</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl lg:text-[4.25rem]">
              Specialist care, edited with restraint.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion items={careAreas} />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Beyond the surgery.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-[#34383a]">
              Her work extends across patient care, academic thinking, and collaboration with colleagues who need specialist periodontal judgement within wider treatment plans.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Research", text: "An academic lens informs diagnosis, planning, and the appraisal of emerging materials and techniques.", icon: Microscope },
                { title: "Education", text: "Clear communication for patients, colleagues, and professional audiences.", icon: GraduationCap },
                { title: "Clinical collaboration", text: "Referral care that respects the wider restorative, orthodontic, and maintenance pathway.", icon: Handshake },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#f4ecdf]">
        <Container className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <EditorialImagePlaceholder
              label="Dr Payvand Menhadji portrait study"
              intent="Quiet practice detail, hands, written planning, or consultation room materiality."
              variant="portrait"
              src="/images/payvand-referring-dentists.png"
              className="min-h-[440px]"
            />
          </Reveal>
          <Reveal>
            <Eyebrow>Referring Dentists</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              A specialist partner for periodontal and implant referrals.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#34383a]">
              Dr Menhadji works collaboratively with general dentists, restorative teams, and orthodontic colleagues, with clear reporting and patient handback where appropriate.
            </p>
            <div className="mt-9">
              <Button href="/for-dentists" variant="secondary">Refer a patient</Button>
            </div>
          </Reveal>
        </Container>
      </Section>

      <DarkCta title="Begin with a considered consultation." copy="A calm first step for patients, referrers, and professional enquiries.">
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="dark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
