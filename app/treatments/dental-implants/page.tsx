import type { Metadata } from "next";
import { Activity, ClipboardCheck, Clock, HeartPulse, Layers, MessageCircle, ScanLine, ShieldCheck, Smile, Utensils } from "lucide-react";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { DarkCta } from "@/components/content-blocks";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { EditorialImagePlaceholder } from "@/components/placeholders";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Specialist Dental Implants London | Dr Payvand Menhadji",
  description:
    "Dental implants planned and placed by a Specialist Periodontist in London. Single tooth, multiple teeth and full-arch replacement, designed for long-term stability.",
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
              A dental implant is a small titanium post placed into the jawbone to replace the root of a missing tooth. Once it has integrated, it supports a crown, bridge or denture that looks and functions like a natural tooth — and helps preserve the bone that would otherwise shrink after tooth loss.
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

      {/* How they work — rich text */}
      <Section className="bg-[#eee2d1]">
        <Container className="max-w-3xl">
          <Reveal>
            <Eyebrow>How They Work</Eyebrow>
            <div className="space-y-6 text-lg leading-8 text-[#34383a]">
              <p className="font-display text-2xl leading-9 text-[#0b1422]">
                Placing an implant is a staged, biological process — not a single appointment.
              </p>
              <p>
                A titanium post is positioned where the tooth root used to be. Over the following weeks, bone grows around and bonds to it — a process called <strong className="font-semibold text-[#0b1422]">osseointegration</strong> — creating a stable foundation.
              </p>
              <p>
                Every case is planned digitally using 3D imaging, with the final tooth designed first and the implant positioned to support it. Where a tooth still needs removing, or where bone is thin, preparatory steps such as extraction or grafting are planned first.
              </p>
              <p>
                Once healing is complete, an abutment and a custom-made crown are fitted — restoring both function and appearance.
              </p>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Advantages */}
      <Section>
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <Eyebrow>Advantages</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-[#0b1422] sm:text-5xl">
              Why patients choose implants.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#34383a]">
              A replacement that looks, feels and functions like a natural tooth — and protects the bone beneath it.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Natural look & feel", text: "Designed to blend with your own teeth and become a permanent part of your smile.", icon: Smile },
                { title: "Confident eating", text: "Function like natural teeth, so you can enjoy your food without worry.", icon: Utensils },
                { title: "Clear speech", text: "Fixed in place — no slipping or movement, unlike removable dentures.", icon: MessageCircle },
                { title: "Protects the jawbone", text: "Stimulate the bone and help preserve facial structure after tooth loss.", icon: ShieldCheck },
                { title: "Kind to other teeth", text: "Neighbouring teeth are left intact, rather than reduced to carry a bridge.", icon: Layers },
                { title: "Built to last", text: "With good hygiene and maintenance, implants can last many years.", icon: Clock },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Types of cases */}
      <Section className="bg-[#f4ecdf]">
        <Container>
          <Reveal className="mb-8 max-w-3xl">
            <Eyebrow>Types Of Cases</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              From a single tooth to a full arch.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion
              items={[
                { title: "Single missing tooth", text: "One implant and a crown replace the tooth, blending with your natural teeth.", meta: "01" },
                { title: "Multiple missing teeth", text: "Implant-supported bridges restore several teeth without removable dentures.", meta: "02" },
                { title: "Full-arch replacement", text: "A fixed, full-arch restoration supported on a small number of implants.", meta: "03" },
                { title: "Compromised sites", text: "Bone grafting or sinus augmentation prepares thin or deficient bone before placement.", meta: "04" },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      {/* Candidacy */}
      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <Eyebrow>Am I Suitable?</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              A careful assessment first.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-[#34383a]">
              Most healthy adults missing one or more teeth are suitable. The best results come with healthy gums, enough bone to support the implant, and good oral hygiene. Smoking, uncontrolled diabetes or significant bone loss do not necessarily rule implants out, but may need assessment or preparatory treatment first.
            </p>
            <p className="mt-6 text-xl leading-9 text-[#34383a]">
              As a periodontist, Dr Menhadji places particular emphasis on the health of the gums and bone before any implant is considered — which is what protects the result over the long term.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* What to expect */}
      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>What To Expect</Eyebrow>
            <h2 className="font-display text-4xl leading-tight text-[#0b1422] sm:text-5xl">
              A planned, staged pathway.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#34383a]">
              From your first consultation to the final crown — here is how treatment unfolds.
            </p>
          </Reveal>
          <Reveal className="grid gap-5 md:grid-cols-5">
            {[
              { step: "01", label: "Consultation and 3D assessment", icon: ScanLine },
              { step: "02", label: "Digital treatment plan", icon: ClipboardCheck },
              { step: "03", label: "Implant placement", icon: Activity },
              { step: "04", label: "Healing and integration", icon: HeartPulse },
              { step: "05", label: "Final crown and review", icon: Smile },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <article
                  key={s.step}
                  className="group border border-[#dacbb8] bg-[#fbf7ef]/72 p-6 transition duration-500 hover:-translate-y-1 hover:border-[#b88742]/55 hover:bg-[#fbf7ef]"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <Icon className="size-6 text-[#b88742] transition duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
                    <span className="font-display text-3xl text-[#b88742]">{s.step}</span>
                  </div>
                  <p className="text-base leading-7 text-[#34383a]">{s.label}</p>
                </article>
              );
            })}
          </Reveal>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <Reveal className="mb-8 max-w-3xl">
            <Eyebrow>Common Questions</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Frequently asked.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion
              items={[
                { title: "How long does treatment take?", text: "Typically a few months — most of which is healing time, allowing the implant to integrate with the bone before the final crown is fitted." },
                { title: "Is it comfortable?", text: "Placement is carried out under local anaesthetic and most patients describe it as comfortable. Mild soreness afterwards is normal and easily managed." },
                { title: "How long do implants last?", text: "With good hygiene and regular maintenance, implants can last many years — often decades." },
                { title: "Are implants safe?", text: "Implants are well-researched and made from biocompatible titanium that integrates naturally with your own bone." },
                { title: "How many implants will I need?", text: "It depends on how many teeth are missing — a single crown, an implant-supported bridge, or a full-arch restoration. This is confirmed at your consultation." },
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
