import React, { useState } from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, category, images, description, stacks }) => {
  const imageList = Array.isArray(images) ? images : [images];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  
  // States to keep track of touch coordinates for swiping
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum distance required to consider it a real swipe (in pixels)
  const minSwipeDistance = 50;

  const nextImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prevIndex) => 
      prevIndex === imageList.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = (e) => {
    if (e) e.stopPropagation();
    setCurrentImgIndex((prevIndex) => 
      prevIndex === 0 ? imageList.length - 1 : prevIndex - 1
    );
  };

  // Capture where the finger first hits the screen
  const handleTouchStart = (e) => {
    setTouchEnd(null); // Reset end touch state
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Capture where the finger moves along the screen
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Calculate the difference and trigger the swap when the touch ends
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextImage();
    } else if (isRightSwipe) {
      prevImage();
    }
  };

  return (
    <div className="card project__card">
      <div className="project__card-top">
        <div 
          className="picture"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <img src={imageList[currentImgIndex]} alt={`${title} screenshot`} draggable="false" />
          
          {/* Desktop Arrow Nav Buttons (hidden automatically on mobile touch via CSS below) */}
          {imageList.length > 1 && (
            <div className="image-nav__buttons">
              <button onClick={prevImage} className="nav-btn prev" aria-label="Previous Image">
                &#10094;
              </button>
              <button onClick={nextImage} className="nav-btn next" aria-label="Next Image">
                &#10095;
              </button>
            </div>
          )}

          {/* Optional: Visual Mobile Dots Indicators to show there are more pictures */}
          {imageList.length > 1 && (
            <div className="swipe-indicators">
              {imageList.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentImgIndex ? "active" : ""}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="project__card-bottom">
        <div className="flex project__info">
          <div className="img">
            <img src={imageList[0]} alt="" />
          </div>
          <div>
            <h3 className="title">{title}</h3>
            <p className="text__muted category">{category}</p>
          </div>
        </div>
        <p className="text__muted description">{description}</p>
        <div className="flex__center stacks">
          {stacks.map((stack, index) => (
            <div className="stack" key={index}>
              <img src={stack.logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;