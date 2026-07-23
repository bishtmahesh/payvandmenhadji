import type { Metadata } from "next";
import { Activity, HeartPulse, Layers, Leaf } from "lucide-react";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { DarkCta, ProcessSteps } from "@/components/content-blocks";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { EditorialImagePlaceholder } from "@/components/placeholders";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Gum Grafting in London | Specialist Periodontist",
  description:
    "Modern gum grafting techniques to restore the gum line, treat recession and protect exposed tooth roots, by a London Specialist Periodontist.",
};

export default function GumGraftingPage() {
  return (
    <main>
      <PremiumHero preheading="Treatments" title="Gum grafting and mucogingival surgery.">
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">
          Restoring the gum line where recession exposes the root, causes sensitivity, or affects the smile.
        </p>
      </PremiumHero>

      {/* What it is: editorial two-column */}
      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal>
            <Eyebrow>What It Is</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Rebuilding lost tissue with biological respect.
            </h2>
            <p className="mt-8 text-xl leading-9 text-[#34383a]">
              When the gum has receded, exposing the root, causing sensitivity, or making a tooth look longer than its neighbour, grafting can rebuild the lost tissue. The technique used depends on the cause of the recession and what we are trying to achieve: root coverage, thicker gum to prevent further recession, or both.
            </p>
            <blockquote className="mt-10 border-l border-[#b88742] pl-7 font-display text-3xl leading-snug text-[#0b1422]">
              The choice of technique follows the biological and aesthetic objective, not the other way around.
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

      {/* Rich text paragraph section */}
      <Section className="border-t border-[#dacbb8]/60">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>In More Detail</Eyebrow>
            <div className="space-y-6 text-lg leading-8 text-[#34383a]">
              <p className="font-display text-2xl leading-9 text-[#0b1422]">
                Gum recession occurs when the gum margin moves away from its original position, leaving part of the tooth root exposed.
              </p>
              <p>
                It can follow gum disease, toothbrushing technique, the position of a tooth in the jaw, or a naturally <em className="font-medium not-italic text-[#0b1422]">thin gum type</em>. Because the causes differ, so does the right response.
              </p>
              <p>
                Mild, stable recession is often best <strong className="font-semibold text-[#0b1422]">monitored</strong> rather than treated. Where it is advancing, causing sensitivity, or affecting the appearance of your smile, grafting can restore the lost tissue and protect the tooth over the long term.
              </p>
              <p>
                Modern techniques are far less invasive than they once were, and treatment is always planned around the individual mouth, with realistic, honest expectations discussed before anything begins.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Techniques */}
      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.76fr_1.24fr]">
            <div>
              <Eyebrow>Techniques Offered</Eyebrow>
              <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
                Matched to the tissue and the goal.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#34383a]">
              The plan is shaped by tissue thickness, recession pattern, tooth position, hygiene access, and the desired long-term outcome, using the least invasive approach that achieves a stable result.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Connective tissue grafts", text: "The gold standard for root coverage, drawing on the patient's own tissue for a natural, durable result.", icon: Layers },
                { title: "Free gingival grafts", text: "Used where the priority is additional attached tissue and long-term stability around a tooth.", icon: Activity },
                { title: "Tunnel & coronally advanced flap", text: "Minimally invasive approaches that deliver excellent aesthetic outcomes with reduced healing time.", icon: HeartPulse },
                { title: "Biologic agents & substitutes", text: "Considered where appropriate to avoid taking tissue from the palate, supporting comfortable healing.", icon: Leaf },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Who it is for */}
      <Section>
        <Container>
          <Reveal className="mb-8 max-w-3xl">
            <Eyebrow>Who It Is For</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              When grafting is considered.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion
              items={[
                { title: "Visible or aesthetic recession", text: "Where recession along the gum line is bothering you cosmetically or making teeth look uneven.", meta: "01" },
                { title: "Progressive recession", text: "Where recession is continuing over time and risks the long-term survival of a tooth.", meta: "02" },
                { title: "Sensitivity from exposed roots", text: "Where exposed root surfaces cause symptoms or are difficult to keep clean.", meta: "03" },
                { title: "Before orthodontics", text: "Where teeth planned for orthodontic movement sit on thin tissue at risk of recession.", meta: "04" },
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
              A quiet, structured pathway.
            </h2>
          </Reveal>
          <Reveal>
            <ProcessSteps
              items={[
                "Consultation and assessment",
                "Personalised plan",
                "Procedure under local anaesthetic",
                "Review and healing",
                "Maintenance advice",
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <DarkCta
        title="Discuss gum recession with a specialist."
        copy="A calm, considered first step, for patients and referring dentists alike."
      >
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="ghostDark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
