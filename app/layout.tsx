import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.payvandmenhadji.com"),
  title: {
    default: "Specialist Periodontist London | Dr Payvand Menhadji",
    template: "%s",
  },
  description:
    "Dr Payvand Menhadji is a Specialist Periodontist in London providing gum disease treatment, gum grafting, dental implants and peri-implantitis care.",
  openGraph: {
    type: "website",
    siteName: "Dr Payvand Menhadji",
    locale: "en_GB",
    images: [
      {
        url: "/images/dr-payvand-hero.png",
        width: 1672,
        height: 941,
        alt: "Dr Payvand Menhadji, Specialist Periodontist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Specialist Periodontist London | Dr Payvand Menhadji",
    description:
      "Specialist periodontal and implant care in London — gum disease, gum grafting, dental implants and peri-implantitis.",
    images: ["/images/dr-payvand-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" data-scroll-behavior="smooth">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
