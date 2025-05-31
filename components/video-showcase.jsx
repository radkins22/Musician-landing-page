"use client";

import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa";

// Sample videos - now includes the real videos
const videos = [
  {
    id: 1,
    title: "Friends in Low Places",
    artist: "Cover of Garth Brooks",
    description: "Reuben's rendition of this classic country favorite",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/PXL_20250516_205454678.mp4",
  },
  {
    id: 2,
    title: "Only Daddy That'll Walk the Line",
    artist: "Cover of Waylon Jennings",
    description: "Reuben's soulful take on Waylon Jennings' country classic",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/waylon.mp4",
  },
  {
    id: 3,
    title: "In Heaven There Is No Beer",
    artist: "Cover of Frankie Yankovic",
    description:
      "A classic polka favorite performed with Reuben's signature style",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/frankie.mp4",
  },
  {
    id: 4,
    title: "Tequila Sunrise",
    artist: "Cover of The Eagles",
    description: "Reuben's smooth rendition of The Eagles' timeless hit",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/theEagles.mp4",
  },
  {
    id: 5,
    title: "Ring of Fire",
    artist: "Cover of Johnny Cash",
    description: "A heartfelt take on Johnny Cash's iconic 'Ring of Fire'",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/johnnyCash.mp4",
  },
  {
    id: 6,
    title: "Amarillo By Morning",
    artist: "Cover of George Strait",
    description:
      "A timeless country classic showcasing Reuben's country music expertise",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/georgestraight.mp4",
  },
  {
    id: 7,
    title: "Folsom Prison Blues",
    artist: "Cover of Johnny Cash",
    description: "Reuben's powerful take on this iconic Johnny Cash classic",
    thumbnail: "/images/guitar-blue.jpeg",
    videoUrl: "/videos/batch_process_6.mp4",
  },
];

export default function VideoShowcase() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    const videoElement = document.getElementById("main-video");
    if (videoElement) {
      if (isPlaying) {
        videoElement.pause();
      } else {
        videoElement.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const videoElement = document.getElementById("main-video");
    if (videoElement) {
      videoElement.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoSelect = (video) => {
    setActiveVideo(video);
    setIsPlaying(false);
    // Force video to reload by clearing the src and setting it again
    const videoElement = document.getElementById("main-video");
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
      videoElement.load(); // Force reload of the video
    }
  };

  return (
    <section
      id="videos"
      className="py-20 bg-gradient-to-b from-red-950 to-black"
    >
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Video Showcase
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch Reuben in action as he performs and shares his musical journey
          </p>
          <div className="w-24 h-1 bg-red-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="relative aspect-video bg-black rounded-lg overflow-hidden border-2 border-red-700">
              {activeVideo.videoUrl !== "#" ? (
                <video
                  key={activeVideo.id} // Force re-render when video changes
                  id="main-video"
                  className="w-full h-full object-contain"
                  controls
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onLoadStart={() =>
                    console.log(`Loading video: ${activeVideo.title}`)
                  }
                >
                  <source src={activeVideo.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={activeVideo.thumbnail || "/placeholder.svg"}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {activeVideo.title}
                      </h3>
                      <Button
                        onClick={togglePlay}
                        className="bg-red-600 hover:bg-red-700 text-white rounded-full w-16 h-16 flex items-center justify-center"
                      >
                        {isPlaying ? (
                          <Pause className="h-8 w-8" />
                        ) : (
                          <Play className="h-8 w-8" />
                        )}
                      </Button>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={toggleMute}
                      className="bg-black/50 text-white hover:bg-black/70"
                    >
                      {isMuted ? (
                        <VolumeX className="h-5 w-5" />
                      ) : (
                        <Volume2 className="h-5 w-5" />
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-between ">
              <div className="mt-4">
                <h3 className="text-xl font-bold text-white">
                  {activeVideo.title}
                </h3>
                <p className="text-red-400 text-sm mb-2">
                  {activeVideo.artist}
                </p>
                <p className="text-gray-400">{activeVideo.description}</p>
              </div>

              <div className="flex items-center justify-end space-x-2">
                <p>Click here for more videos! </p>
                <Link
                  href="https://www.youtube.com/@reubenadkins"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 transition-colors flex justify-end"
                >
                  <FaYoutube className="h-20 w-20" />
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">More Videos</h3>
            {videos.map((video) => (
              <div
                key={video.id}
                className={`flex gap-4 p-3 rounded-lg cursor-pointer transition-colors ${
                  activeVideo.id === video.id
                    ? "bg-red-900/50 border-l-4 border-red-500"
                    : "hover:bg-red-900/30"
                }`}
                onClick={() => handleVideoSelect(video)}
              >
                <div className="relative w-24 h-16 flex-shrink-0 rounded overflow-hidden">
                  <img
                    src={video.thumbnail || "/placeholder.svg"}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  {activeVideo.id !== video.id && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                      <Play className="h-4 w-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-medium text-white">{video.title}</h4>
                  <p className="text-red-400 text-xs mb-1">{video.artist}</p>
                  <p className="text-sm text-gray-400 line-clamp-1">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
