import { useState } from "react"
import { Link } from "react-router"
import { getYouTubeThumbnail, getYouTubeVideoId } from "../utils/general"
import { Play } from "lucide-react"
import { mediaItems } from "../data/mediaItems"
import VideoGrid from "./VideosGrid"

const MediaShowcase = () => {

  return (
    <section id="education" className="py-12 lg:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:mb-16 mb-12">
      <h2 className="text-2xl lg:text-4xl text-white font-semibold lg:mb-4 mb-2">See our platform in action</h2>
      <p className="text-base lg:text-lg text-gray-100">Get a live preview of our trading platform.</p>
      </div>
      <VideoGrid videos={mediaItems.slice(0,3)} />
        {mediaItems.length > 3 && (
          <div className="mt-12 text-center">
            <Link to="/videos"
              className="inline-block bg-white px-8 py-3 rounded-lg text-base font-medium border border-gray-200 hover:bg-gray-100 transition-all duration-300 text-center shadow-md transform"
            >
              View all videos
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default MediaShowcase

