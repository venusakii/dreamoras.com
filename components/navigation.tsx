"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu, X, ShoppingCart } from "lucide-react"
import Link from "next/link"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Shop", href: "/shop" },
    { name: "Sleep Collection", href: "/sleep-collection" },
    { name: "Aromatherapy", href: "/aromatherapy" },
    { name: "About", href: "/about" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-misty-lilac/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-3xl text-midnight-navy tracking-tight">
          Dreamoras
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-midnight-navy hover:text-misty-lilac transition-colors font-light"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-midnight-navy">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-misty-lilac/20">
          <div className="px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block text-midnight-navy hover:text-misty-lilac transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Button className="w-full bg-midnight-navy text-pale-cream hover:bg-midnight-navy/90 gap-2">
              <ShoppingCart className="w-4 h-4" />
              Cart
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
