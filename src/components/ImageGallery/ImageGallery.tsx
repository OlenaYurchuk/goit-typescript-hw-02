import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid'
import { Image as GalleryImage } from '../App/types'

interface ImageGalleryProps {
  images: GalleryImage[];
  openModal: (image: GalleryImage) => void;
}

const  ImageGallery: React.FC<ImageGalleryProps> = ({ images, openModal }) => {
  const handleImageClick = (image: GalleryImage) => {
    openModal(image);
  }
  return (
    <ul className={css.gallery}>
      {
        images.map((image) => (
          <li className={css.galleryItem} key={nanoid()} onClick={() => handleImageClick(image)}>
            <ImageCard image={image} onClick={() => handleImageClick(image)}/>
          </li>
        ))
      }
    </ul>
  )
}

export default ImageGallery;