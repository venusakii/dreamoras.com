import { Navigation } from "@/components/navigation"
import { DreamRitualSection } from "@/components/dream-ritual-section"
import { VideoSection } from "@/components/video-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function SleepCollectionPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-white to-misty-lilac/20 relative overflow-hidden">
      <FloatingParticles />
      <Navigation />

      <div className="pt-32 pb-20">
        

        <DreamRitualSection />
        <VideoSection />
      </div>

      <NewsletterSection />
      <Footer />
    </main>
  )
}
