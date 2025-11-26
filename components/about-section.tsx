"use client"

import { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-twilight-lavender/30 to-pale-cream"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-serif text-5xl md:text-6xl text-midnight-navy text-balance">About Dreamoras</h2>

            <div className="space-y-4 text-midnight-navy/80 font-light leading-relaxed text-lg">
              <p>
                Born from the art of calm — Dreamoras blends aromatherapy with design to help you create nightly rituals
                that restore body and mind.
              </p>
              <p>
                We believe that better sleep starts with creating the right environment. Our carefully curated products
                combine ancient aromatherapy wisdom with modern sleep science to help you unwind naturally.
              </p>
              <p>
                Every product is thoughtfully designed to bring tranquility into your space, using only the highest
                quality, sustainably sourced ingredients.
              </p>
            </div>

            
          </div>

          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src="/serene-aromatherapy-setup.jpg"
                alt="Peaceful bedroom scene"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating moon and stars animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-radial from-warm-sand/40 to-transparent animate-float"
          style={{ opacity: scrollProgress }}
        />
        <div
          className="absolute top-1/3 right-1/4 w-4 h-4 bg-misty-lilac/60 rounded-full animate-shimmer"
          style={{ opacity: scrollProgress, animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-sage-green/60 rounded-full animate-shimmer"
          style={{ opacity: scrollProgress, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-2 h-2 bg-warm-sand/60 rounded-full animate-shimmer"
          style={{ opacity: scrollProgress, animationDelay: "1.5s" }}
        />
      </div>
    </section>
  )
}
