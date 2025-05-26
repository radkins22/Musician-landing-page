import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import VideoShowcase from "@/components/video-showcase"
import PassionSection from "@/components/passion-section"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Gallery />
      <VideoShowcase />
      <PassionSection />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}
