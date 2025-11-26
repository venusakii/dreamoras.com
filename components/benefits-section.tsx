"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const benefits = [
  {
    id: 1,
    name: "Lavender",
    benefit: "Calms mind & reduces anxiety",
    scientificName: "Lavandula angustifolia",
    color: "from-misty-lilac/40 to-misty-lilac/10",
    image: "/lavender-flowers-closeup-botanical.jpg",
  },
  {
    id: 2,
    name: "Sweet Orange",
    benefit: "Lifts mood & energizes",
    scientificName: "Citrus sinensis",
    color: "from-warm-sand/40 to-warm-sand/10",
    image: "/orange-citrus-slices-fresh-botanical.jpg",
  },
  {
    id: 3,
    name: "Chamomile",
    benefit: "Eases tension & soothes",
    scientificName: "Matricaria chamomilla",
    color: "from-sage-green/40 to-sage-green/10",
    image: "/chamomile-flowers-botanical.jpg", // Added chamomile flower image
  },
  {
    id: 4,
    name: "Cedarwood",
    benefit: "Grounds emotions & centers",
    scientificName: "Cedrus atlantica",
    color: "from-twilight-lavender/40 to-twilight-lavender/10",
    image: "/cedarwood-bark-texture-botanical.jpg", // Added cedarwood bark image
  },
  {
    id: 5,
    name: "Bergamot",
    benefit: "Relieves stress & uplifts",
    scientificName: "Citrus bergamia",
    color: "from-sage-green/40 to-sage-green/10",
    image: "/bergamot-citrus-fruit-botanical.jpg", // Added bergamot citrus image
  },
  {
    id: 6,
    name: "Ylang Ylang",
    benefit: "Promotes relaxation",
    scientificName: "Cananga odorata",
    color: "from-warm-sand/40 to-warm-sand/10",
    image: "/ylang-ylang-flowers-botanical.jpg", // Added ylang ylang flower image
  },
]

export function BenefitsSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section id="benefits" className="relative py-32 px-4 bg-gradient-to-b from-pale-cream to-twilight-lavender/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Aromatherapy Benefits</h2>
          <p className="text-xl text-midnight-navy/70 font-light max-w-2xl mx-auto text-balance">
            Each essential oil is carefully selected for its therapeutic properties backed by centuries of use and
            modern research
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <Card
              key={benefit.id}
              className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-none hover:shadow-2xl transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredId(benefit.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative z-10 p-8 space-y-4">
                <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                  <img
                    src={benefit.image || "/placeholder.svg"}
                    alt={benefit.name}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredId === benefit.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                <h3 className="font-serif text-3xl text-midnight-navy">{benefit.name}</h3>

                <p className="text-sm text-midnight-navy/50 italic">{benefit.scientificName}</p>

                <p className="text-midnight-navy/80 font-light leading-relaxed">{benefit.benefit}</p>
              </div>

              {/* Color bloom animation on hover */}
              {hoveredId === benefit.id && (
                <div className={`absolute inset-0 bg-gradient-radial ${benefit.color} animate-pulse`} />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
