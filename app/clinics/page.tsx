import type { Metadata } from "next";
import { Button } from "@/components/button";
import { Container, Eyebrow, Section } from "@/components/layout";
import { LocationBlock } from "@/components/location-block";
import { PremiumHero } from "@/components/premium-hero";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Clinic Locations | Dr Payvand Menhadji",
  description:
    "Dr Payvand Menhadji sees patients privately across central and west London. Find clinic days, addresses and nearest transport for each practice.",
};

export default function ClinicsPage() {
  return (
    <main>
      <PremiumHero preheading="Clinic Locations" title="Consultation access.">
        <p className="max-w-xl text-xl leading-8 text-[#eee2d1]">
          I see patients privately across central and west London. All consultations are by appointment.
        </p>
      </PremiumHero>

      <Section>
        <Container>
          <Reveal className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <Eyebrow>Practice Locations</Eyebrow>
              <h2 className="font-display text-5xl text-[#0b1422]">Where to find me.</h2>
              <p className="mt-5 max-w-xl leading-8 text-[#34383a]">
                I see patients privately across central and west London. All consultations are by appointment.
              </p>
            </div>
            <Button href="/contact" variant="secondary">Contact</Button>
          </Reveal>
          <Reveal>
            <LocationBlock
              location={{
                practice: "Aspire Clinic",
                area: "Mortimer Street",
                address: "Mortimer Street, London",
                transport: "Oxford Circus Station",
                days: "Wednesday",
                website: "https://www.theaspireclinic.com/",
              }}
            />
            <LocationBlock
              location={{
                practice: "The Richmond Dentist",
                area: "Richmond",
                address: "20 Water Lane, Richmond, London TW9 1TJ",
                transport: "Richmond Station",
                days: "Tuesday",
                website: "https://therichmonddentist.co.uk/",
                logo: "/images/practices/richmond.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "Gardens Dental Centre",
                area: "Kew",
                address: "7 Royal Parade, Kew Gardens, Richmond TW9 3QD",
                transport: "Kew Gardens Station",
                days: "Monday",
                website: "https://www.gardensdentalcentre.com/the-team/",
                logo: "/images/practices/gardens.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "SW1 Dental Studio",
                area: "Westminster, SW1",
                address: "41–43 Great Peter Street, London SW1P 3LT",
                transport: "Westminster Station",
                days: "Thursday",
                website: "https://www.sw1dentalstudio.co.uk/dr-payvand-menhadji",
                logo: "/images/practices/sw1.png",
              }}
            />
            <LocationBlock
              location={{
                practice: "Serene Dental",
                area: "London",
                address: "Address to be confirmed",
                transport: "Knightsbridge Station",
                days: "Wednesday",
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
