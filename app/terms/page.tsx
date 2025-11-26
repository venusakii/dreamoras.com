import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-twilight-lavender/10 to-pale-cream">
      <FloatingParticles />
      <Navigation />

      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Terms of Service</h1>
            <p className="text-lg text-midnight-navy/70 font-light">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8 text-midnight-navy/80">
            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Acceptance of Terms</h2>
              <p className="font-light leading-relaxed">
                By accessing and using Dreamoras.com, you accept and agree to be bound by the terms and provisions of
                this agreement. If you do not agree to these terms, please do not use our website.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Use of Service</h2>
              <p className="font-light leading-relaxed mb-4">
                Our website provides information about aromatherapy products and links to purchase them on Amazon. You
                agree to use our service only for lawful purposes and in accordance with these Terms.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Affiliate Disclosure</h2>
              <p className="font-light leading-relaxed">
                Dreamoras participates in the Amazon Associates Program. When you click on product links and make
                purchases, we may earn a commission. This does not affect the price you pay and helps us maintain our
                website and continue providing valuable content about aromatherapy and sleep wellness.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Product Information</h2>
              <p className="font-light leading-relaxed">
                While we strive to provide accurate product information, all purchases are made through Amazon. Please
                refer to Amazon's product pages for the most current information, pricing, and availability. We are not
                responsible for any discrepancies or changes to products listed on third-party sites.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Intellectual Property</h2>
              <p className="font-light leading-relaxed">
                All content on this website, including text, graphics, logos, and images, is the property of Dreamoras
                and is protected by copyright laws. You may not reproduce, distribute, or use any content without our
                express written permission.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Limitation of Liability</h2>
              <p className="font-light leading-relaxed">
                Dreamoras shall not be liable for any indirect, incidental, special, or consequential damages arising
                out of or in connection with your use of our website or products purchased through affiliate links.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
              <h2 className="font-serif text-3xl mb-4 text-midnight-navy">Contact Information</h2>
              <p className="font-light leading-relaxed">
                For questions about these Terms of Service, please contact us at legal@dreamoras.com
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
