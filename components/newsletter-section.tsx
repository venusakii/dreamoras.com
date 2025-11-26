"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
  }

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-pale-cream to-twilight-lavender/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-serif text-5xl md:text-6xl text-midnight-navy mb-6 text-balance">Join the Dream Circle</h2>

        <p className="text-xl text-midnight-navy/70 font-light mb-12">
          Receive sleep tips, exclusive offers, and calming inspiration in your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <div className="relative flex-1">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={`h-14 bg-white/80 backdrop-blur-sm border-2 transition-all duration-300 ${
                isFocused ? "border-misty-lilac shadow-lg shadow-misty-lilac/20" : "border-misty-lilac/30"
              }`}
              required
            />
            {isFocused && (
              <div className="absolute -inset-2 bg-gradient-radial from-misty-lilac/20 to-transparent blur-xl pointer-events-none animate-pulse" />
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-14 bg-midnight-navy text-pale-cream hover:bg-midnight-navy/90 transition-all duration-300 hover:shadow-lg hover:shadow-misty-lilac/30 group px-8"
          >
            <span className="inline-block group-hover:scale-105 transition-transform">Subscribe & Relax</span>
          </Button>
        </form>
      </div>
    </section>
  )
}
