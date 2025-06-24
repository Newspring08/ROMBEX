"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="lg:px-64 mx-auto lg:h-24 lg:py-3 lg:gap-6 p-6 py-4 ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-emerald-500 rounded flex items-center justify-center">
              <span className="text-white font-bold text-lg">U</span>
            </div>
            <span className="text-emerald-500 text-xl font-semibold">
              upgrade
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-100 hover:text-emerald-500 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Sign In Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              className="border-emerald-500 lg:px-10 lg:py-5 text-emerald-500 hover:bg-emerald-500 hover:text-white"
            >
              Sign In
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-800" />
              ) : (
                <Menu className="h-6 w-6 text-gray-800" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-4 pb-4 border-t border-gray-100 overflow-hidden"
            >
              <motion.div
                className="flex flex-col space-y-4 pt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                {navigationItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 hover:text-emerald-500 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
