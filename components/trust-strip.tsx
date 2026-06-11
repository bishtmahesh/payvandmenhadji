const credentials = [
  {
    label: "GDC Specialist Register",
    descriptor: "Periodontics",
  },
  {
    label: "Trained at",
    descriptor: "Guy's & St Thomas' / King's College London",
  },
  {
    label: "Associate Fellow",
    descriptor: "Association of Dental Implantology",
  },
  {
    label: "Member",
    descriptor: "British Society of Periodontology",
  },
  {
    label: "Member",
    descriptor: "International Team for Implantology",
  },
];

export function TrustStrip() {
  return (
    <section className="border-y border-[#d7b36f]/18 bg-[#061426] px-5 py-6 text-[#f8f2e8] sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden border-[#d7b36f]/16 sm:grid-cols-2 lg:grid-cols-5 lg:border-x">
        {credentials.map((item) => (
          <div
            key={`${item.label}-${item.descriptor}`}
            className="border-[#d7b36f]/16 py-4 sm:px-5 lg:border-l lg:first:border-l-0"
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[#d7b36f]">
              {item.label}
            </p>
            <p className="mt-2 text-sm leading-6 text-[#eee2d1] sm:text-[0.95rem]">
              {item.descriptor}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
