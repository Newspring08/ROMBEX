"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Header } from "./components/nav";
import { motion } from "framer-motion";
import MarqueeSlider from "./components/marquee";
import Lenis from "@studio-freight/lenis";

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // ✅ Initialize Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing
      smooth: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
    <div ref={scrollContainerRef} className="min-h-screen">
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
        <div className="relative z-10 px-4 py-24 lg:py-24">
          <div className="container max-w-7xl px-6 mx-auto grid lg:grid-cols-2 mt-14 items-center justify-self-start">
            {/* Left Column - Text Content */}
            <motion.div
              className="space-y-8"
              initial="hidden"
              animate="show"
              transition={{ staggerChildren: 0.2 }}
            >
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

              <motion.div
                variants={scaleFade}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Button className="bg-emerald-500 hover:bg-white hover:text-emerald-500 cursor-pointer text-white px-8 py-6 text-lg rounded-md group">
                  Open Account
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <div className="relative flex justify-center lg:justify-end mt-12">
              <motion.div
                className="relative w-full max-w-xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <Image
                  src="/hero-image.png"
                  alt="Upgrade mobile banking app interface showing account balance and credit cards"
                  width={1000}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <MarqueeSlider />
    </div>
  );
}
