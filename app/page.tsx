"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "./components/nav";
import { motion } from "framer-motion";

export default function HomePage() {
  // Animation variants
  const fadeSlide = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0 },
  };

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Main Content with Background Pattern */}
      <main
        className=""
        style={{
          backgroundImage: `url('/background-pattern.svg')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* Content Container */}
        <div className="relative z-10 px-4 py-16 lg:py-24">
          <div className=" lg:max-w-6xl px-6  mx-auto grid lg:grid-cols-2  items-center justify-self-start">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.2 }}
            >
              {/* Trust Badge */}
              <motion.div
                variants={scaleFade}
                transition={{ duration: 2, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="text-orange-400">🔥</span>
                <span className="text-white text-sm font-medium">
                  100% TRUSTED PLATFORM
                </span>
              </motion.div>

              {/* Hero Heading */}
              <motion.div
                variants={fadeSlide}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-4"
              >
                <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                  FINANCE WITH
                  <br />
                  SECURITY AND
                  <br />
                  <span className="text-lime-400">FLEXIBILITY</span>
                </h1>
              </motion.div>

              {/* Subheading */}
              <motion.div
                variants={fadeSlide}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-white/80 text-lg lg:text-xl max-w-lg leading-relaxed">
                  No-Fee Checking Account With Cash Back Rewards.
                  <br />
                  Enjoy Fee-Free Banking And Earn Cash Back On Your
                  <br />
                  Everyday Purchases.
                </p>
              </motion.div>

              {/* CTA Button */}
              <motion.div
                variants={scaleFade}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg rounded-md group">
                  Open Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
            {/* Right Column - Hero Image */}
            <div className="relative flex justify-center lg:justify-end">
              <motion.div
                className="relative w-full max-w-lg"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src="/hero-image.png"
                  alt="Upgrade mobile banking app interface showing account balance and credit cards"
                  width={1000}
                  height={600}
                  className="w-full h-auto mt-12"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
