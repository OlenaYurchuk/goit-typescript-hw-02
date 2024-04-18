import css from './ImageCard.module.css'

export default function ImageCard({ onClick, image: { urls: { small }, alt_description } }) {
  const handleClick = () => {
    onClick && onClick();
  }
  return (
    <img className={css.img} src={small} alt={alt_description} onClick={handleClick} />
  )
}