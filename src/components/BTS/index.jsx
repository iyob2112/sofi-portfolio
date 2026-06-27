// components/BTS.jsx
import "./BTS.css"; // Reuse or mimic your project section styles
import { btsItems } from "../../data";
// import VideoCard from "../../ui/VideoCard/VideoCard";
import ImageCard from "../../ui/ImageCard/ImageCard";
import { Link } from "react-router-dom";

const BTS = () => {
  // Pull only the top 2 videos to highlight on the landing grid
  const featuredVideos = btsItems.slice(0, 6);

  return (
    <section id="videos">
      <div className="section__wrapper">
        <div className="section__header">
        <h5 className="shine">Behind The Scenes</h5>
      <h2 className="shine">Featured Production Workflows</h2>
        </div>

        {/* <div className="videos__container">
          {featuredVideos.map((video) => (
            <VideoCard {...video} key={video.id} />
          ))}
        </div> */}
        <div className="videos__container">
  {featuredVideos.map((item) => (
    <ImageCard {...item} key={item.id} />
  ))}
</div>

        <div className="view-all__actions">
          {/* <Link to="/all-videos-BTS" className="btn btn__primary">
            View All Videos &rarr;
          </Link> */}
          <Link to="/all-photos" className="btn btn__primary">
  View All Photos →
</Link>
        </div>
      </div>
    </section>
  );
};

export default BTS;