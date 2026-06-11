import type { Metadata } from "next";
import { PolicyPlaceholder } from "@/components/policy-placeholder";

export const metadata: Metadata = {
  title: "Cookie Policy | Dr Payvand Menhadji",
  description: "Cookie policy for the practice of Dr Payvand Menhadji, Specialist Periodontist.",
};

export default function CookiesPage() {
  return (
    <PolicyPlaceholder
      title="Cookie Policy"
      note="How this site uses cookies, with granular consent for necessary, analytics and marketing categories."
    />
  );
}
