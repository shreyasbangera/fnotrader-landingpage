import React, { useEffect, useState } from 'react'
import { getYouTubeThumbnail, getYouTubeVideoId, getYouTubeTitle } from '../utils/general'
import { Play } from 'lucide-react'
import { mediaItems } from '../data/mediaItems'
import VideoGrid from '../components/VideosGrid'

const Videos = () => {
  const [titles, setTitles] = useState({});

  useEffect(() => {
    const fetchTitles = async () => {
      const titleMap = {};
      for (const item of mediaItems) {
        if (item.type === 'youtube') {
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
    <section className='py-12 lg:py-20'>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center lg:mb-16 mb-12">
    <h2 className="text-2xl lg:text-4xl font-semibold mb-4 text-gray-900">See Our Platform in Action</h2>
    <p className="text-base lg:text-lg text-gray-600">Get a live preview of our trading platform.</p>
    </div>
    <VideoGrid videos={mediaItems} />
    </div>
  </section>
  )
}

export default Videos