// VideoPlayer.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideoPlayer = ({ videoId, apiKey }) => {
  const [videoUrl, setVideoUrl] = useState('');

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=player&key=${apiKey}`
        );

        if (response.data.items && response.data.items.length > 0) {
          const videoEmbedHtml = response.data.items[0].player.embedHtml;
          // Extract video URL from HTML embed code
          const url = videoEmbedHtml.split('src="')[1].split('"')[0];
          setVideoUrl(url);
        } else {
          console.error('No video found.');
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideoUrl();
  }, [videoId, apiKey]);

  return (
    <div className="video-player">
      {videoUrl ? (
        <div>
          <h2>Custom Video Player</h2>
          <iframe
            title="YouTube Video"
            width="560"
            height="315"
            src={videoUrl}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default VideoPlayer;
