"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Header } from "./components/nav";
import MarqueeSlider from "./components/marquee";
import Lenis from "@studio-freight/lenis";
import { FaDownload, FaPlay } from "react-icons/fa6";
import { AnimatedTooltip } from "@/components/ui/animated-toolip";
import { Globe } from "./components/globe";
import { Features } from "./components/wobble-card";
import { FeaturesSection } from "./components/rombex-service";
import Blog from "./components/blog";
import Contact from "./components/contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const countries = [
  {
    id: 1,
    name: "Nigeria",
    image: "/toolip-image/nigeria.jpeg",
    designation: "West Africa",
  },
  {
    id: 2,
    name: "Ghana",
    image: "/toolip-image/ghana.jpeg",
    designation: "West Africa",
  },
  {
    id: 3,
    name: "Kenya",
    image: "/toolip-image/kenya.jpeg",
    designation: "East Africa",
  },
  {
    id: 4,
    name: "South Africa",
    image: "/toolip-image/south.jpeg",
    designation: "Southern Africa",
  },
  {
    id: 5,
    name: "Canada",
    image: "/toolip-image/canada.jpeg",
    designation: "North America",
  },
];

export default function HomePage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Initialize Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
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

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          badgeRef.current,
          titleRef.current,
          descriptionRef.current,
          buttonsRef.current,
          tooltipRef.current,
        ],
        {
          opacity: 0,
          y: 30,
        }
      );

      gsap.set(imageRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.95,
      });

      // Create timeline for hero section
      const tl = gsap.timeline({ delay: 0.2 });

      // Animate badge
      tl.to(badgeRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        // Animate title
        .to(
          titleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Animate description
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Animate buttons
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Animate tooltip
        .to(
          tooltipRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        // Animate hero image
        .to(
          imageRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.8"
        );

      // Scroll-triggered animations
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top center",
        end: "bottom center",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(imageRef.current, {
            y: progress * -50,
            duration: 0.3,
            ease: "none",
          });
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 lg:pt-12"
    >
      {/* Enhanced Main Content */}
      <main className="relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-blue-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-orange-200/20 to-transparent rounded-full blur-3xl"></div>

        <div className="relative z-10 px-4 pt-16">
          <div
            ref={heroRef}
            className="container max-w-7xl px-4 mx-auto md:px-10 grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left Column - Enhanced Text Content */}
            <div className="space-y-6 lg:space-y-8">
              {/* Trust Badge */}
              <div
                ref={badgeRef}
                className="inline-flex items-center bg-gradient-to-r from-orange-50 to-blue-50 backdrop-blur-sm rounded-full px-4 py-3 border border-orange-200/50 shadow-sm"
              >
                <span className="text-orange-500 mr-2">⭐</span>
                <span className="text-slate-700 text-xs md:text-sm font-medium">
                  Trusted by 1M+ customers worldwide
                </span>
              </div>

              {/* Main Heading */}
              <div ref={titleRef}>
                <h1 className="text-3xl xl:text-6xl font-medium text-slate-900 leading-tight tracking-tight">
                  Next-Gen{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    Financial
                  </span>{" "}
                  Solution
                </h1>
              </div>

              {/* Description */}
              <div ref={descriptionRef}>
                <p className="text-gray-600 text-base lg:text-base max-w-xl leading-relaxed">
                  ROMBEX delivers innovative financial services with unmatched
                  transparency and security. Experience banking reimagined for
                  the digital age.
                </p>
              </div>

              {/* Enhanced Action Buttons */}
              <div
                ref={buttonsRef}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 w-full sm:w-auto"
              >
                <button className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-black hover:from-slate-900 hover:to-black inline-flex items-center justify-center text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                  <FaDownload className="mr-2 sm:mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Download App
                </button>

                <button className="group w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-white border-2 border-slate-200 font-semibold rounded-full inline-flex items-center justify-center transition-all duration-300 transform hover:scale-105">
                  <FaPlay className="mr-2 sm:mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Demo
                </button>
              </div>

              {/* Countries Tooltip */}
              <div
                ref={tooltipRef}
                className="pt-4 flex sm:flex-row sm:items-center sm:gap-3"
              >
                <AnimatedTooltip items={countries} />
              </div>
            </div>

            {/* Right Column - Enhanced Hero Image */}
            <div ref={imageRef} className="relative">
              {/* Background decoration */}
             

              {/* Main image container */}
              <div className="relative backdrop-blur-sm rounded-2xl lg:p-8">
                <Image
                  src="/hero-image2.png"
                  alt="Modern financial app interface showing account balance and features"
                  width={1000}
                  height={600}
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-xl"
                  priority
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </main>

      <MarqueeSlider />
      <Globe />
      <Features />
      <FeaturesSection />
      <Blog />
      <Contact />
    </div>
  );
}
