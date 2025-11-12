"use client";

import Image from "next/image";
import { Shield, Lock, Settings, Sparkles, Zap, Globe2 } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function VisionMissionSection() {
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const shieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Vision section animations
    if (visionRef.current) {
      const visionElements = visionRef.current.querySelectorAll('.vision-animate');
      gsap.from(visionElements, {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Mission section animations
    if (missionRef.current) {
      const missionElements = missionRef.current.querySelectorAll('.mission-animate');
      gsap.from(missionElements, {
        opacity: 0,
        x: -50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Shield scale animation
    if (shieldRef.current) {
      gsap.from(shieldRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: shieldRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-20 lg:pt-26 bg-gradient-to-b from-white via-blue-50/30 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Vision Section */}
        <div ref={visionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left - Image Section */}
          <div className="relative vision-animate">
            {/* Floating Elements */}
            {/* <div className="absolute -top-6 -left-6 w-20 h-20 bg-purple-200 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full blur-2xl animate-pulse delay-700"></div> */}
            
            {/* Decorative Icons */}
            <div className="absolute top-8 -right-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float">
              <Sparkles className="w-6 h-6 text-blue-600" />
            </div>
            <div className="absolute bottom-12 -left-4 w-12 h-12 bg-white rounded-xl shadow-lg flex items-center justify-center animate-float-delayed">
              <Globe2 className="w-6 h-6 text-blue-600" />
            </div>

            {/* Gradient Background */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-purple-100 rounded-3xl -z-10 transform rotate-3"></div> */}

            {/* Main Image Container */}
            <div className="relative mx-auto max-w-[365px] rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500">
              {/* <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent z-10"></div> */}
              <Image
                src="/rombex/rombex-img3.png"
                alt="Fintech vision concept"
                width={500}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right - Vision Content */}
          <div className="space-y-6 flex flex-col items-start justify-start">
            <div className="vision-animate">
              <div className="inline-block">
                <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-widest bg-blue-100 px-4 py-2 rounded-full">
                  Vision
                </p>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl  font-medium text-gray-900 leading-tight vision-animate">
              Our Vision Is To Be The{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Leading Global Fintech
              </span>{" "}
              Solution
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg lg:text-xl vision-animate">
              We aim to empower individuals and businesses to achieve financial
              clarity and success. We strive to foster a world where managing money
              is simple, secure, and accessible to all.
            </p>

            <div className="flex gap-4 pt-4 vision-animate">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Innovative</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Global Reach</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm text-gray-600">Customer-First</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div ref={missionRef} className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          {/* Left - Mission Content */}
          <div className="order-2 lg:order-1 space-y-6">
            <div className="mission-animate">
              <div className="inline-block">
                <p className="text-blue-600 font-medium mb-2 uppercase text-sm tracking-widest bg-blue-100 px-4 py-2 rounded-full">
                  Mission
                </p>
              </div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl  font-medium text-gray-900 leading-tight mission-animate">
              Simplifying Finance With{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                Secure Technology
              </span>
            </h2>
            
            <p className="text-gray-600 leading-relaxed text-lg lg:text-xl mission-animate">
              We aim to build tools that enable users to gain clarity and control over their 
              finances while promoting trust and innovation. By cultivating a customer-centric approach, we ensure that every individual and business can 
              achieve long-term financial stability and success.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 mission-animate">
              <div className="bg-white rounded-xl p-4 shadow-md border border-blue-100">
                <Zap className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">Fast & Efficient</h4>
                <p className="text-sm text-gray-600">Lightning-speed transactions</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md border border-blue-100">
                <Shield className="w-8 h-8 text-blue-600 mb-2" />
                <h4 className="font-semibold text-gray-900 mb-1">Secure Always</h4>
                <p className="text-sm text-gray-600">Bank-grade protection</p>
              </div>
            </div>
          </div>

          {/* Right - Security Illustration */}
          <div className="order-1 lg:order-2 relative">
            {/* Background Glow */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-purple-200 via-blue-100 to-purple-200 rounded-3xl blur-3xl opacity-50"></div> */}
            
            {/* Main Content */}
            <div className="relative p-8 lg:p-12 flex items-center justify-center">
              {/* Decorative Gears */}
              <div className="absolute top-4 right-8 w-16 h-16 text-blue-300 opacity-60">
                <Settings className="w-full h-full animate-spin-slow" />
              </div>
              
              <div className="absolute bottom-8 left-8 w-12 h-12 text-blue-400 opacity-60">
                <Settings className="w-full h-full animate-spin-reverse" />
              </div>
              
              <div className="absolute top-16 left-12 w-10 h-10 text-blue-300 opacity-60">
                <Settings className="w-full h-full animate-spin-slow" />
              </div>

              <div className="absolute bottom-16 right-16 w-8 h-8 text-blue-400 opacity-60">
                <Settings className="w-full h-full animate-spin-reverse" />
              </div>

              {/* Shield with Lock */}
              <div ref={shieldRef} className="relative z-10">
                {/* Shield Background with Glow */}
                <div className="relative">
                  {/* Outer Glow */}
                  
                  
                  {/* Shield */}
                  <div className="relative w-72 h-80 bg-gradient-to-r from-blue-500 to-blue-800 rounded-[3.5rem] overflow-hidden shadow-2xl">
                    {/* Animated Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent animate-shimmer"></div>
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 animate-shine"></div>
                    
                    {/* Lock Container with Glass Effect */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-36 h-36 bg-white/20 backdrop-blur-xl rounded-3xl flex items-center justify-center border border-white/30 shadow-xl">
                        <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300">
                          <Lock className="w-12 h-12 text-blue-500" />
                        </div>
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute top-12 right-12 w-2 h-2 bg-white rounded-full animate-float"></div>
                    <div className="absolute bottom-16 left-16 w-2 h-2 bg-white rounded-full animate-float-delayed"></div>
                    <div className="absolute top-24 left-12 w-1.5 h-1.5 bg-white rounded-full animate-float"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes shimmer {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }

        :global(.animate-spin-slow) {
          animation: spin-slow 8s linear infinite;
        }

        :global(.animate-spin-reverse) {
          animation: spin-reverse 10s linear infinite;
        }

        :global(.animate-float) {
          animation: float 3s ease-in-out infinite;
        }

        :global(.animate-float-delayed) {
          animation: float-delayed 4s ease-in-out infinite;
        }

        :global(.animate-shimmer) {
          animation: shimmer 3s ease-in-out infinite;
        }

        :global(.animate-shine) {
          animation: shine 3s ease-in-out infinite;
        }

        :global(.delay-700) {
          animation-delay: 700ms;
        }
      `}</style>
    </section>
  );
}