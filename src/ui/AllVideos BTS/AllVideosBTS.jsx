// pages/AllVideos.jsx
import React, { useEffect } from "react";
import { btsItems } from "../../data";
import VideoCard from "../VideoCard/VideoCard";
import "./AllVideosBTS.css";

const AllVideos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="all-videos__page">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">All Videos</h2>
          <p className="text__muted">A comprehensive look at my logs, tutorials, and concept showcases.</p>
        </div>

        <div className="videos__grid-container">
          {btsItems.map((video) => (
            <VideoCard {...video} key={video.id} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllVideos;