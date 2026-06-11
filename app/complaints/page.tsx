import type { Metadata } from "next";
import { PolicyPlaceholder } from "@/components/policy-placeholder";

export const metadata: Metadata = {
  title: "Complaints Procedure | Dr Payvand Menhadji",
  description: "Complaints procedure for the practice of Dr Payvand Menhadji, Specialist Periodontist.",
};

export default function ComplaintsPage() {
  return (
    <PolicyPlaceholder
      title="Complaints Procedure"
      note="The practice complaints procedure, including the relevant ombudsman and Dental Complaints Service contact details."
    />
  );
}
