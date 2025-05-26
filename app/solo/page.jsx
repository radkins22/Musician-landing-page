import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Music, Calendar, Users, Award } from "lucide-react"
import Footer from "@/components/footer"

export default function SoloPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-black/90 backdrop-blur-sm border-b border-red-900 sticky top-0 z-50">
        <div className="container px-4 py-4 mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-8 w-8 text-red-800" />
            <span className="text-xl font-bold text-white font-display">REUBEN ADKINS</span>
          </Link>
          <div className="flex items-center gap-6">
            <Link href="/" className="text-gray-300 hover:text-red-400 transition-colors">
              Home
            </Link>
            <Link href="/solo" className="text-red-400 font-medium">
              Solo
            </Link>
            <Link href="/band" className="text-gray-300 hover:text-red-400 transition-colors">
              Band
            </Link>
            <Link href="/#contact" className="text-gray-300 hover:text-red-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container px-4 mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1
                className="text-5xl md:text-6xl font-bold mb-6 text-white font-display metal-effect"
                data-text="SOLO PERFORMANCES"
              >
                SOLO PERFORMANCES
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Intimate acoustic performances featuring 50+ years of musical storytelling. Perfect for retirement
                homes, private gatherings, and venues seeking a personal touch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                  <Link href="/#contact">Book Solo Performance</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900/20 px-8 py-6 text-lg"
                >
                  <Link href="/band">View Band Performances</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-red-800">
              <Image
                src="/images/reuben-acoustic-venue.jpg"
                alt="Reuben performing solo acoustic"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Solo Performance Features */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Solo Performance Features</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Music className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Acoustic Guitar</h3>
              <p className="text-gray-400">Beautiful acoustic performances with classic and contemporary songs</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Intimate Setting</h3>
              <p className="text-gray-400">Perfect for smaller venues and personal gatherings</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Flexible Scheduling</h3>
              <p className="text-gray-400">Available for afternoon and evening performances</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">50+ Years Experience</h3>
              <p className="text-gray-400">Decades of musical expertise and storytelling</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solo Repertoire */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Solo Repertoire</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A carefully curated selection of songs spanning multiple decades and genres
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-950/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-bold text-white mb-4">Classic Country</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Hank Williams classics</li>
                <li>• Johnny Cash favorites</li>
                <li>• Roger Miller hits</li>
                <li>• Willie Nelson hits</li>
              </ul>
            </div>

            <div className="bg-red-950/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-bold text-white mb-4">Golden Oldies</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Chuck Berry classics</li>
                <li>• Elvis Presley hits</li>
                <li>• Beatles acoustic versions</li>
                <li>• Nostalgic favorites</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Perfect For</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Retirement Communities</h3>
              <p className="text-gray-300">
                Bringing joy and nostalgia to senior living facilities with familiar songs and stories
              </p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Private Parties</h3>
              <p className="text-gray-300">Intimate gatherings, birthday parties, and family celebrations</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Coffee Houses</h3>
              <p className="text-gray-300">Acoustic performances perfect for cafes and intimate venues</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Corporate Events</h3>
              <p className="text-gray-300">Background music for business gatherings and networking events</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Memorial Services</h3>
              <p className="text-gray-300">Respectful and meaningful musical tributes for life celebrations</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Library Events</h3>
              <p className="text-gray-300">Educational and entertaining performances for community centers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
