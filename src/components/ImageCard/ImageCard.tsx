import React from 'react';
import css from './ImageCard.module.css';

interface ImageCardProps {
  onClick: () => void;
  image: {
    urls: {
      small: string;
    };
    alt_description: string;
  };
}

const ImageCard: React.FC<ImageCardProps> = ({ onClick, image: { urls: { small }, alt_description } }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <img className={css.img} src={small} alt={alt_description} onClick={handleClick} />
  );
};

export default ImageCard;
