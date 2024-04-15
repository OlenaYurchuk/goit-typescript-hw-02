import ImageCard from "../ImageCard/ImageCard"
import { nanoid } from 'nanoid'

export default function ImageGallery({ images }) {
  return (
    <ul>
      {
        images.map((image) => (
          <li key={image.id = nanoid()}>
            <ImageCard image={image} />
          </li>
        ))
      }
    </ul>
  )
}