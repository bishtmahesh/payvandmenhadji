import Image from "next/image";
import { CalendarDays, Globe, MapPin, TrainFront } from "lucide-react";

type Location = {
  practice: string;
  area: string;
  address: string;
  transport: string;
  days: string;
  website?: string;
  logo?: string;
};

export function LocationBlock({ location }: { location: Location }) {
  return (
    <article className="border-t border-[#dacbb8] py-8 transition duration-300 hover:border-[#b88742]/70">
      <div className="grid gap-5 md:grid-cols-[0.75fr_1.25fr]">
        <div className="flex items-start gap-4">
          {location.logo ? (
            <span className="relative grid size-14 shrink-0 place-items-center overflow-hidden rounded-full border border-[#dacbb8] bg-white">
              <Image src={location.logo} alt={`${location.practice} logo`} width={48} height={48} className="object-contain p-1.5" />
            </span>
          ) : null}
          <div>
            <h3 className="font-display text-3xl leading-tight text-[#0b1422]">{location.practice}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b88742]">{location.area}</p>
          </div>
        </div>
        <dl className="grid gap-5 text-base leading-7 text-[#34383a] sm:grid-cols-2">
          <div className="flex gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-[#b88742]" strokeWidth={1.5} />
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b1422]">Address</dt>
              <dd>{location.address}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <TrainFront className="mt-0.5 size-5 shrink-0 text-[#b88742]" strokeWidth={1.5} />
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b1422]">Nearest transport</dt>
              <dd>{location.transport}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <CalendarDays className="mt-0.5 size-5 shrink-0 text-[#b88742]" strokeWidth={1.5} />
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b1422]">Days seen</dt>
              <dd>{location.days}</dd>
            </div>
          </div>
          <div className="flex gap-3">
            <Globe className="mt-0.5 size-5 shrink-0 text-[#b88742]" strokeWidth={1.5} />
            <div>
              <dt className="mb-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#0b1422]">Booking</dt>
              <dd>
                {location.website ? (
                  <a
                    href={location.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="focus-ring border-b border-[#b88742]/50 text-[#0b1422] transition hover:border-[#0b1422]"
                  >
                    Visit practice website
                  </a>
                ) : (
                  "Clinic link to be confirmed"
                )}
              </dd>
            </div>
          </div>
        </dl>
      </div>
    </article>
  );
}
