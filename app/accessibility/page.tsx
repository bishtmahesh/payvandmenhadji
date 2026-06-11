import type { Metadata } from "next";
import { PolicyPlaceholder } from "@/components/policy-placeholder";

export const metadata: Metadata = {
  title: "Accessibility Statement | Dr Payvand Menhadji",
  description: "Accessibility statement for the practice of Dr Payvand Menhadji, Specialist Periodontist.",
};

export default function AccessibilityPage() {
  return (
    <PolicyPlaceholder
      title="Accessibility Statement"
      note="The practice's commitment to accessibility, targeting WCAG 2.2 AA."
    />
  );
}
