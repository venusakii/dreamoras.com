import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FloatingParticles } from "@/components/floating-particles"
import { MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-pale-cream via-twilight-lavender/10 to-pale-cream">
      <FloatingParticles />
      <Navigation />

      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h1 className="font-serif text-5xl md:text-7xl text-midnight-navy text-balance">Get In Touch</h1>
            <p className="text-lg text-midnight-navy/70 font-light max-w-2xl mx-auto">
              Have questions about our products or need help with your order? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-white/50 backdrop-blur rounded-3xl">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/contact-email-lavender-envelope.jpg" alt="Email" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-midnight-navy">Email</h3>
              <p className="text-midnight-navy/70 text-sm">support@dreamoras.com</p>
            </div>

            <div className="text-center p-8 bg-white/50 backdrop-blur rounded-3xl">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/contact-phone-lavender-flowers.jpg" alt="Phone" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-midnight-navy">Phone</h3>
              <p className="text-midnight-navy/70 text-sm">+1 314-346-6235</p>
            </div>

            <div className="text-center p-8 bg-white/50 backdrop-blur rounded-3xl">
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src="/contact-location-world-map.jpg" alt="Location" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-serif text-xl mb-2 text-midnight-navy">Location</h3>
              <p className="text-midnight-navy/70 text-sm">
                4772 Bruce Street
                <br />
                St Louis, MO 63101
                <br />
                United States
              </p>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur rounded-3xl p-8 mb-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <MapPin className="w-6 h-6 text-twilight-lavender" />
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-3 text-midnight-navy">Visit Us</h3>
                <div className="space-y-2 text-midnight-navy/70">
                  <p>4772 Bruce Street</p>
                  <p>St Louis, Missouri 63101</p>
                  <p>United States</p>
                  <p className="mt-4">Phone: +1 314-346-6235</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur rounded-3xl p-8 md:p-12">
            <h2 className="font-serif text-3xl mb-6 text-midnight-navy">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-midnight-navy mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-midnight-navy/20 focus:border-twilight-lavender focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-midnight-navy mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-midnight-navy/20 focus:border-twilight-lavender focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-midnight-navy mb-2">Message</label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl border border-midnight-navy/20 focus:border-twilight-lavender focus:outline-none transition-colors resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-midnight-navy text-pale-cream rounded-xl hover:bg-midnight-navy/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
