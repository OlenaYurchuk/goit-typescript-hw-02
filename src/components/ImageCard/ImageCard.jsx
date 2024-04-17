import css from './ImageCard.module.css'

export default function ImageCard({ image: { urls: { small }, alt_description } }) {
  return (
    <img className={css.img} src={small} alt={alt_description} />
  )
}