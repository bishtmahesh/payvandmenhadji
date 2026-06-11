import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentPageView } from "@/components/content-page";
import { getTreatment, treatments } from "@/data/site-content";

// gum-grafting and dental-implants have dedicated bespoke pages.
const bespoke = ["gum-grafting", "dental-implants"];

export function generateStaticParams() {
  return treatments.filter((t) => !bespoke.includes(t.slug)).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const page = getTreatment(slug);
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = getTreatment(slug);
  if (!page) notFound();
  return <ContentPageView page={page} />;
}
