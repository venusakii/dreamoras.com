import { Navigation } from "@/components/navigation"
import { AboutSection } from "@/components/about-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-white to-misty-lilac/20 relative overflow-hidden">
      <FloatingParticles />
      <Navigation />

      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center mb-16">
          <h1 className="font-serif text-5xl md:text-6xl text-midnight-navy mb-6 text-balance">About Dreamoras</h1>
          <p className="text-lg text-midnight-navy/70 max-w-2xl mx-auto text-pretty">
            Learn about our journey to create premium aromatherapy products that transform sleep and wellness.
          </p>
        </div>

        <AboutSection />
        <TestimonialsSection />
      </div>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
