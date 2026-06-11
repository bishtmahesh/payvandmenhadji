import type { Metadata } from "next";
import { PolicyPlaceholder } from "@/components/policy-placeholder";

export const metadata: Metadata = {
  title: "Privacy Policy | Dr Payvand Menhadji",
  description: "Privacy policy for the practice of Dr Payvand Menhadji, Specialist Periodontist.",
};

export default function PrivacyPage() {
  return (
    <PolicyPlaceholder
      title="Privacy Policy"
      note="A UK GDPR-compliant privacy policy setting out how patient and enquiry data is collected, used and stored."
    />
  );
}
