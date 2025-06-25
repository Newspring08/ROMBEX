"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

export function Trust() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const fadeRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <section className="py-16 lg:py-24 px-6 bg-background from-slate-900 via-blue-900 to-teal-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Phone Mockup */}
          <motion.div
            className="order-last lg:order-first"
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative flex justify-center lg:justify-start">
              <Image
                src="/phone-security.png"
                alt="Mobile app security interface"
                width={600}
                height={700}
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg mx-auto lg:mx-0"
                priority
              />
            </div>
          </motion.div>

          {/* Right Content - Text */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center lg:text-left"
          >
            <div className="space-y-8">
              {/* Badge */}
              <motion.div
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                variants={fadeUp}
              >
                <span className="text-orange-400">🔥</span>
                <span className="text-white text-sm font-medium">
                  TRUST-WORTHINESS
                </span>
              </motion.div>

              {/* Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                WE VALUE YOUR TRUST
                <br />
                AND SECURITY
              </h2>

              {/* Description */}
              <p className="text-gray-300 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our Mission Is To Make Finance More Accessible, Transparent, And
                Secure For Everyone. With Cutting.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <Button className="bg-emerald-500 hover:bg-white hover:text-emerald-500 cursor-pointer text-white px-6 sm:px-8 py-4 sm:py-6 p-4 text-base sm:text-lg rounded-md group transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
                  Get Started
                  <div className="ml-3 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 text-emerald-500 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
