import ImageCard from "../ImageCard/ImageCard"
import { nanoid } from 'nanoid'

export default function ImageGallery({ images, openModal }) {
  return (
    <ul>
      {
        images.map((image) => (
          <li key={nanoid()} onClick={() => openModal(image)}>
            <ImageCard image={image} />
          </li>
        ))
      }
    </ul>
  )
}