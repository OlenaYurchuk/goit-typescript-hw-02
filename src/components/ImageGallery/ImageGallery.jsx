import ImageCard from "../ImageCard/ImageCard"
import css from './ImageGallery.module.css'
import { nanoid } from 'nanoid'

export default function ImageGallery({ images, openModal }) {
  return (
    <ul className={css.gallery}>
      {
        images.map((image) => (
          <li className={css.galleryItem} key={nanoid()} onClick={() => openModal(image)}>
            <ImageCard image={image} />
          </li>
        ))
      }
    </ul>
  )
}