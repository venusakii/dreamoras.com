"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Star, ShoppingBag } from "lucide-react"
import Link from "next/link"
import { products } from "@/lib/products-data"

export function BestsellersSection() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  return (
    <section
      id="bestsellers"
      className="relative py-32 px-4 bg-gradient-to-b from-twilight-lavender/20 via-twilight-lavender/40 to-transparent"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Our Bestsellers.</h2>
          <p className="text-xl text-midnight-navy/70 font-light max-w-2xl mx-auto text-balance">
            Discover why thousands choose these products for their nightly rituals
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card
              key={product.id}
              className="relative overflow-hidden bg-white/90 backdrop-blur-sm border-none hover:shadow-2xl hover:shadow-misty-lilac/30 transition-all duration-500 cursor-pointer group"
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="p-6 space-y-4">
                {product.badge && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-midnight-navy text-pale-cream text-xs rounded-full">
                    {product.badge}
                  </div>
                )}

                <div className="relative h-80 overflow-hidden rounded-lg bg-gradient-to-br from-twilight-lavender/10 to-warm-sand/10">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                      hoveredId === product.id ? "scale-110" : "scale-100"
                    }`}
                  />

                  {/* Aroma cloud animation on hover */}
                  {hoveredId === product.id && (
                    <>
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-misty-lilac/40 blur-xl animate-mist" />
                      <div
                        className="absolute top-12 left-1/3 w-20 h-20 rounded-full bg-sage-green/30 blur-xl animate-mist"
                        style={{ animationDelay: "0.5s" }}
                      />
                    </>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="font-serif text-xl text-midnight-navy group-hover:text-misty-lilac transition-colors">
                    {product.name}
                  </h3>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "fill-warm-sand text-warm-sand" : "text-midnight-navy/20"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-midnight-navy/60">{product.rating}</span>
                    <span className="text-xs text-midnight-navy/40">({product.reviews})</span>
                  </div>

                  <p className="text-lg font-serif text-twilight-lavender">{product.price}</p>
                </div>

                <Link href={`/product/${product.slug}`}>
                  <Button className="w-full bg-midnight-navy text-pale-cream hover:bg-midnight-navy/90 transition-all gap-2 group/btn">
                    <ShoppingBag className="w-4 h-4 group-hover/btn:scale-110 transition-transform" />
                    <span>Read more</span>
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
