export function VideoSection() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-5xl md:text-6xl text-center text-midnight-navy mb-8 text-balance">
          How Dreamoras Helps You Sleep.
        </h2>

        <p className="text-center text-xl text-midnight-navy/70 font-light mb-12 max-w-2xl mx-auto">
          Natural aromas + mindful design for restorative nights.
        </p>

        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-misty-lilac/30">
          {/* Lavender aura around video */}
          <div className="absolute -inset-4 bg-gradient-radial from-misty-lilac/30 to-transparent blur-xl" />

          <div className="relative aspect-video bg-gradient-to-br from-twilight-lavender to-warm-sand/30">
            <img
              className="w-full h-full rounded-3xl object-cover"
              src="/peaceful-bedroom-with-aromatherapy-diffuser.jpg"
              alt="How Dreamoras Helps You Sleep"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
