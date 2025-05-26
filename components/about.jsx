import Image from "next/image"
import { Music, Users, Award, MapPin } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-red-950">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">The Man Behind the Music</h2>
          <div className="w-24 h-1 bg-red-800 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-lg overflow-hidden border-2 border-red-800 shadow-lg shadow-red-800/20 bg-black">
            <Image
              src="/images/reuben-bw-portrait.jpg"
              alt="Reuben Adkins - artistic black and white portrait with guitar"
              fill
              className="object-contain"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-red-600 font-display metal-effect" data-text="REUBEN ADKINS">
              REUBEN ADKINS
            </h3>
            <p className="text-lg text-gray-300">
              For over five decades, Reuben has been crafting melodies and touching hearts with his exceptional musical
              skills. A passionate musician who has dedicated his life to music, Reuben brings discipline and dedication
              to every performance.
            </p>
            <p className="text-lg text-gray-300">
              Currently based in Kearney, Nebraska, Reuben performs with live bands and brings his musical talents to
              retirement communities, weddings, street dances, private events, and celebrations of all kinds, sharing
              timeless classics and original compositions that resonate with audiences of all ages.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-center gap-3">
                <div className="bg-red-900 p-3 rounded-full">
                  <Music className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">50+ Years</h4>
                  <p className="text-gray-400">Musical Experience</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-900 p-3 rounded-full">
                  <Users className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Multiple Bands</h4>
                  <p className="text-gray-400">Collaborative Work</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-900 p-3 rounded-full">
                  <Award className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Multi-Instrumental</h4>
                  <p className="text-gray-400">Guitar, Bass, Drums, Banjo</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="bg-red-900 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-red-400" />
                </div>
                <div>
                  <h4 className="font-bold text-white">Nebraska Based</h4>
                  <p className="text-gray-400">Kearney & Surrounding Areas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
