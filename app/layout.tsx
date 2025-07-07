import type { Metadata } from "next";
import "./globals.css";
import { About } from "./components/about";
import { Poppins } from 'next/font/google';
import { Features } from "./components/wobble-card";
import { Trust } from "./components/trust";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";
import { LenisProvider } from "./components/lenisProvider";
import { Globe } from "./components/globe";
import Footer from "./components/footer";
import Blog from "./components/blog";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // customize weights you need
  variable: '--font-poppins', // optional but recommended
});

 export const metadata  = {
  title: "Upgrade",
  icons: {
    icon: "/logo.ico"
 },
  keywords: [
    "upgrade",
    "nextjs",
    "react",
    "typescript",
    "ui",
    "components",
    "design system",
    "tailwindcss",
    "geist",
  ],
  description: "A free banking app for transactions, savings, and loans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased`}
      >
        <LenisProvider/>
        {children}
        <Globe />
        <Features />
        <Trust />
        <Services/>
        <Blog />
        <Footer />
      </body>
    </html>
  );
}
