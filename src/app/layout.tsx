import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { SITE } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: `${SITE.name} | Best Auto Repair in Karachi`,
  description:
    "Canadian Pro Auto Workshop — expert car repair, engine diagnostics, A/C, brakes, oil change and more in Gulistan-e-Johar, Karachi. Open 6 days a week.",
  keywords:
    "car workshop karachi, auto repair gulistan-e-johar, engine repair karachi, brake repair karachi, AC repair karachi, oil change karachi, mechanic near me",
  openGraph: {
    title: `${SITE.name} | Best Auto Repair in Karachi`,
    description: "Professional auto repair & maintenance in Gulistan-e-Johar, Karachi.",
    type: "website",
    locale: "en_PK",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
