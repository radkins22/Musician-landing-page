"use client"

import { useState } from "react"
import Link from "next/link"
import { Facebook, Youtube, Music } from "lucide-react"
import LegalModal from "./legal-modal"

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState(null)

  const openModal = (type) => {
    setModalType(type)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
    setModalType(null)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      <footer className="bg-black border-t border-red-900">
        <div className="container px-4 py-12 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link href="#" className="flex items-center gap-2 mb-4">
                <Music className="h-8 w-8 text-red-800" />
                <span className="text-2xl font-bold text-white font-display metal-effect" data-text="REUBEN ADKINS">
                  REUBEN ADKINS
                </span>
              </Link>
              <p className="text-gray-400 mb-4 max-w-md">
                With over 50 years of musical experience, Reuben Adkins continues to share his passion for guitar and
                music with audiences across Nebraska.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://www.facebook.com/reubenadkinsentertainer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.youtube.com/@reubenadkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                  <span className="sr-only">YouTube</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-red-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#gallery" className="text-gray-400 hover:text-red-400 transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="#videos" className="text-gray-400 hover:text-red-400 transition-colors">
                    Videos
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-red-400 transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-red-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-white mb-4">Performance Types</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">Live Band Performances</li>
                <li className="text-gray-400">Retirement Homes</li>
                <li className="text-gray-400">Weddings</li>
                <li className="text-gray-400">Street Dances</li>
                <li className="text-gray-400">Private Events</li>
                <li className="text-gray-400">Community Gatherings</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-red-900/50 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; {currentYear} Reuben Adkins. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <button
                onClick={() => openModal("privacy")}
                className="text-gray-500 hover:text-red-400 text-sm transition-colors"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => openModal("terms")}
                className="text-gray-500 hover:text-red-400 text-sm transition-colors"
              >
                Terms of Service
              </button>
            </div>
          </div>
        </div>
      </footer>

      <LegalModal isOpen={modalOpen} onClose={closeModal} type={modalType} />
    </>
  )
}
