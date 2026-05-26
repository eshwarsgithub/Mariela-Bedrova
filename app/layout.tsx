import type { Metadata } from "next";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mariela Bedrova — Builder of Practical AI",
  description:
    "Entrepreneur, vibe-coder, CEO. Turning rough ideas into working products — fast — using AI, automation, and a deep allergy to unnecessary complexity.",
  keywords: [
    "AI entrepreneur",
    "AI automation",
    "vibe coding",
    "AI agents",
    "AI consulting",
    "Mariela Bedrova",
    "Plovdiv Bulgaria",
  ],
  authors: [{ name: "Mariela Bedrova" }],
  openGraph: {
    title: "Mariela Bedrova — Builder of Practical AI",
    description:
      "Practical AI platforms, automations, and rapid MVPs. Based in Plovdiv, Bulgaria.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={instrumentSerif.variable}>
      <body>{children}</body>
    </html>
  );
}
