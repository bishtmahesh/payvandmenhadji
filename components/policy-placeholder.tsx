import { Container, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export function PolicyPlaceholder({ title, note }: { title: string; note: string }) {
  return (
    <main>
      <PremiumHero preheading="Legal & Compliance" title={title} />
      <Section>
        <Container>
          <Reveal className="max-w-2xl">
            <p className="text-xl leading-9 text-[#34383a]">{note}</p>
            <p className="mt-6 leading-8 text-[#746f68]">
              This page is a placeholder. Final, compliant wording will be supplied and published before launch.
            </p>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
