import Image from "next/image"

export default function PassionSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full fiery guitar background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/guitar-fire-bg.jpg"
          alt="Fiery guitar representing musical passion"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container relative z-10 px-4 text-center">
        <h2
          className="text-5xl md:text-7xl font-bold mb-6 text-white font-display metal-effect"
          data-text="THE FIRE WITHIN"
        >
          THE FIRE WITHIN
        </h2>
        <p className="text-2xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
          Five decades of passion, dedication, and musical excellence.
          <br />
          <span className="text-black font-black text-3xl md:text-4xl">The flame still burns bright.</span>
        </p>
      </div>
    </section>
  )
}
