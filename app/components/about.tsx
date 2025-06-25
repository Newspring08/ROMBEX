"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bitcoin, FileText, PieChart } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slideData = [
    {
      id: 0,
      title: "Expenses Tracker",
      description:
        "Our comprehensive selection of medications, supplements, and healthcare products.",
      leftContent: {
        title: "Monthly Expenses",
        amount: "$2,847.50",
        subtitle: "Decrease of 8% from last month",
        image: "/about-image-1.jpg",
        imageAlt:
          "Expenses tracking dashboard showing monthly spending breakdown",
        color: "from-purple-600 to-purple-800",
        icon: <PieChart className="h-6 w-6" />,
      },
    },
    {
      id: 1,
      title: "Crypto Connection",
      description:
        "From advanced imaging technology such as MRI and CT scanners to precision surgical tools.",
      leftContent: {
        title: "Crypto Portfolio",
        amount: "$12,459.80",
        subtitle: "Increase of 24% from last month",
        image: "/about-image-2.jpg",
        imageAlt: "Cryptocurrency portfolio dashboard with trading charts",
        color: "from-orange-600 to-orange-800",
        icon: <Bitcoin className="h-6 w-6" />,
      },
    },
    {
      id: 2,
      title: "Automated Invoicing",
      description:
        "We're committed to leveraging the latest innovations in medical technology.",
      leftContent: {
        title: "Invoice Analytics",
        amount: "$8,924.00",
        subtitle: "Increase of 15% from last month",
        image: "/about-image-3.png",
        imageAlt: "Invoice management dashboard showing payment analytics",
        color: "from-blue-600 to-blue-800",
        icon: <FileText className="h-6 w-6" />,
      },
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slideData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slideData.length]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const currentSlide = slideData[activeSlide];

  const scaleFade = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[100%]">
          {/* Left Side - Dynamic Content */}
          <div className="flex justify-end lg:mt-12">
            <Card className="w-full h-[500px] bg-white shadow-lg transition-all duration-500">
              <CardContent className=" h-full">
                <div
                  className={`bg-gradient-to-br ${currentSlide.leftContent.color} rounded-2xl p-6 text-white h-full flex flex-col justify-between transition-all duration-500`}
                >
                  <div className="mb-6">
                    <div className="flex items-center space-x-2 mb-2">
                      {currentSlide.leftContent.icon}
                      <h3 className="text-lg font-medium">
                        {currentSlide.leftContent.title}
                      </h3>
                    </div>
                    <div className="text-3xl font-bold mb-1">
                      {currentSlide.leftContent.amount}
                    </div>
                    <div className="text-sm text-white/80">
                      {currentSlide.leftContent.subtitle}
                    </div>
                  </div>

                  {/* Dynamic Chart */}
                  <div className="relative h-96">
                    <img
                      src={currentSlide.leftContent.image || "/placeholder.svg"}
                      alt={currentSlide.leftContent.imageAlt}
                      className="w-full h-94 object-cover rounded-lg transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Side - Slideshow Content */}
          <div className="space-y-8 h-full flex flex-col justify-center">
            {/* Header */}
            <div className="space-y-4">
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                ALL YOUR MONEY
                <br />
                NEEDS IN ONE APP
              </h2>
            </div>

            {/* Slideshow Content */}
            <div className="relative">
              {/* Slides */}
              <div className="space-y-4">
                {slideData.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`transition-all duration-500 cursor-pointer ${
                      index === activeSlide ? "transform scale-105" : ""
                    }`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <Card
                      className={`${
                        index === activeSlide
                          ? "border-l-4 border-l-emerald-500 bg-emerald-50 shadow-lg"
                          : "border border-gray-200 bg-white hover:shadow-md"
                      } transition-all duration-300`}
                    >
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3">
                          {slide.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {slide.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>

              {/* Slide Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {slideData.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveSlide(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === activeSlide ? "bg-emerald-500" : "bg-gray-300"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
