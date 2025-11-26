"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const products = [
  {
    id: 1,
    name: "Sleep Oils",
    description: "Pure essential oil blends for deep rest",
    details: "Lavender, Chamomile & Cedarwood",
    image: "/elegant-lavender-essential-oil-bottles-with-droppe.jpg",
  },
  {
    id: 2,
    name: "Diffusers",
    description: "Elegant ultrasonic aromatherapy diffusers",
    details: "Whisper-quiet with LED ambient lighting",
    image: "/modern-white-ceramic-aroma-diffuser-releasing-mist.jpg",
  },
  {
    id: 3,
    name: "Weighted Blankets",
    description: "Calming pressure for restful sleep",
    details: "Premium cotton with glass beads",
    image: "/soft-grey-weighted-blanket-on-cozy-minimalist-bed.jpg",
  },
]

export function ScienceSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section className="relative pt-16 pb-32 px-4 bg-gradient-to-b from-transparent to-twilight-lavender/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Scent Meets Science.</h2>
          <p className="text-xl text-midnight-navy/70 font-light max-w-2xl mx-auto text-balance">
            Our carefully curated collection combines ancient aromatherapy wisdom with modern sleep research
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link href="/shop" key={product.id}>
              <Card
                className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-misty-lilac/30 hover:border-misty-lilac transition-all duration-500 cursor-pointer group"
                onMouseEnter={() => setHoveredId(product.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Scent wave effect on hover */}
                {hoveredId === product.id && (
                  <div className="absolute inset-0 bg-gradient-radial from-misty-lilac/20 to-transparent animate-pulse pointer-events-none" />
                )}

                <div className="p-6 space-y-4">
                  <div className="relative h-72 overflow-hidden rounded-lg bg-gradient-to-br from-twilight-lavender/10 to-warm-sand/10">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-500 ${
                        hoveredId === product.id ? "scale-110" : "scale-100"
                      }`}
                    />
                    {hoveredId === product.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-misty-lilac/40 to-transparent animate-mist" />
                    )}
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-midnight-navy group-hover:text-misty-lilac transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-midnight-navy/70 font-light">{product.description}</p>
                    <p className="text-sm text-midnight-navy/50 italic">{product.details}</p>
                  </div>

                  <div className="flex items-center gap-2 text-midnight-navy/60 group-hover:text-misty-lilac transition-colors pt-2">
                    <span className="text-sm font-light">Explore Collection</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
