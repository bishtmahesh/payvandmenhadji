import { Building2, MapPinned, Mic2, Send, Stethoscope } from "lucide-react";
import { Button } from "@/components/button";
import { Field, FormPanel, TextArea } from "@/components/forms";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquire | Dr Payvand Menhadji, Specialist Periodontist London",
  description:
    "Enquire with Dr Payvand Menhadji to book a periodontal consultation or refer a patient. London practice locations.",
};

const pathways = [
  {
    title: "Patient enquiries",
    text: "For consultations, treatment questions, and practice booking routes.",
    icon: Stethoscope,
  },
  {
    title: "Referring dentists",
    text: "For periodontal, implant, peri-implantitis, grafting, and multidisciplinary referrals.",
    icon: Building2,
  },
  {
    title: "Press / speaking",
    text: "For education, CPD, expert commentary, and carefully selected professional opportunities.",
    icon: Mic2,
  },
];

export default function ContactPage() {
  return (
    <main>
      <PremiumHero
        preheading="Enquire"
        title="Enquire now."
      >
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">
          For consultations, referrals, and professional enquiries.
        </p>
      </PremiumHero>

      <Section>
        <Container>
          <Reveal>
            <IconCards items={pathways} />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#eee2d1]">
        <Container className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Eyebrow>Practice Locations</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              You can find me here.
            </h2>
            <p className="mt-5 flex items-center gap-3 text-lg leading-8 text-[#34383a]">
              <MapPinned className="size-5 shrink-0 text-[#b88742]" strokeWidth={1.5} />
              Seeing patients privately across five London clinics.
            </p>
          </div>
          <Button href="/clinics" variant="secondary">View clinic locations</Button>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>General Enquiry</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Begin the right conversation.
            </h2>
            <p className="mt-8 leading-7 text-[#34383a]">
              For urgent post-operative concerns or dental emergencies, please contact the treating practice directly using the emergency details provided after treatment. Final safety wording can be confirmed before launch.
            </p>
          </Reveal>
          <Reveal>
            <FormPanel shadow={false}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#b88742]">Send a message</p>
                <h3 className="mt-2 font-display text-3xl leading-tight text-[#0b1422]">
                  We&rsquo;d love to hear from you.
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#746f68]">
                  Share a few details below and we&rsquo;ll be in touch within one working day.
                </p>
                <div className="mt-6 h-px w-full bg-[#dacbb8]" />
              </div>
              <div className="grid gap-6">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
              </div>
              <TextArea label="Message" name="message" required />
              <button className="focus-ring inline-flex w-full items-center justify-center gap-3 rounded-full border border-[#061426] bg-[#061426] px-7 py-4 text-sm font-semibold text-[#f8f2e8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b88742] hover:text-[#061426] sm:w-fit sm:justify-start" type="button">
                Send enquiry
                <Send className="size-4" strokeWidth={1.6} />
              </button>
            </FormPanel>
          </Reveal>
        </Container>
      </Section>

      <section className="bg-[#061426] px-5 py-16 text-[#f8f2e8] sm:px-8">
        <Container className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <h2 className="font-display text-5xl">Referring a patient?</h2>
          <Button href="/for-dentists" variant="dark">Use the referral form</Button>
        </Container>
      </section>
    </main>
  );
}
