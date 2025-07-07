"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "Personal Loan", href: "#" },
    { name: "One Card", href: "#" },
    { name: "Savings", href: "#" },
    { name: "Checking", href: "#" },
    { name: "Help", href: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full text-xs z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md text-gray-900"
          : "bg-transparent text-gray-800 text-xs"
      }`}
    >
      <div className="mx-auto w-full max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <nav className="py-4 lg:py-5 w-full">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/r-logo.png"
                alt="Upgrade Logo"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="text-lg sm:text-xl lg:text-2xl font-bold">
                ROMBEX
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Sign In Button & Mobile Menu Toggle */}
            <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4">
              <Button
                variant="outline"
                className="px-3 py-2 sm:px-4 sm:py-2.5 lg:px-6 lg:py-4 text-xs sm:text-sm lg:text-sm text-white bg-black border-black hover:bg-black/90 hover:text-white rounded-md transition duration-300"
              >
                Sign In
              </Button>

              {/* Mobile Menu Toggle */}
              <button
                className="block lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block lg:hidden w-full overflow-hidden"
              >
                <div className="border-t border-gray-100 pt-4">
                  <motion.div
                    className="flex flex-col space-y-4"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {navigationItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="text-sm font-medium hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
