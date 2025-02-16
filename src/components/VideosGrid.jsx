import React, { useEffect, useState } from "react";
import { Play } from "lucide-react";
import {
  getYouTubeThumbnail,
  getYouTubeVideoId,
  getYouTubeTitle,
} from "../utils/general";

// VideoGrid component that receives titles from parent
const VideoGrid = ({ videos }) => {
  const [titles, setTitles] = useState({});

  useEffect(() => {
    const fetchTitles = async () => {
      const titleMap = {};
      // Fetch titles for ALL videos at once
      for (const item of videos) {
        if (item.type === "youtube") {
          const videoId = getYouTubeVideoId(item.src);
          if (videoId) {
            titleMap[item.src] = await getYouTubeTitle(videoId);
          }
        }
      }
      setTitles(titleMap);
    };
    fetchTitles();
  }, []);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
      {videos?.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105 group"
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
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.type === "youtube" ? (
                  <Play className="h-16 w-16 text-white" />
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
            <div className="p-4">
              <h3 className="font-medium leading-relaxed mb-2">
                {item.type === "youtube"
                  ? titles[item.src] || "Loading..."
                  : item.title}
              </h3>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;
