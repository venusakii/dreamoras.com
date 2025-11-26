import { Navigation } from "@/components/navigation"
import { ScienceSection } from "@/components/science-section"
import { BenefitsSection } from "@/components/benefits-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function AromatherapyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-white to-misty-lilac/20 relative overflow-hidden">
      <FloatingParticles />
      <Navigation />

      <div className="pt-32 pb-20">
        

        <ScienceSection />
        <BenefitsSection />
      </div>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
