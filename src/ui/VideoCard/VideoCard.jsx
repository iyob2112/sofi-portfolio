import React, { useState, useEffect } from "react";
import { FiPlay } from "react-icons/fi";
import "./VideoCard.css";

const VideoCard = ({
  title,
  category,
  videoId,
  videoUrl,
  description,
  tags,
  videoImage,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbnail, setThumbnail] = useState(videoImage);

  useEffect(() => {
    const getThumbnail = async () => {
      try {
        const res = await fetch(
          `https://www.tiktok.com/oembed?url=${encodeURIComponent(videoUrl)}`
        );

        const data = await res.json();

        if (data.thumbnail_url) {
          setThumbnail(data.thumbnail_url);
        }
      } catch (err) {
        console.error("Thumbnail fetch failed:", err);
      }
    };

    getThumbnail();
  }, [videoUrl]);

  const cleanPlayerUrl = `https://www.tiktok.com/player/v1/${videoId}?autoplay=1&loop=1&controls=1`;

  return (
    <div className="card video__card">
      <div className="video__card-top">
        <div className="video-player-container">
          {!isPlaying ? (
            <div
              className="video-poster-wrapper"
              onClick={() => setIsPlaying(true)}
            >
              <div className="video-custom-overlay">
                <div className="custom-play-ring">
                  <FiPlay className="custom-play-icon" />
                </div>
                <span className="custom-play-callout">Play Video</span>
              </div>

              <img
                src={thumbnail}
                alt={title}
                className="video-thumbnail-bg"
              />
            </div>
          ) : (
            <iframe
              src={cleanPlayerUrl}
              className="clean-video-frame"
              title={title}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>
      </div>

      <div className="video__card-bottom">
        <div className="video__info">
          <span className="text__muted video__category">{category}</span>
          <h3 className="video__title">{title}</h3>
        </div>

        <p className="text__muted video__description">{description}</p>

        <div className="video__tags">
          {tags.map((tag, index) => (
            <span className="video__tag" key={index}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;