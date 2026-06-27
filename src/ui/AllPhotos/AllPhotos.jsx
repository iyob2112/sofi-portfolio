import React, { useEffect } from "react";
import { btsItems } from "../../data";
import ImageCard from "../ImageCard/ImageCard";
import "./AllPhotos.css";

const AllPhotos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="all-videos__page">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">All Photos</h2>
          <p className="text__muted">
            Explore the complete behind-the-scenes photo gallery.
          </p>
        </div>

        <div className="videos__grid-container">
          {btsItems.map((item) => (
            <ImageCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AllPhotos;