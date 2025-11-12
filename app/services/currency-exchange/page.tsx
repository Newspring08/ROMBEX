"use client";

import Link from "next/link";
import {
  RefreshCw,
  TrendingUp,
  Globe2,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Sparkles,
  DollarSign,
  Users,
  BarChart3,
  Zap,
  Shield,
  Link2,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CurrencyExchangePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: TrendingUp,
      title: "Live Exchange Rates",
      description:
        "Real-time currency rates updated every second for accurate conversions",
    },
    {
      icon: DollarSign,
      title: "Competitive Pricing",
      description:
        "Smart exchange engine ensures you get the best rates in the market",
    },
    {
      icon: Zap,
      title: "Instant Processing",
      description:
        "Currency swaps completed in seconds with immediate confirmation",
    },
    {
      icon: Shield,
      title: "Transparent Reporting",
      description:
        "Complete visibility on conversion costs - no hidden fees ever",
    },
    {
      icon: Globe2,
      title: "Multiple Currencies",
      description:
        "Support for USD, EUR, GBP, CAD, NGN and many more global currencies",
    },
    {
      icon: BarChart3,
      title: "Low Slippage",
      description:
        "Minimal price impact even on large orders with our deep liquidity",
    },
  ];

  const currencies = [
    { code: "USD", name: "US Dollar", flag: "🇺🇸" },
    { code: "EUR", name: "Euro", flag: "🇪🇺" },
    { code: "GBP", name: "British Pound", flag: "🇬🇧" },
    { code: "CAD", name: "Canadian Dollar", flag: "🇨🇦" },
    { code: "NGN", name: "Nigerian Naira", flag: "🇳🇬" },
    { code: "JPY", name: "Japanese Yen", flag: "🇯🇵" },
    { code: "AUD", name: "Australian Dollar", flag: "🇦🇺" },
    { code: "CHF", name: "Swiss Franc", flag: "🇨🇭" },
  ];

  const useCases = [
    {
      icon: Users,
      title: "For Travelers",
      description:
        "Exchange currencies before your trip with the best rates and zero hassle",
    },
    {
      icon: Sparkles,
      title: "For Freelancers",
      description:
        "Get paid in any currency and convert to your local currency instantly",
    },
    {
      icon: TrendingUp,
      title: "For Businesses",
      description:
        "Handle multi-currency operations with ease and transparent pricing",
    },
  ];

  const benefits = [
    "No minimum exchange amount",
    "24/7 currency exchange availability",
    "Historical rate charts and analytics",
    "Rate alerts and notifications",
    "Multi-currency wallet support",
    "Instant conversion confirmations",
    "Transparent fee structure",
    "Competitive market rates",
  ];

  useEffect(() => {
    // Hero section animations
    const heroElements = heroRef.current?.querySelectorAll(".hero-animate");
    if (heroElements) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
      });
    }

    // Features section title animation
    if (featuresRef.current) {
      const featuresTitle =
        featuresRef.current.querySelector(".features-title");
      if (featuresTitle) {
        gsap.from(featuresTitle, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          scrollTrigger: {
            trigger: featuresTitle,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // Feature cards stagger animation
    featureCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 0.7,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }
    });

    // Benefits section animation
    if (benefitsRef.current) {
      const benefitItems =
        benefitsRef.current.querySelectorAll(".benefit-item");
      gsap.from(benefitItems, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: benefitsRef.current,
          start: "top 70%",
          toggleActions: "play none none none",
        },
      });
    }

    // CTA section animation
    if (ctaRef.current) {
      const ctaElements = ctaRef.current.querySelectorAll(".cta-animate");
      gsap.from(ctaElements, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-white py-10">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 pt-12 md:pt-28 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Content */}
        <div className="space-y-4">
          <div className="flex items-start hero-animate">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl flex items-center justify-center shadow-xl">
              <RefreshCw className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-medium text-gray-900 leading-tight hero-animate">
            Currency{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Exchange
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed hero-animate">
            Manage multiple currencies effortlessly within your Rombex wallet.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed hero-animate">
            We provide live exchange rates, allowing you to swap between USD,
            EUR, GBP, CAD, NGN, and more with complete visibility on conversion
            costs. Our smart exchange engine ensures competitive pricing,
            instant processing, and transparent reporting — so you always know
            exactly what you're getting.
          </p>

          <p className="text-base md:text-lg text-gray-600 leading-relaxed hero-animate mb-8">
            Perfect for travelers, freelancers, or global businesses handling
            multi-currency operations daily.
          </p>

          <div className="hero-animate">
            <Link href="/rates" className="px-8 py-4 bg-black md:mt-2.5 text-white rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Check Rates
            </Link>
          </div>
        </div>

        {/* Right - Image/Illustration */}
        <div className="hero-animate">
          <div className="relative flex items-center justify-end w-full max-w-xl aspect-square rounded-2xl overflow-hidden  ">
            <Image
              src="/rombex-EX.webp"
              alt="Interac e-Transfer"
              fill
              className="w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>

    
   
      {/* Features Grid */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="features-title">
          <h2 className="text-4xl font-medium text-center text-gray-900 mb-2">
            Smart Exchange Features
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Everything you need for seamless currency conversions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                ref={(el) => {
                  featureCardsRef.current[idx] = el;
                }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-black-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

     

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        :global(.animate-spin-slow) {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </main>
  );
}
