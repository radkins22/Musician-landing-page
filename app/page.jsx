import Hero from "@/components/hero"
import About from "@/components/about"
import Gallery from "@/components/gallery"
import VideoShowcase from "@/components/video-showcase"
import PassionSection from "@/components/passion-section"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export const metadata = {
  title: 'Reuben Adkins - Guitarist & Musician in Kearney, Nebraska',
  description: 'Reuben Adkins is a guitarist and musician based in Kearney, Nebraska. Discover his performances, original music, and upcoming shows.',
  openGraph: {
    title: 'Reuben Adkins - Kearney, Nebraska Guitarist & Musician',
    description: 'Official site of Reuben Adkins, guitarist and performer in Kearney, NE. Listen to music, view tour dates, and connect.',
    url: 'https://reubenadkins.com',
    siteName: 'Reuben Adkins',
    images: [
      {
        url: 'https://reubenadkins.com/assets/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Reuben Adkins playing guitar'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Reuben Adkins - Kearney, Nebraska Guitarist',
    description: 'Explore the music of Reuben Adkins, guitarist and songwriter from Kearney, NE. Check out new releases and live shows.',
    images: ['https://reubenadkins.com/assets/twitter-card.png'] // Replace with your actual image
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Gallery />
      <VideoShowcase />
      <PassionSection />
      <Contact />
      <Footer />
    </main>
  )
}
