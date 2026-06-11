import { Check } from "lucide-react";
import type { Block, ContentPage } from "@/data/site-content";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { DarkCta, EditorialList, ProcessSteps, ProofPoints } from "@/components/content-blocks";
import { Container, Eyebrow, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

const tones = ["", "bg-[#eee2d1]", "bg-[#f4ecdf]"];

function BlockView({ block }: { block: Block }) {
  switch (block.kind) {
    case "prose":
      return (
        <Container className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <Reveal>
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
          </Reveal>
          <Reveal>
            <p className="max-w-3xl text-xl leading-9 text-[#34383a]">{block.body}</p>
          </Reveal>
        </Container>
      );
    case "cards":
      return (
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
            {block.intro ? <p className="mt-6 text-lg leading-8 text-[#34383a]">{block.intro}</p> : null}
          </Reveal>
          <Reveal>
            <ProofPoints items={block.items} />
          </Reveal>
        </Container>
      );
    case "list":
      return (
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
          </Reveal>
          <Reveal>
            <EditorialList items={block.items} />
          </Reveal>
        </Container>
      );
    case "accordion":
      return (
        <Container>
          <Reveal className="mb-8 max-w-3xl">
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion items={block.items} />
          </Reveal>
        </Container>
      );
    case "process":
      return (
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
          </Reveal>
          <Reveal>
            <ProcessSteps items={block.steps} />
          </Reveal>
        </Container>
      );
    case "bullets":
      return (
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            {block.eyebrow ? <Eyebrow>{block.eyebrow}</Eyebrow> : null}
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">{block.heading}</h2>
          </Reveal>
          <Reveal>
            <ul className="divide-y divide-[#dacbb8] border-y border-[#dacbb8]">
              {block.items.map((item) => (
                <li key={item} className="flex items-start gap-4 py-5 text-lg leading-8 text-[#34383a]">
                  <Check className="mt-1 size-5 shrink-0 text-[#b88742]" strokeWidth={1.6} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      );
  }
}

export function ContentPageView({ page }: { page: ContentPage }) {
  return (
    <main>
      <PremiumHero
        preheading={page.preheading}
        title={page.heroTitle}
      >
        {page.heroSub ? (
          <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">{page.heroSub}</p>
        ) : null}
      </PremiumHero>

      {page.blocks.map((block, index) => (
        <Section key={index} className={tones[index % tones.length]}>
          <BlockView block={block} />
        </Section>
      ))}

      <DarkCta title={page.ctaTitle} copy={page.ctaCopy}>
        <Button href="/contact" variant="dark">Book a consultation</Button>
        <Button href="/for-dentists" variant="ghostDark">Refer a patient</Button>
      </DarkCta>
    </main>
  );
}
