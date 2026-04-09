import type { Metadata } from "next";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: "MR. DEN Barbershop",
  description:
    "A cinematic Next.js website for MR. DEN Barbershop in Phu Quoc, blending modern grooming with classic barbershop ritual.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
