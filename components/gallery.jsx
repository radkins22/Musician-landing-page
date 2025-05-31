"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/images/reuben-current-performance.jpg",
    alt: "Reuben performing with electric guitar in front of his backdrop",
    caption: "Reuben in his element, guitar in hand",
  },
  {
    src: "/images/reuben-patriotic-bass.jpg",
    alt: "Reuben performing with patriotic bandana and bass guitar",
    caption: "Reuben rocking the guitar with patriotic style",
  },
  {
    src: "/images/sweetwater-live-performance.jpg",
    alt: "Sweetwater band performing live at club venue",
    caption: "Sweetwater band in action - full live performance setup",
  },
  {
    src: "/images/reuben-red-stratocaster.jpg",
    alt: "Reuben performing with red Stratocaster guitar",
    caption: "Reuben with his red Stratocaster - 'Tough Guys Wear Pink'",
  },
  {
    src: "/images/sweetwater-full-band.jpg",
    alt: "Complete Sweetwater band performance with backdrop",
    caption: "The complete Sweetwater lineup performing together",
  },
  {
    src: "/images/outdoor-tent-performance.jpg",
    alt: "Band performing under outdoor tent with red lighting",
    caption: "Outdoor festival performance under the big tent",
  },
  {
    src: "/images/reuben-nebraska-tent.jpg",
    alt: "Reuben performing solo under tent in Nebraska shirt",
    caption: "Electric guitar performance showcasing Nebraska pride",
  },
  {
    src: "/images/cactusHill.jpg",
    alt: "Reuben performing solo under tent in Nebraska shirt",
    caption:
      "Reuben and Cactus Hill lighting up the outdoor stage with electric energy",
  },
  {
    src: "/images/vintage-band-formal-photo.jpg",
    alt: "Vintage formal band photo with four musicians",
    caption: "Classic band photo - the formal years with full lineup",
  },
  {
    src: "/images/reuben-white-telecaster.jpg",
    alt: "Reuben playing white Telecaster guitar at venue",
    caption: "Reuben with his signature Telecaster 'Grandma'",
  },
  {
    src: "/images/reuben-seated-guitar.jpg",
    alt: "Reuben seated playing white guitar in club venue",
    caption:
      "Shredding on guitar with the band during a high-energy bar performance",
  },
  {
    src: "/images/reuben-with-children.jpg",
    alt: "Reuben playing ukulele for children at community event",
    caption: "Bringing music and joy to the next generation",
  },
  {
    src: "/images/cactusHill2.jpg",
    alt: "Reuben playing ukulele for children at community event",
    caption: "Cactus Hill bringing the heat with Reuben on electric guitar",
  },
  {
    src: "/images/army.jpg",
    alt: "Reuben playing ukulele for children at community event",
    caption: "Reuben in his Army days - the early years of musical passion",
  },
  {
    src: "/images/couple.jpg",
    alt: "Reuben playing ukulele for children at community event",
    caption:
      "Reuben and his wife of over 30 years — a lifelong partnership rooted in love and shared passion for music.",
  },
  {
    src: "/images/guitarPic.jpg",
    alt: "Reuben playing ukulele for children at community event",
    caption: "Reuben doing the thing he loves most - playing guitar",
  },
  {
    src: "/images/reuben-acoustic-venue.jpg",
    alt: "Reuben performing acoustic guitar at venue",
    caption:
      "Sweetwater band performance — electric vibes and crowd connection",
  },
  {
    src: "/images/young-reuben-military.jpg",
    alt: "Young Reuben in military uniform",
    caption: "Throwback to a young Reuben in his early guitar days",
  },
  {
    src: "/images/recent-band-promo.jpg",
    alt: "Recent professional band promotional photo",
    caption: "Reuben with a former band lineup — always ready to rock",
  },
  {
    src: "/images/young-reuben-drums.jpg",
    alt: "Young Reuben playing drums",
    caption: "Early musical foundations - mastering the rhythm section",
  },
  {
    src: "/images/reuben-artistic-guitar.jpg",
    alt: "Artistic performance photo with dramatic lighting",
    caption: "The artistry of performance - music as visual expression",
  },
  {
    src: "/images/young-reuben-telecaster.jpg",
    alt: "Young Reuben with long hair playing Telecaster",
    caption: "Classic rock era - the passion was already burning bright",
  },
  {
    src: "/images/sweetwater-thanksgiving.jpg",
    alt: "Sweetwater band Thanksgiving celebration",
    caption: "Sweetwater family - celebrating music and friendship",
  },
  {
    src: "/images/reuben-bw-portrait.jpg",
    alt: "Artistic black and white portrait of Reuben with guitar",
    caption: "The artist at work - passion captured in black and white",
  },
  {
    src: "/images/musicians-laughing.jpg",
    alt: "Candid moment of musicians laughing together",
    caption: "The joy of music — laughter and friendship on stage",
  },
  {
    src: "/images/outdoor-band-setup.jpg",
    alt: "Reuben performing outdoors with full band setup",
    caption: "Outdoor festival performance with complete sound system",
  },
  {
    src: "/images/reuben-banjo-performance.jpg",
    alt: "Reuben playing banjo and singing",
    caption: "Multi-instrumental talent - banjo and vocals",
  },
  {
    src: "/images/reuben-bass-performance.jpg",
    alt: "Reuben playing bass guitar on stage",
    caption: "Reuben in action — flexing his guitar skills",
  },
  {
    src: "/images/reuben-bass-home.jpg",
    alt: "Reuben playing bass guitar at home",
    caption: "Practice makes perfect - dedication to the craft",
  },
  {
    src: "/images/reuben-nebraska-cap.jpg",
    alt: "Reuben in Nebraska cap playing yellow Telecaster",
    caption:
      "Proud Nebraska musician with his signature Telecaster, lovingly dubbed 'Grandma'",
  },
  {
    src: "/images/blue-stage-lighting.jpg",
    alt: "Stage performance with dramatic blue lighting",
    caption: "Professional stage presence under the lights",
  },
  {
    src: "/images/band-backstage-moment.jpg",
    alt: "Casual moment with band members between sets",
    caption: "The camaraderie that makes great music happen",
  },
  {
    src: "/images/reuben-live-performance.jpg",
    alt: "Reuben performing live with electric guitar",
    caption: "Reuben rocking the stage with his signature style",
  },
  {
    src: "/images/young-reuben-studio.jpg",
    alt: "Young Reuben in the studio with guitar and amp",
    caption:
      "Early days at a music competition — passion waiting to take the stage",
  },
  {
    src: "/images/band-friends-gathering.jpg",
    alt: "Reuben with fellow musicians at a gathering",
    caption: "Good times with fellow musicians and friends",
  },
  {
    src: "/images/vintage-band-formal.jpg",
    alt: "Vintage formal band photo in period costumes",
    caption: "Dressed to impress - vintage band styling",
  },
  {
    src: "/images/drummer-stage-performance.jpg",
    alt: "Band drummer performing on stage",
    caption: "The rhythm section keeping the beat alive",
  },
  {
    src: "/images/reuben-community-event.jpg",
    alt: "Reuben at a community event",
    caption: "Bringing music and joy to community events",
  },
  {
    src: "/images/sweetwater-band-promo.jpg",
    alt: "Sweetwater Band promotional flyer",
    caption: "Professional promotional material from the Sweetwater Band era",
  },
  {
    src: "/images/vintage-band-stage.jpg",
    alt: "Vintage band performance on stage",
    caption: "Full band in action - the complete musical experience",
  },
  {
    src: "/images/hazard-county-band.jpg",
    alt: "Hazard County band promotional photo",
    caption: "The Hazard County crew - bringing country music to life",
  },
  {
    src: "/images/reuben-portrait-cap.jpg",
    alt: "Recent portrait of Reuben in cap and sweater",
    caption: "The man behind the music — a true force on guitar",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlay || isPaused || lightboxOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === galleryImages.length - 1 ? 0 : prev + 1
      );
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, isPaused, lightboxOpen]);

  const goToPrevious = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? galleryImages.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prev) =>
      prev === galleryImages.length - 1 ? 0 : prev + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const openLightbox = () => {
    setLightboxOpen(true);
    setIsPaused(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsPaused(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (isAutoPlay) {
      setIsPaused(true);
    } else {
      setIsPaused(false);
    }
  };

  // Calculate visible thumbnails (show 5 at a time)
  const getVisibleThumbnails = () => {
    const thumbnailsToShow = 5;
    const start = Math.max(0, currentIndex - Math.floor(thumbnailsToShow / 2));
    const end = Math.min(galleryImages.length, start + thumbnailsToShow);
    const adjustedStart = Math.max(0, end - thumbnailsToShow);

    return galleryImages.slice(adjustedStart, end).map((image, index) => ({
      ...image,
      originalIndex: adjustedStart + index,
    }));
  };

  return (
    <section id="gallery" className="py-20 bg-black">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Moments captured throughout Reuben's musical journey spanning five
            decades - from Army service to musical mastery
          </p>
          <div className="w-24 h-1 bg-red-800 mx-auto mt-6"></div>
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg border-2 border-red-900 bg-black">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain cursor-pointer transition-opacity duration-500"
              onClick={openLightbox}
            />

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={goToNext}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Auto-play Control */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 bg-black/50 text-white hover:bg-black/70 rounded-full"
              onClick={toggleAutoPlay}
            >
              {isAutoPlay && !isPaused ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Caption */}
          <div className="mt-4 text-center">
            <p className="text-white text-lg font-medium">
              {galleryImages[currentIndex].caption}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex justify-center items-center gap-2">
            {getVisibleThumbnails().map((image, index) => (
              <div
                key={image.originalIndex}
                className={`relative w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 cursor-pointer transition-all duration-300 ${
                  image.originalIndex === currentIndex
                    ? "border-red-500 scale-110"
                    : "border-red-900 hover:border-red-600"
                }`}
                onClick={() => goToSlide(image.originalIndex)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-6 gap-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-600 hover:bg-red-400"
                }`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/10"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="relative h-[80vh] w-[80vw] max-w-5xl">
            <Image
              src={galleryImages[currentIndex].src || "/placeholder.svg"}
              alt={galleryImages[currentIndex].alt}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 p-4">
              <p className="text-white text-center text-lg">
                {galleryImages[currentIndex].caption}
              </p>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/10"
            onClick={goToNext}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </section>
  );
}
