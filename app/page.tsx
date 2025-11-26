import { HeroSection } from "@/components/hero-section"
import { ScienceSection } from "@/components/science-section"
import { BestsellersSection } from "@/components/bestsellers-section"
import { DreamRitualSection } from "@/components/dream-ritual-section"
import { VideoSection } from "@/components/video-section"
import { BenefitsSection } from "@/components/benefits-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { AboutSection } from "@/components/about-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { FloatingParticles } from "@/components/floating-particles"
import { Navigation } from "@/components/navigation"
import { FeatureHighlights } from "@/components/feature-highlights"

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(/placeholder.svg?height=1080&width=1920&query=lavender+fields+at+sunset+purple+flowers+dreamy+soft+focus+peaceful+aromatherapy)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#e6dff2]/95 via-[#f5f0fa]/90 to-[#faf8f5]/95" />
      </div>

      <div className="relative z-10">
        <Navigation />
        <FloatingParticles />
        <HeroSection />
        <FeatureHighlights />
        <ScienceSection />
        <BestsellersSection />
        <DreamRitualSection />
        <VideoSection />
        <BenefitsSection />
        <TestimonialsSection />
        <AboutSection />
        <NewsletterSection />
        <Footer />
        <CookieBanner />
      </div>
    </main>
  )
}
