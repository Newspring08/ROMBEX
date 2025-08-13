// app/layout.tsx

import type { Metadata } from "next";
import "./globals.css";
import { About } from "./components/about";
import { Poppins } from "next/font/google";
import { Features } from "./components/wobble-card";
import { Trust } from "./components/trust";
import { Testimonials } from "./components/testimonials";
import { LenisProvider } from "./components/lenisProvider";
import { Globe } from "./components/globe";
import Footer from "./components/footer";
import Blog from "./components/blog";
import { FeaturesSection } from "./components/rombex-service";
import Contact from "./components/contact";
import { Header } from "./components/nav";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Rombex",
  description: "A free banking app for transactions, savings, and loans.",
  keywords: ["Rombex Financial Services"],
  icons: {
    icon: "/logo.ico", // fallback if head.tsx is removed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <LenisProvider />
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
