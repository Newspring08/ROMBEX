import React, { useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

// Type declarations for GSAP
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

export default function RombexBanner() {
  const containerRef = useRef<HTMLElement>(null)
  const badgeRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    // Load GSAP and ScrollTrigger via script tags
    const loadGSAP = () => {
      return new Promise<void>((resolve) => {
        if (window.gsap && window.ScrollTrigger) {
          resolve()
          return
        }

        const gsapScript = document.createElement('script')
        gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'
        gsapScript.onload = () => {
          const scrollTriggerScript = document.createElement('script')
          scrollTriggerScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
          scrollTriggerScript.onload = () => {
            window.gsap.registerPlugin(window.ScrollTrigger)
            resolve()
          }
          document.head.appendChild(scrollTriggerScript)
        }
        document.head.appendChild(gsapScript)
      })
    }

    const initAnimations = () => {
      if (!window.gsap || !window.ScrollTrigger) return

      const { gsap, ScrollTrigger } = window

      // Set initial states
      gsap.set([badgeRef.current, headingRef.current, descriptionRef.current, buttonRef.current], {
        opacity: 0,
        y: 30
      })
      
      gsap.set(imageRef.current, {
        opacity: 0,
        x: 50,
        scale: 0.95
      })

      // Create timeline for left content
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      })

      // Animate left content elements in sequence
      tl.to(badgeRef.current, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      })
      .to(headingRef.current, {
        duration: 0.8,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      }, "-=0.3")
      .to(descriptionRef.current, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      }, "-=0.4")
      .to(buttonRef.current, {
        duration: 0.6,
        opacity: 1,
        y: 0,
        ease: "power2.out"
      }, "-=0.3")

      // Animate image separately
      gsap.to(imageRef.current, {
        duration: 1,
        opacity: 1,
        x: 0,
        scale: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      })

      // Add hover animation for button
      const button = buttonRef.current
      if (button) {
        const handleMouseEnter = () => {
          gsap.to(button, {
            duration: 0.3,
            scale: 1.05,
            ease: "power2.out"
          })
        }

        const handleMouseLeave = () => {
          gsap.to(button, {
            duration: 0.3,
            scale: 1,
            ease: "power2.out"
          })
        }

        button.addEventListener('mouseenter', handleMouseEnter)
        button.addEventListener('mouseleave', handleMouseLeave)

        // Store cleanup functions
        return () => {
          button.removeEventListener('mouseenter', handleMouseEnter)
          button.removeEventListener('mouseleave', handleMouseLeave)
        }
      }

      // Parallax effect for image on scroll
      gsap.to(imageRef.current, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      })
    }

    let cleanup: (() => void) | undefined

    loadGSAP().then(() => {
      cleanup = initAnimations()
    })

    // Clean up function
    return () => {
      if (cleanup) cleanup()
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill())
      }
    }
  }, [])

  return (
    <main className="bg-white mt-6 sm:mt-8 mb-6 sm:mb-8">
      <section ref={containerRef} className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 max-w-7xl mx-auto">
          {/* Left Content Section */}
          <div className="bg-black px-6 sm:px-8 py-6 sm:py-8 lg:px-16 flex flex-col justify-center md:rounded-l-2xl">
            {/* Top Badge */}
            <div ref={badgeRef} className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-600/20 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-blue-200">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                Send money online
              </div>
            </div>

            {/* Main Heading */}
            <h1 ref={headingRef} className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-white leading-snug sm:leading-tight mb-4 sm:mb-6">
              International money transfers made easy
            </h1>

            {/* Description */}
            <p ref={descriptionRef} className="text-sm sm:text-base text-blue-100 leading-relaxed mb-6 sm:mb-8 max-w-lg">
              At Rombex, we make sending money fast, secure, and convenient. With just a few clicks, you can send money to
              over 190 countries worldwide. Join thousands who trust us daily for their money transfer needs.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
              <Button
                ref={buttonRef}
                variant="outline"
                size="lg"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 sm:px-8 py-4 sm:py-6 text-sm sm:text-base font-medium rounded-xl w-full xs:w-auto transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
              >
                Compare rates
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full">
              <img
                ref={imageRef}
                src="/rombex-EX.webp"
                alt="Hands holding smartphone showing money transfer app interface"
                className="w-full h-64 sm:h-80 md:h-full object-cover lg:rounded-r-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}