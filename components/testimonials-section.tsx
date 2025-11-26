"use client"

import { Card } from "@/components/ui/card"
import { useState, useEffect } from "react"

const testimonials = [
  {
    id: 1,
    name: "Emily Rose",
    text: "Dreamoras transformed my bedtime routine. I fall asleep so much faster now.",
    rating: 5,
  },
  {
    id: 2,
    name: "Daniel Clarke",
    text: "The lavender oil is pure magic. I feel calm within minutes of diffusing it.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sofia James",
    text: "Beautiful products with real results. My sleep quality has improved dramatically.",
    rating: 5,
  },
  {
    id: 4,
    name: "Harper L.",
    text: "The weighted blanket combined with the candles creates the perfect sleep sanctuary.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-center text-midnight-navy mb-16 text-balance">
          Customer Stories — Real Voices
        </h2>

        <div className="relative h-80">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`absolute inset-0 bg-white/70 backdrop-blur-sm border-misty-lilac/30 p-12 flex flex-col items-center justify-center text-center transition-all duration-1000 ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              {/* Quote mark mist graphics */}
              <div className="absolute top-8 left-8 text-8xl text-misty-lilac/20 font-serif leading-none">"</div>
              <div className="absolute bottom-8 right-8 text-8xl text-misty-lilac/20 font-serif leading-none rotate-180">
                "
              </div>

              <div className="relative z-10 space-y-6 max-w-2xl">
                <div className="flex justify-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-warm-sand text-2xl">
                      ⭐
                    </span>
                  ))}
                </div>

                <p className="text-2xl text-midnight-navy font-light leading-relaxed text-balance">
                  {testimonial.text}
                </p>

                <p className="font-serif text-xl text-midnight-navy/70">— {testimonial.name}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Carousel indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-midnight-navy w-8" : "bg-misty-lilac/40 hover:bg-misty-lilac/60"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
