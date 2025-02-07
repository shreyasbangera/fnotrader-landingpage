import { useState } from "react"
import { Link } from "react-router"
import { getYouTubeThumbnail, getYouTubeVideoId } from "../utils/general"

// Sample media items - replace with your actual content
const mediaItems = [
  {
    type: "youtube",
    src: "https://youtu.be/eARn01pojQA?si=BYMXtRXYcAfWKJ7R",
    title: "Platform Overview",
    description: "A quick tour of our trading platform features.",
  },
  {
    type: "gif",
    src: "https://example.com/animation1.gif",
    title: "Real-time Analytics",
    description: "See how our real-time analytics work in action.",
  },
  {
    type: "youtube",
    src: "https://youtu.be/disoYQHZsLk?si=hG_ykkFa1omOECqd",
    title: "Options Trading Tutorial",
    description: "Learn the basics of options trading with this short guide.",
  },
  {
    type: "gif",
    src: "https://example.com/animation2.gif",
    title: "Market Insights",
    description: "Visualize market trends with our advanced charting tools.",
  },
]

const MediaShowcase = () => {

  return (
    <section id="education" className="py-12 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center lg:mb-16 mb-12">
      <h2 className="text-2xl lg:text-4xl text-gray-900 font-semibold mb-4">See our platform in action</h2>
      <p className="text-base lg:text-lg text-gray-600">Get a live preview of our trading platform.</p>
      </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {mediaItems.slice(0,3).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md border border-neutral-100 overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <a href={item.src} target="_blank">
              <div className="relative aspect-video">
              {item.type === "youtube" ? (
                  <img
                    src={getYouTubeThumbnail(getYouTubeVideoId(item.src) || "")}
                    alt={`Thumbnail for ${item.title}`}
                    className="w-full h-full object-cover cursor-pointer"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-cover bg-center cursor-pointer"
                    style={{ backgroundImage: `url(${item.src})` }}
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {item.type === "video" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </a>
              <div className="p-4">
                <h3 className="font-medium text-base mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        {mediaItems.length > 3 && (
          <div className="mt-8 text-center">
            <Link to="/videos"
              className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg text-base font-medium border border-blue-600/50 hover:bg-blue-50 transition-all duration-300 text-center shadow-md transform"
            >
              Show more
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default MediaShowcase

