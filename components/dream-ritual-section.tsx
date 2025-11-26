"use client"

import { useEffect, useState, useRef } from "react"

const steps = [
  {
    id: 1,
    title: "Diffuse Calm",
    description: "Add 5-7 drops of essential oil to your diffuser",
    icon: "💨",
    animation: "mist",
  },
  {
    id: 2,
    title: "Light Serenity",
    description: "Ignite your favorite scented candle",
    icon: "🕯️",
    animation: "flicker",
  },
  {
    id: 3,
    title: "Breathe Deep",
    description: "Take 5 slow, mindful breaths",
    icon: "🌬️",
    animation: "pulse",
  },
  {
    id: 4,
    title: "Drift to Sleep",
    description: "Let the aromas carry you to dreamland",
    icon: "✨",
    animation: "shimmer",
  },
]

export function DreamRitualSection() {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const rect = sectionRef.current.getBoundingClientRect()
      const sectionHeight = rect.height
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (sectionHeight - window.innerHeight)))

      const newStep = Math.floor(scrollProgress * steps.length)
      setActiveStep(Math.min(newStep, steps.length - 1))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto -mt-12">
        <h2 className="font-serif text-5xl md:text-6xl text-center text-midnight-navy mb-24 text-balance sticky top-20">
          The Dream Ritual.
        </h2>

        <div className="space-y-32">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center transition-all duration-1000 ${
                activeStep >= index ? "opacity-100 translate-y-0" : "opacity-30 translate-y-20"
              }`}
            >
              <div className="relative mb-8">
                <div
                  className={`text-8xl ${
                    step.animation === "mist"
                      ? "animate-float"
                      : step.animation === "flicker"
                        ? "animate-shimmer"
                        : step.animation === "pulse"
                          ? "animate-breathe"
                          : "animate-shimmer"
                  }`}
                >
                  {step.icon}
                </div>
                {activeStep >= index && (
                  <div className="absolute inset-0 bg-misty-lilac/20 rounded-full blur-3xl animate-pulse" />
                )}
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 justify-center">
                  <span className="font-serif text-6xl text-misty-lilac/40">{step.id}</span>
                  <h3 className="font-serif text-4xl text-midnight-navy">{step.title}</h3>
                </div>
                <p className="text-xl text-midnight-navy/70 font-light max-w-md mx-auto">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
