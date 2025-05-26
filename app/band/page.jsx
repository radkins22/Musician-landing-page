import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Music, Volume2, Users, Zap } from "lucide-react"
import Footer from "@/components/footer"

export default function BandPage() {
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
            <Link href="/solo" className="text-gray-300 hover:text-red-400 transition-colors">
              Solo
            </Link>
            <Link href="/band" className="text-red-400 font-medium">
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
                data-text="BAND PERFORMANCES"
              >
                BAND PERFORMANCES
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                High-energy live band performances perfect for weddings, street dances, festivals, and events that need
                to get people moving. Full sound, full energy, full entertainment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg">
                  <Link href="/#contact">Book Band Performance</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-red-600 text-red-400 hover:bg-red-900/20 px-8 py-6 text-lg"
                >
                  <Link href="/solo">View Solo Performances</Link>
                </Button>
              </div>
            </div>

            <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-red-800">
              <Image
                src="/images/vintage-band-stage.jpg"
                alt="Reuben performing with band"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Band Performance Features */}
      <section className="py-20 bg-black">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Band Performance Features</h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Full Sound System</h3>
              <p className="text-gray-400">Professional PA system and sound equipment for any venue size</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Complete Band</h3>
              <p className="text-gray-400">Full rhythm section with experienced local musicians</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Zap className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High Energy</h3>
              <p className="text-gray-400">Dance-worthy performances that get crowds moving</p>
            </div>

            <div className="text-center">
              <div className="bg-red-900 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Music className="h-8 w-8 text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Diverse Repertoire</h3>
              <p className="text-gray-400">Rock, country, blues, and crowd favorites spanning decades</p>
            </div>
          </div>
        </div>
      </section>

      {/* Band Repertoire */}
      <section className="py-20 bg-gradient-to-b from-black to-red-950">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Band Repertoire</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              High-energy songs that pack dance floors and create unforgettable moments
            </p>
            <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-950/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-bold text-white mb-4">Classic Rock</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• CCR favorites</li>
                <li>• Eagles classics</li>
                <li>• Tom Petty hits</li>
                <li>• Rolling Stones</li>
              </ul>
            </div>

            <div className="bg-red-950/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-bold text-white mb-4">Country Rock</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Lynyrd Skynyrd</li>
                <li>• Hank Williams Jr.</li>
                <li>• Garth Brooks</li>
                <li>• Modern country hits</li>
              </ul>
            </div>

            <div className="bg-red-950/30 p-6 rounded-lg border border-red-800">
              <h3 className="text-2xl font-bold text-white mb-4">Dance Favorites</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Wedding classics</li>
                <li>• Party anthems</li>
                <li>• Crowd sing-alongs</li>
                <li>• Requests welcome</li>
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
              <h3 className="text-xl font-bold text-white mb-3">Weddings</h3>
              <p className="text-gray-300">Reception entertainment that keeps guests dancing all night long</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Street Dances</h3>
              <p className="text-gray-300">Community celebrations and outdoor festivals with full sound</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Venues & Clubs</h3>
              <p className="text-gray-300">Bars, clubs, and entertainment venues seeking live music</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Festivals</h3>
              <p className="text-gray-300">Music festivals and community events requiring stage-ready performance</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Private Parties</h3>
              <p className="text-gray-300">Birthday celebrations and special occasions with full band energy</p>
            </div>

            <div className="bg-gradient-to-b from-red-950 to-black p-6 rounded-lg border border-red-800 text-center">
              <h3 className="text-xl font-bold text-white mb-3">Corporate Events</h3>
              <p className="text-gray-300">Company parties and team building events with live entertainment</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
