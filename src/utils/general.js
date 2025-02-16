export const getYouTubeVideoId = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

export const getYouTubeThumbnail = (videoId) => {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
};

export const getYouTubeTitle = async (videoId) => {
  try {
    const url = `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`;
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error("Failed to fetch video details");
    }

    const data = await response.json();
    return data.title;
  } catch (error) {
    console.error("Error fetching YouTube title:", error);
    return null;
  }
};

