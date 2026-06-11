import { BookOpenText, GraduationCap, Heart, MessageSquareText, Microscope, ScrollText } from "lucide-react";
import { Button } from "@/components/button";
import { EditorialList } from "@/components/content-blocks";
import { IconCards } from "@/components/icon-cards";
import { Container, Eyebrow, Section } from "@/components/layout";
import { LocationBlock } from "@/components/location-block";
import { EditorialImagePlaceholder } from "@/components/placeholders";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Dr Payvand Menhadji | Specialist Periodontist",
  description:
    "Specialist Periodontist trained at Guy's & St Thomas' and King's College London. Board member of the ADI and BSP.",
};

export default function AboutPage() {
  return (
    <main>
      <PremiumHero
        preheading="About Dr Menhadji"
        title="Specialist periodontist. Clinician. Researcher."
      >
        <div className="max-w-xl space-y-2">
          <p className="text-base leading-7 text-[#eee2d1]">
            BDS (Hons), BSc (Hons), MFDS RCS (Ed), MClinDent (Periodontology, Distinction), MPerio RCS (Eng), PgCert DentEd
          </p>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#d7b36f]">
            GDC Specialist Register (pending) — Periodontics · GDC No. 271199
          </p>
        </div>
      </PremiumHero>

      <Section>
        <Container className="grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <EditorialImagePlaceholder
              label="Dr Payvand Menhadji"
              intent="Conversational portrait of Dr Menhadji with warmth and specialist poise."
              className="aspect-[4/5]"
              src="/images/dr-payvand-hero.png"
              position="object-[76%_20%] scale-135"
            />
          </Reveal>
          <Reveal>
            <p className="text-2xl leading-10 text-[#34383a]">
              I am Dr Payvand Menhadji, a Specialist Periodontist working across central and west London. My work is dedicated to one thing: the long-term health of the gums, bone and soft tissues that support your teeth and implants — from treating gum disease in its earliest stages to rebuilding lost tissue with grafting and regenerative surgery, placing dental implants, and managing the failing implants that other clinicians refer to me.
            </p>
            <blockquote className="mt-12 border-l border-[#b88742] pl-8 font-display text-4xl leading-tight text-[#0b1422]">
              The best outcomes come from understanding the biology of a particular mouth, then doing as little as possible to correct it — and doing that little very well.
            </blockquote>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#eee2d1]">
        <Container>
          <Reveal className="mb-12 max-w-3xl">
            <Eyebrow>Training And Credentials</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Specialist training with academic depth.
            </h2>
          </Reveal>
          <Reveal>
            <IconCards
              items={[
                { title: "Specialist training", text: "Specialist periodontal training at King's College London, based at Guy's and St Thomas' Hospital — one of the largest specialist periodontal units in the country.", icon: GraduationCap },
                { title: "Dentistry", text: "Dentistry from the University of Liverpool with Honours and two distinctions.", icon: ScrollText },
                { title: "Biochemistry", text: "An earlier degree in Biochemistry at King's College London.", icon: Microscope },
              ]}
            />
          </Reveal>
          <Reveal className="mt-8 border border-[#dacbb8] bg-[#fbf7ef]/72 p-7">
            <h3 className="font-display text-3xl text-[#0b1422]">Postgraduate qualifications</h3>
            <p className="mt-3 leading-7 text-[#34383a]">
              Membership of the Faculty of Dental Surgery, Royal College of Surgeons of Edinburgh (MFDS RCS Ed); Master of Clinical Dentistry in Periodontology with Distinction (MClinDent); Membership in Periodontology, Royal College of Surgeons of England (MPerio RCS Eng); and a Postgraduate Certificate in Dental Education (PgCert DentEd).
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
          <Reveal>
            <Eyebrow>How I Work</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Clear diagnosis before treatment.
            </h2>
            <p className="mt-7 max-w-md leading-8 text-[#34383a]">
              Periodontics is a specialty of slow, careful gains. The best results come from understanding the biology of what is happening, then doing as little as possible to correct it — and doing that little very well.
            </p>
          </Reveal>
          <Reveal>
            <EditorialList
              items={[
                { title: "Diagnosis first", text: "A thorough diagnostic appointment before any treatment is offered." },
                { title: "Written plans", text: "Written, itemised treatment plans so you always know what is happening and why." },
                { title: "Conservative first", text: "Conservative, non-surgical care wherever possible. Surgery only when it will demonstrably improve the outcome." },
                { title: "Coordinated care", text: "Treatment planned alongside your general dentist, hygienist or orthodontist — not in a silo." },
                { title: "Honest prognosis", text: "Honest conversations about prognosis, including when a tooth is not worth saving." },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#061426] text-[#f8f2e8]">
        <Container>
          <Reveal className="mb-12 grid gap-8 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <Eyebrow>Research And Teaching</Eyebrow>
              <h2 className="font-display text-5xl leading-tight sm:text-6xl">
                Academic seriousness, translated clearly.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#eee2d1]/82">
              Staying at the leading edge of the field is part of the job — through research, professional education, and active roles within the specialist community.
            </p>
          </Reveal>
          <Reveal>
            <IconCards
              dark
              items={[
                { title: "Research", text: "Active researcher in periodontology, with publications in peer-reviewed journals.", icon: Microscope },
                { title: "Speaking", text: "Speaker at national and international conferences.", icon: MessageSquareText },
                { title: "Geistlich Next Generation", text: "Appointed a Next Generation clinician by Geistlich, a leading dental biomaterials company.", icon: Heart },
                { title: "Association of Dental Implantology", text: "Associate Fellow of the Association of Dental Implantology (ADI).", icon: GraduationCap },
                { title: "British Society of Periodontology", text: "Former Mono-Speciality Representative on the BSP Early Careers Group.", icon: ScrollText },
                { title: "International Team for Implantology", text: "Member of the ITI (International Team for Implantology).", icon: BookOpenText },
              ]}
            />
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-[#f4ecdf]">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Eyebrow>Outside The Surgery</Eyebrow>
            <h2 className="font-display text-5xl leading-tight text-[#0b1422] sm:text-6xl">
              Warmth without performance.
            </h2>
          </Reveal>
          <Reveal>
            <p className="text-xl leading-9 text-[#34383a]">
              Outside the surgery, much of my life revolves around family, food, and London. I love exploring the city through its restaurants, working my way through London's ever-changing food scene with friends and family.
            </p>
            <p className="mt-6 text-xl leading-9 text-[#34383a]">
              I am also a mother to my daughter, Delara — the most grounding and meaningful part of my life outside of dentistry. Motherhood has brought a different perspective to the way I approach my work and my relationships, reinforcing the importance of patience, balance, empathy, and being fully present with people.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section>
        <Container>
          <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Practice Locations</Eyebrow>
              <h2 className="font-display text-5xl text-[#0b1422]">Consultation access.</h2>
              <p className="mt-5 max-w-xl leading-8 text-[#34383a]">
                I see patients privately across central and west London. All consultations are by appointment.
              </p>
            </div>
            <Button href="/contact" variant="secondary">Contact</Button>
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
    </main>
  );
}
