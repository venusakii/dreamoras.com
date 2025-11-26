import Link from "next/link"

export function Footer() {
  return (
    <footer className="relative py-16 px-4 bg-gradient-to-b from-midnight-navy to-[#1a1a2e] text-pale-cream overflow-hidden">
      {/* Moving stars across the bottom */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-8 left-[10%] w-1 h-1 bg-warm-sand/60 rounded-full animate-shimmer" />
        <div
          className="absolute bottom-12 left-[30%] w-1 h-1 bg-misty-lilac/60 rounded-full animate-shimmer"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-6 left-[50%] w-1 h-1 bg-sage-green/60 rounded-full animate-shimmer"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-10 left-[70%] w-1 h-1 bg-warm-sand/60 rounded-full animate-shimmer"
          style={{ animationDelay: "1.5s" }}
        />
        <div
          className="absolute bottom-8 left-[90%] w-1 h-1 bg-misty-lilac/60 rounded-full animate-shimmer"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Dreamoras</h3>
            <p className="text-pale-cream/70 font-light text-sm">
              Creating nightly rituals that restore body and mind.
            </p>
          </div>

          

          

          <div>
            <h4 className="font-serif text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-pale-cream/70">
              <li>
                <Link href="/contact" className="hover:text-misty-lilac transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-misty-lilac transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-misty-lilac transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pale-cream/20 pt-8 space-y-4 text-center text-sm text-pale-cream/60">
          <p>© 2025 Dreamoras.com. All rights reserved.</p>
          <p>Participant in the Amazon Associates Program.</p>
          <p className="flex items-center justify-center gap-2">
            <span className="text-lg">🛒</span>
            As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  )
}
