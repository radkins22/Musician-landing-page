import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* <div className="absolute inset-0 z-0">
        <Image
          src="/images/guitar-blue.jpeg"
          alt="Guitar close-up with blue lighting"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
      </div> */}

      {/* Guitar silhouette behind the name */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center opacity-20">
        <Image
          src="/images/guitar-electric.jpeg"
          alt="Electric guitar close-up"
          width={800}
          height={800}
          className="max-w-8xl object-contain"
        />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <h1 className="mb-4 text-white drop-shadow-lg">
          <span
            className="block text-5xl md:text-8xl font-bold font-display metal-effect mb-4 tracking-wider"
            data-text="REUBEN ADKINS"
          >
            REUBEN ADKINS
          </span>
          <span className="text-2xl md:text-4xl block mt-6 font-serif italic">50 Years of Musical Journey</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-gray-200">
          Guitarist, performer, and musical storyteller bringing joy to audiences through live bands, weddings, street
          dances, and events of all kinds
        </p>

        {/* Main Action Buttons with Performance Type Links Below */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          {/* Book a Performance Button with Solo Link */}
          <div className="flex flex-col items-center gap-3">
            <Button asChild className="bg-red-800 hover:bg-red-900 text-white px-8 py-6 text-lg">
              <a href="#contact">Book a Performance</a>
            </Button>
            <Button asChild variant="ghost" className="text-gray-300 hover:text-red-400 hover:bg-red-900/20 text-sm">
              <Link href="/solo">Solo Performances</Link>
            </Button>
          </div>

          {/* Explore Music Button with Band Link */}
          <div className="flex flex-col items-center gap-3">
            <Button
              asChild
              variant="outline"
              className="border-red-800 text-red-400 hover:bg-red-900/20 px-8 py-6 text-lg"
            >
              <a href="#videos">Explore Music</a>
            </Button>
            <Button asChild variant="ghost" className="text-gray-300 hover:text-red-400 hover:bg-red-900/20 text-sm">
              <Link href="/band">Band Performances</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-10 w-10 text-red-800" />
      </div>
    </section>
  )
}
