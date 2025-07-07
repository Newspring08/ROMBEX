import { Facebook, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import NewsletterForm from "./newsletter";
import Image from "next/image";

const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/pricing" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  talent: [
    { label: "Apply now", href: "/apply" },
    { label: "Interview Prep", href: "/interview-prep" },
  ],
  resources: [
    { label: "Integration", href: "/integration" },
    { label: "Integration Detail", href: "/integration-detail" },
    { label: "Sign Up", href: "/signup" },
  ],
  other: [
    { label: "Terms & conditions", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
    { label: "Cookies policy", href: "/cookies" },
  ],
};

const Footer = () => {
  return (
    <footer
      className="bg-black px-6 lg:px-24 py-16"
      style={{
        backgroundImage: `url('/background-pattern.svg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* Left Section - Brand and Newsletter */}
          <div className="lg:col-span-2 space-y-6 flex flex-col items-start">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2">
                <img
                  src="/r-logo.png"
                  alt="Logo"
                  className="h-9 w-auto object-contain"
                />
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  ROMBEX
                </span>
              </Link>
            </div>

            <div className="w-full max-w-md">
              <NewsletterForm />
              <p className="text-white text-xs mt-5 leading-relaxed">
                Experience the Ace Talent difference and unlock the true
                potential.
              </p>
            </div>
            <div className="flex gap-6">
              <Link
                href="https://play.google.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-white bg-black text-white rounded-lg shadow hover:bg-gray-900 transition-all"
              >
                <Image
                  src="/play-icon.png" // Make sure this path matches your public folder or static path
                  alt="Play Store"
                  width={24}
                  height={24}
                  className=" w-10 h-10 object-contain"
                />
                <div className="text-left">
                  <p className="text-xs">GET IT ON</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </Link>
              <Link
                href="https://apple.com/store/apps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-white bg-white text-black rounded-lg shadow transition-all"
              >
                <Image
                  src="/app-icon.png" // Make sure this path matches your public folder or static path
                  alt="Play Store"
                  width={24}
                  height={24}
                  className="w-10 h-10 object-contain"
                />
                <div className="text-left">
                  <p className="text-xs text-black">GET IT ON</p>
                  <p className="text-xs text-black font-semibold">Apple store</p>
                </div>
              </Link>
            </div>

            {/* <div className="flex space-x-4 mt-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition border border-gray-200"
                  aria-label={Icon.name}
                >
                  <Icon className="w-4 h-4 text-[#4775D3]" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Right Section - Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="space-y-4">
                <h3 className="text-white text-sm font-semibold uppercase tracking-wider">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white text-xs hover:text-gray-300 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="mt-5 md:mt-10"/>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-center text-white text-sm ">
            ©2025 ROMBEX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
