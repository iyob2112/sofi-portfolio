// components/ImageCard.jsx

import "./ImageCard.css";

const ImageCard = ({
  title,
  category,
  image,
  description,
  tags,
}) => {
  return (
    <div className="card video__card">
      <div className="video__card-top">
        <img
          src={image}
          alt={title}
          className="bts-image"
        />
      </div>

      <div className="video__card-bottom">
        <div className="video__info">
          <span className="text__muted video__category">
            {category}
          </span>

          <h3 className="video__title">{title}</h3>
        </div>

        <p className="text__muted video__description">
          {description}
        </p>

        <div className="video__tags">
          {tags.map((tag, index) => (
            <span key={index} className="video__tag">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;