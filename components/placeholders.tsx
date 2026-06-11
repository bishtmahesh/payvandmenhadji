import Image from "next/image";

type PlaceholderProps = {
  label: string;
  intent: string;
  variant?: "portrait" | "detail" | "wash";
  className?: string;
  src?: string;
  /** Tailwind object-position + optional scale override, e.g. "object-top scale-100" */
  position?: string;
};

export function EditorialImagePlaceholder({
  label,
  intent,
  variant = "portrait",
  className = "",
  src = "/images/dr-payvand-portrait.avif",
  position,
}: PlaceholderProps) {
  const crop =
    position ??
    (variant === "portrait"
      ? "object-[58%_52%] scale-100"
      : variant === "detail"
        ? "object-[60%_52%] scale-110"
        : "object-[58%_52%] scale-105");
  const overlay =
    variant === "portrait"
      ? "bg-gradient-to-t from-[#061426]/40 via-transparent to-transparent"
      : "bg-[#061426]/38 mix-blend-multiply";

  return (
    <figure
      className={`luxury-shadow relative min-h-[420px] overflow-hidden border border-[#dacbb8] bg-[#061426] ${className}`}
      data-photography-intent={intent}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes="(min-width: 1024px) 45vw, 100vw"
        className={`object-cover ${crop}`}
      />
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(215,179,111,0.13),transparent_28%)]" />
    </figure>
  );
}
