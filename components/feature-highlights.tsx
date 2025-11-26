"use client"

import { Card } from "@/components/ui/card"
import { Leaf, Droplets, Heart, Shield } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Pure essential oils sourced from organic farms worldwide",
    color: "sage-green",
  },
  {
    icon: Droplets,
    title: "Therapeutic Grade",
    description: "Highest quality oils tested for purity and potency",
    color: "misty-lilac",
  },
  {
    icon: Heart,
    title: "Sleep Science",
    description: "Formulated with sleep researchers for optimal results",
    color: "warm-sand",
  },
  {
    icon: Shield,
    title: "Safe & Gentle",
    description: "Hypoallergenic formulas safe for daily use",
    color: "twilight-lavender",
  },
]

export function FeatureHighlights() {
  return (
    <section className="relative py-20 px-4 bg-white/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="relative overflow-hidden bg-white/80 backdrop-blur-sm border-none hover:shadow-xl hover:shadow-misty-lilac/10 transition-all duration-500 p-8 group"
              >
                <div className="space-y-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-${feature.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-6 h-6 text-midnight-navy`} />
                  </div>
                  <h3 className="font-serif text-xl text-midnight-navy">{feature.title}</h3>
                  <p className="text-midnight-navy/70 font-light text-sm leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
