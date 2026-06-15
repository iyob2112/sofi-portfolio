import React, { useState } from "react";
import { FiPlay } from "react-icons/fi";
import "./VideoCard.css";

// We extract videoImage directly from the data props mapping
const VideoCard = ({ title, category, videoId, description, tags, videoImage }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const cleanPlayerUrl = `https://www.tiktok.com/player/v1/${videoId}?autoplay=1&loop=1&controls=1`;

  return (
    <div className="card video__card">
      <div className="video__card-top">
        <div className="video-player-container">
          
          {!isPlaying ? (
            /* Individual Custom Click-To-Play Poster Overlay */
            <div className="video-poster-wrapper" onClick={() => setIsPlaying(true)}>
              <div className="video-custom-overlay">
                <div className="custom-play-ring">
                  <FiPlay className="custom-play-icon" />
                </div>
                <span className="custom-play-callout">Play Video</span>
              </div>
              
              {/* This renders the completely unique image for each specific video */}
              <img 
                src={videoImage} 
                alt={title} 
                className="video-thumbnail-bg" 
              />
            </div>
          ) : (
            /* Clean Minimal Streaming Player Layout */
            <iframe
              src={cleanPlayerUrl}
              className="clean-video-frame"
              title={title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}

        </div>
      </div>

      {/* Info Content Block */}
      <div className="video__card-bottom">
        <div className="video__info">
          <span className="text__muted video__category">{category}</span>
          <h3 className="video__title">{title}</h3>
        </div>
        <p className="text__muted video__description">{description}</p>
        <div className="video__tags">
          {tags.map((tag, index) => (
            <span className="video__tag" key={index}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;