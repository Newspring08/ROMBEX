"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, easeOut } from "framer-motion";
import { cn } from "@/lib/utils";

export function Trust() {
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut },
    },
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: easeOut, delay: 0.2 },
    },
  };

  return (
    <section className="px-6 mt-5 lg:mt-10 max-w-screen-xl mx-auto">
      <div className="relative bg-black text-white rounded-xl overflow-hidden">
        {/* Dotted Background */}
        <div
          className={cn(
            "absolute inset-0 z-0",
            "[background-size:20px_20px]",
            "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
            "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
          )}
        />

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-10 lg:p-10 items-center min-h-[30rem]">
          {/* Left: Phone Image */}
          <motion.div
            className="hidden sm:block"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <Image
              src="/phone2.png"
              alt="Mobile app security interface"
              width={600}
              height={700}
              className="w-full h-auto max-w-sm sm:max-w-md mx-auto hover:scale-105 transition-transform"
              priority
            />
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center md:text-left space-y-4"
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 space-x-2"
              variants={fadeUp}
            >
              <span className="text-orange-400">🔥</span>
              <span className="text-xs font-medium">TRUST-WORTHINESS</span>
            </motion.div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight">
              We Value Your Trust
              <br />
              And Security
            </h2>

            {/* Description */}
            <p className="text-xs sm:text-sm lg:text-sm leading-6  max-w-xl mx-auto md:mx-0">
              Sleep easy knowing your assets are protected by 256-bit encryption,
              biometric authentication, and 24/7 monitoring.
            </p>

            {/* CTA */}
            <div className="pt-4 flex justify-center md:justify-start">
              <Button className="flex items-center gap-2 px-4 py-4 lg:px-6 lg:py-5 text-white border border-white bg-black hover:scale-105 transition-transform text-xs sm:text-sm font-medium rounded-md">
                Get Started
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
