export default function ImageCard({ images: { urls, alt_description } }) {
  return (
    <div>
      <img src={urls.regular} alt={alt_description} />
    </div>
  )
}