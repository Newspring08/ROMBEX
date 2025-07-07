"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Globe,
  CreditCard,
  DollarSign,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

export function Services() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const gridItems = entry.target.querySelectorAll(".grid-item");
            gridItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.remove("opacity-0", "translate-y-8");
                item.classList.add("opacity-100", "translate-y-0");
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 lg:py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <span className=" font-semibold text-2xl lg:text-4xl tracking-wide uppercase">
            Rombex Services
            </span>
          </div>
          <h2 className="text-xs lg:text-sm lg:font-medium font-bold text-gray-900 leading-tight">
          Take advantage of the exchange rates we offer.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Phone Mockups - Spans 2 columns */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 h-full flex items-center justify-center">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative w-full max-w-md">
                <Image
                  src="/mockup.png"
                  alt="Mobile app interfaces showing transfer functionality and transaction details"
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>

          {/* Transfers Feature */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Transfers Across The Globe Are Free
              </h3>
            </div>
          </div>

          {/* Create Card Feature */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 h-full">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <CreditCard className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Create A Card That Is Unique And Customized
              </h3>
              <p className="text-gray-600 mb-6">
                We Offer A Comprehensive Range Of Innovative Financial Services
                Tailored To Meet Your Needs. Our Services Include High-Yield
                Savings Accounts.
              </p>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/stats.png"
                  alt="Welcome screen with analytics dashboard"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* Personalized Insights */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-2">
            <div className="bg-slate-900 rounded-2xl p-8 h-full text-white">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Personalized Insights And Financial Goals
              </h3>
              <p className="text-gray-300 mb-6">
                Savings Accounts That Offer Competitive Interest Rates And
                Flexible Deposit Options. Investment Invest Wisely With Our
                Personalized Our Services Include High-Yield Savings
              </p>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/dashboard.png"
                  alt="Financial dashboard showing balance and bonus information"
                  width={300}
                  height={200}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>

          {/* 100% Dedication */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="bg-lime-400 rounded-2xl p-8 h-full flex flex-col justify-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                100%
                <br />
                Dedication
              </h3>
              <p className="text-gray-800">
                We Offer A Comprehensive Range Of Innovative Financial Services
                Tailored To Meet Your Needs.
              </p>
            </div>
          </div>

          {/* Multi-Currency */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-center">
              <div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Hold Money In 30+ Currencies
              </h3>
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Image
                  src="/expense-D.png"
                  alt="Currency exchange chart and icons"
                  width={200}
                  height={120}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </div>

          {/* Visit Services Page */}
          <div className="grid-item opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2">
            <div className="bg-teal-600 rounded-2xl p-8 h-full flex flex-col justify-center text-white">
              <h3 className="text-3xl font-bold mb-6">
                Visit Our
                <br />
                Services Page
              </h3>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <ArrowRight className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center">
          <Button className="bg-emerald-500 hover:bg-white hover:text-emerald-700  cursor-pointer text-white px-8 py-4 lg:p-6 text-lg rounded-md group transition-all duration-300">
            View More
            <div className="ml-3 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center group-hover:bg-emerald-700 transition-colors">
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
