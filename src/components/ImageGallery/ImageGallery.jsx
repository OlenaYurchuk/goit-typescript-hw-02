import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ images }) {
  return (
    <ul>
      {
        images.map(({ id }) => (
          <li key={id}>
            <ImageCard />
          </li>
        ))
      }
    </ul>
  )
}