import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Protein Palate - Healthy Meals & Meal Subscriptions in Hadapsar, Pune",
  description: "Nutritionist-approved high-protein meals, meal subscriptions, and healthy food delivery in Hadapsar, Pune. 25-30g protein per dish. Order on Zomato & Swiggy.",
  keywords: "protein meals, healthy food, meal subscription, Hadapsar, Pune, high protein, nutritionist approved, meal plans",
  authors: [{ name: "The Protein Palate" }],
  openGraph: {
    title: "The Protein Palate - Healthy Meals in Hadapsar, Pune",
    description: "Nutritionist-approved high-protein meals and meal subscriptions. Healthy doesn't mean boring!",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
