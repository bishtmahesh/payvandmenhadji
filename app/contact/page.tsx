import { Building2, Mail, MapPinned, Mic2, Phone, Send, Stethoscope } from "lucide-react";
import { Button } from "@/components/button";
import { Checkbox, Field, FormPanel, SelectField, TextArea } from "@/components/forms";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { LocationBlock } from "@/components/location-block";
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
        <Container>
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Practice Locations</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Selected London access.
            </h2>
          </Reveal>
          <Reveal>
            <LocationBlock
              location={{
                practice: "The Richmond Dentist",
                area: "Richmond",
                address: "20 Water Lane, Richmond, London TW9 1TJ",
                transport: "Nearest station to be confirmed",
                days: "To be confirmed",
                website: "https://therichmonddentist.co.uk/",
                logo: "/images/practices/richmond.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "Gardens Dental Centre",
                area: "Kew",
                address: "7 Royal Parade, Kew Gardens, Richmond TW9 3QD",
                transport: "Nearest station to be confirmed",
                days: "To be confirmed",
                website: "https://www.gardensdentalcentre.com/the-team/",
                logo: "/images/practices/gardens.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "SW1 Dental Studio",
                area: "Westminster, SW1",
                address: "41–43 Great Peter Street, London SW1P 3LT",
                transport: "Nearest station to be confirmed",
                days: "To be confirmed",
                website: "https://www.sw1dentalstudio.co.uk/dr-payvand-menhadji",
                logo: "/images/practices/sw1.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "Serene Dental",
                area: "London",
                address: "Address to be confirmed",
                transport: "Nearest station to be confirmed",
                days: "To be confirmed",
                website: "https://www.serenedental.co.uk/",
                logo: "/images/practices/serene.jpg",
              }}
            />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>General Enquiry</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Begin the right conversation.
            </h2>
            <div className="mt-8 grid gap-4 text-[#34383a]">
              <p className="flex items-center gap-3">
                <Mail className="size-5 text-[#b88742]" strokeWidth={1.5} />
                Email and booking details to be confirmed
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-5 text-[#b88742]" strokeWidth={1.5} />
                Practice contact routes to be confirmed
              </p>
              <p className="flex items-center gap-3">
                <MapPinned className="size-5 text-[#b88742]" strokeWidth={1.5} />
                Central and west London access
              </p>
            </div>
            <p className="mt-8 leading-7 text-[#34383a]">
              For urgent post-operative concerns or dental emergencies, please contact the treating practice directly using the emergency details provided after treatment. Final safety wording can be confirmed before launch.
            </p>
          </Reveal>
          <Reveal>
            <FormPanel>
              <div className="grid gap-6 sm:grid-cols-2">
                <Field label="Name" name="name" required />
                <Field label="Email" name="email" type="email" required />
                <Field label="Phone" name="phone" type="tel" />
                <SelectField label="Reason for enquiry" name="enquiry-type">
                  <option>New patient consultation</option>
                  <option>Existing patient</option>
                  <option>Referral</option>
                  <option>Press</option>
                  <option>Other</option>
                </SelectField>
                <SelectField label="Preferred location" name="preferred-location">
                  <option>No preference</option>
                  <option>The Richmond Dentist</option>
                  <option>Gardens Dental Centre</option>
                  <option>SW1 Dental Studio</option>
                  <option>Serene Dental</option>
                </SelectField>
              </div>
              <TextArea label="Message" name="message" required />
              <Checkbox label="I consent to being contacted about this enquiry and understand my data will be handled according to the final published privacy policy." name="gdpr" />
              <button className="focus-ring inline-flex w-fit items-center gap-3 rounded-full border border-[#061426] bg-[#061426] px-7 py-4 text-sm font-semibold text-[#f8f2e8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b88742] hover:text-[#061426]" type="button">
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
