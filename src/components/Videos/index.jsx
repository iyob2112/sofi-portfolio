// components/Videos.jsx
import "./Videos.css"; // Reuse or mimic your project section styles
import { videos } from "../../data";
import VideoCard from "../../ui/VideoCard/VideoCard";
import { Link } from "react-router-dom";

const Videos = () => {
  // Pull only the top 2 videos to highlight on the landing grid
  const featuredVideos = videos.slice(0, 6);

  return (
    <section id="videos">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Featured Videos</h2>
        </div>

        <div className="videos__container">
          {featuredVideos.map((video) => (
            <VideoCard {...video} key={video.id} />
          ))}
        </div>

        <div className="view-all__actions">
          <Link to="/all-videos" className="btn btn__primary">
            View All Videos &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Videos;