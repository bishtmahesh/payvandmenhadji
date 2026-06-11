import { FileText, Handshake, Send, UserRoundCheck } from "lucide-react";
import { LuxuryAccordion } from "@/components/accordion";
import { Button } from "@/components/button";
import { ProcessSteps } from "@/components/content-blocks";
import { Checkbox, Field, FormPanel, SelectField, TextArea } from "@/components/forms";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referrals — Specialist Periodontist London | Dr Menhadji",
  description:
    "Refer your patients for specialist periodontal and implant care in London. Online referral form and clear reporting.",
};

export default function ForDentistsPage() {
  return (
    <main>
      <PremiumHero
        preheading="For Dentists"
        title="A specialist partner for periodontal and implant referrals."
      >
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">Working alongside you, your patient stays yours.</p>
      </PremiumHero>

      <Section>
        <Container>
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <Eyebrow>Referral Promise</Eyebrow>
              <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
                Clear, collaborative specialist care.
              </h2>
            </div>
            <p className="max-w-3xl text-xl leading-9 text-[#34383a]">
              Referrals are handled with written communication, considered treatment planning, coordination with the referring clinician, and appropriate handback for maintenance and continued care.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Written reports", text: "Communication at consultation and throughout the treatment pathway.", icon: FileText },
                { title: "Coordinated care", text: "Planning aligned with the referring clinician and wider restorative team.", icon: Handshake },
                { title: "Respectful handback", text: "Patients return to the wider dental team where appropriate.", icon: UserRoundCheck },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <Eyebrow>Cases Commonly Referred</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Complex cases, calmly structured.
            </h2>
          </Reveal>
          <Reveal>
            <LuxuryAccordion
              items={[
                { title: "Advanced periodontitis", text: "Diagnosis, stabilisation planning, and ongoing periodontal support for complex disease patterns.", meta: "Periodontal" },
                { title: "Recession defects suitable for grafting", text: "Soft tissue assessment for root coverage, reinforcement, and aesthetic gum-line concerns.", meta: "Soft tissue" },
                { title: "Crown lengthening", text: "Aesthetic and restorative crown lengthening planned around tissue architecture and tooth structure.", meta: "Restorative" },
                { title: "Implants in compromised sites", text: "Implant planning where periodontal history, bone, or soft tissue conditions require specialist input.", meta: "Implant" },
                { title: "Peri-implantitis", text: "Specialist assessment and management of inflammation and bone loss around implants.", meta: "Implant maintenance" },
                { title: "Second opinions and complex planning", text: "Support for multidisciplinary cases requiring periodontal judgement within the wider plan.", meta: "Planning" },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-12 max-w-2xl">
            <Eyebrow>Patient Pathway</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              What your patient receives.
            </h2>
          </Reveal>
          <Reveal>
            <ProcessSteps
              items={[
                "Specialist consultation",
                "Full diagnostic assessment",
                "Written treatment plan",
                "Treatment and reporting",
                "Return to the wider dental team where appropriate",
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#f4ecdf]">
        <Container className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <Reveal>
            <Eyebrow>Referral Form</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Send a referral.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#34383a]">
              This frontend prototype is ready for routing to Dr Menhadji and a selected practice once the operational workflow is confirmed.
            </p>
          </Reveal>
          <Reveal>
            <FormPanel>
              <div>
                <h3 className="font-display text-3xl text-[#0b1422]">Referrer details</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <Field label="Referring dentist name" name="dentist-name" required />
                  <Field label="GDC number" name="gdc-number" required />
                  <Field label="Practice name" name="practice-name" required />
                  <Field label="Email" name="dentist-email" type="email" required />
                  <Field label="Phone" name="dentist-phone" type="tel" />
                </div>
              </div>
              <div>
                <h3 className="font-display text-3xl text-[#0b1422]">Patient details</h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <Field label="Patient full name" name="patient-name" required />
                  <Field label="Patient date of birth" name="patient-dob" type="date" required />
                  <Field label="Patient address" name="patient-address" required />
                  <Field label="Patient mobile" name="patient-mobile" type="tel" />
                  <Field label="Patient email" name="patient-email" type="email" />
                </div>
              </div>
              <SelectField label="Reason for referral" name="reason-type">
                <option>Advanced periodontitis (Stage III–IV)</option>
                <option>Recession defect suitable for grafting</option>
                <option>Crown lengthening (functional or aesthetic)</option>
                <option>Implants in a compromised site / bone augmentation</option>
                <option>Peri-implantitis</option>
                <option>Second opinion / complex treatment planning</option>
              </SelectField>
              <TextArea label="Reason for referral (details)" name="reason" required />
              <div className="grid gap-6 sm:grid-cols-2">
                <SelectField label="Urgency" name="urgency">
                  <option>Routine</option>
                  <option>Soon</option>
                  <option>Urgent</option>
                </SelectField>
                <label className="block text-sm font-medium text-[#34383a]">
                  Radiographs, photographs, reports
                  <input className="mt-4 w-full rounded-full border border-[#dacbb8] bg-[#f8f2e8] p-2 text-sm text-[#34383a] file:mr-4 file:rounded-full file:border-0 file:bg-[#061426] file:px-5 file:py-3 file:text-[#f8f2e8] file:transition file:duration-300 hover:file:bg-[#b88742] hover:file:text-[#061426]" name="files" type="file" multiple />
                </label>
              </div>
              <TextArea label="Relevant medical history / medications" name="medical-history" />
              <Checkbox label="I confirm the patient has consented to this referral." name="consent" />
              <button className="focus-ring inline-flex w-fit items-center gap-3 rounded-full border border-[#061426] bg-[#061426] px-7 py-4 text-sm font-semibold text-[#f8f2e8] transition duration-300 hover:-translate-y-0.5 hover:bg-[#b88742] hover:text-[#061426]" type="button">
                Submit referral
                <Send className="size-4" strokeWidth={1.6} />
              </button>
            </FormPanel>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              CPD and education.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-[#34383a]">
              Dr Menhadji is available for selected study club and CPD evening enquiries where periodontal diagnosis, soft tissue management, implant maintenance, and referral planning would support the audience.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="secondary">Professional enquiry</Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </main>
  );
}
