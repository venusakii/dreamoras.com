import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-twilight-lavender/10 to-pale-cream">
      <FloatingParticles />
      <Navigation />

      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Privacy Policy</h1>
            <p className="text-lg text-midnight-navy/70 font-light">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-midnight-navy/80">
            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Information We Collect</h2>
              <p className="font-light leading-relaxed">
                At Dreamoras, we collect information that you provide directly to us, such as when you create an
                account, subscribe to our newsletter, or contact us for support. This may include your name, email
                address, and preferences regarding our products.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">How We Use Your Information</h2>
              <p className="font-light leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 font-light">
                <li>Provide and improve our services</li>
                <li>Send you updates about products and promotions</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Analyze usage patterns to enhance user experience</li>
              </ul>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Amazon Associates Program</h2>
              <p className="font-light leading-relaxed">
                Dreamoras is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
                program designed to provide a means for sites to earn advertising fees by advertising and linking to
                Amazon.com. When you click on product links and make purchases, we may earn a commission at no
                additional cost to you.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Cookies</h2>
              <p className="font-light leading-relaxed">
                We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You
                can control cookie preferences through your browser settings.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Contact Us</h2>
              <p className="font-light leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at privacy@dreamoras.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
