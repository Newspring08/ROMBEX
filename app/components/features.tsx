"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const textContent = entry.target.querySelector(".text-content");
            const imageContent = entry.target.querySelector(".image-content");

            if (textContent) {
              textContent.classList.remove(
                "opacity-0",
                "translate-x-[-60px]",
                "lg:translate-x-[-60px]",
                "translate-y-10",
                "lg:translate-y-0"
              );
              textContent.classList.add(
                "opacity-100",
                "translate-x-0",
                "translate-y-0"
              );
            }
            if (imageContent) {
              setTimeout(() => {
                imageContent.classList.remove(
                  "opacity-0",
                  "translate-x-[60px]",
                  "lg:translate-x-[60px]",
                  "translate-y-[-40px]",
                  "lg:translate-y-0"
                );
                imageContent.classList.add(
                  "opacity-100",
                  "translate-x-0",
                  "translate-y-0"
                );
              }, 300);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-content opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-[-60px] transition-all duration-1000 ease-out text-center lg:text-left">
            <div className="space-y-8">
              {/* Featured Badge */}
              <motion.div
                variants={scaleFade}
                transition={{ duration: 2, ease: "easeOut" }}
                className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
              >
                <span className="text-orange-400">🔥</span>
                <span className="text-black text-sm font-medium">
                  ABOUT UPGRADE
                </span>
              </motion.div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                ALL THE FEATURES
                <br />
                IN ONE APP
              </h2>

              {/* Feature List */}
              <div className="space-y-6 text-left max-w-lg mx-auto lg:mx-0">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Get 3% Cash Back On Everyday Purchases, 2% On Everything
                    Else4
                  </p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    Extra Spending Power When You Have Rewards Checking Through
                    Upgrade6
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="pt-4">
                <Button className="bg-emerald-500  text-white px-6 sm:px-8 py-4 sm:py-8 text-base sm:text-lg rounded-md group transition-all duration-300 shadow-lg  hover:bg-white hover:text-emerald-500 cursor-pointer w-full sm:w-auto">
                  Get Started
                  <div className="ml-3 w-6 h-6 sm:w-8 sm:h-8 bg-emerald-600 rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 transition-transform" />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="image-content opacity-0 translate-y-[-40px] lg:translate-y-0 lg:translate-x-[60px] transition-all duration-1000 ease-out order-first lg:order-last">
            <div className="relative">
              <Image
                src="/phones.png"
                alt="Mobile banking app features showing My Cards interface and card settings with two smartphones displaying account management and payment controls"
                width={800}
                height={600}
                className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-2xl mx-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
