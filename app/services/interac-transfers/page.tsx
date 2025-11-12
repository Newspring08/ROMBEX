"use client";
import Link from "next/link";
import {
  ArrowLeftRight,
  Shield,
  Clock,
  Globe,
  CheckCircle2,
  ArrowLeft,
  Zap,
  DollarSign,
  Users,
} from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function InteracTransfersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const featureCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Shield,
      title: "Bank-Level Security",
      description:
        "Every transaction is protected with end-to-end encryption and multi-factor authentication",
    },
    {
      icon: Clock,
      title: "Instant Transfers",
      description:
        "Send money in seconds and recipients can deposit funds immediately with auto-deposit",
    },
    {
      icon: Globe,
      title: "Nationwide Access",
      description:
        "Send to anyone in Canada with an email or mobile number - no bank details needed",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Transfers are completed instantly, available 24/7 including weekends and holidays",
    },
    {
      icon: DollarSign,
      title: "Low Fees",
      description:
        "Competitive rates with no hidden charges - see exactly what you pay upfront",
    },
    {
      icon: Users,
      title: "Trusted by Millions",
      description:
        "Join millions of Canadians who trust Interac e-Transfer for their payments",
    },
  ];

  const benefits = [
    "No minimum or maximum transfer limits",
    "Request money from others easily",
    "Add personal messages with transfers",
    "Full transaction history and receipts",
    "Email and SMS notifications",
    "Auto-deposit for recurring payments",
  ];

  useEffect(() => {
    // Hero section animation
    const heroElements = heroRef.current?.querySelectorAll(".hero-animate");
    if (heroElements) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    }

    // Features section animation
    if (featuresRef.current) {
      gsap.from(featuresRef.current.querySelector(".features-title"), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Feature cards stagger animation
    featureCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.6,
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
      gsap.from(ctaRef.current.querySelectorAll(".cta-animate"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        ref={heroRef}
        className="max-w-7xl mx-auto px-6 pt-20 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
      >
        {/* Left content */}
        <div
          className="md:space-y-6 space-y-5"
          style={{
            backgroundImage: `url('/background-pattern.svg')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          {/* Icon */}
          <div className="flex items-start hero-animate">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-black rounded-2xl flex items-center justify-center shadow-lg">
              <ArrowLeftRight className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight hero-animate">
            Interac e-
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              Transfer
            </span>
          </h1>

          {/* Description */}
          <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl hero-animate">
            Experience instant and secure Interac e-Transfers for personal and
            business use. With Rombex, you can send and receive funds between
            Canadian accounts and international wallets in seconds....
          </p>

          {/* CTA Button */}
          <div className="hero-animate">
            <button className="px-8 py-4 bg-black text-white rounded-full font-base hover:shadow-xl hover:scale-105 transition-all">
              Send Money Now
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="w-full flex justify-center lg:justify-center hero-animate">
          <div className="relative w-full max-w-lg aspect-square rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/services/interac-trans-image.jpg"
              alt="Interac e-Transfer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div ref={featuresRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="features-title">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Why Choose Interac e-Transfer?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            The most trusted way to send and receive money in Canada
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
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-14 h-14 bg-black-600 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-black" />
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

      {/* Benefits Section */}
      <div ref={benefitsRef} className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-black p-8 md:p-16 text-white shadow-2xl rounded-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl">
            Interac e-Transfer comes packed with features designed to make
            sending money effortless and secure
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="benefit-item flex items-start gap-4 bg-white/10 rounded-xl p-5 backdrop-blur-sm"
              >
                <CheckCircle2 className="w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-lg">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div ref={ctaRef} className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 cta-animate">
          Ready to Send Money?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto cta-animate">
          Join Thousands of Canadians who trust Rombex for fast, secure Interac
          e-Transfers
        </p>
        <div className="cta-animate">
          <button className="px-12 py-5 bg-black text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all hover:scale-105">
            Get Started with Rombex
          </button>
        </div>

        <div className="mt-8 text-sm text-gray-500 cta-animate">
          No credit card required • Free to download • Available on iOS &
          Android
        </div>
      </div>
    </main>
  );
}
