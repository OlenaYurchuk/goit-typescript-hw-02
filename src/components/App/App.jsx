import { useEffect, useState } from 'react'
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader'
import { fetchImages } from '../../data/images-api';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import './App.css'



function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  }

  const handleLoadMore = () => {
    setPage(page + 1);
  }

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchImages(query, page);
        console.log(data)
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }

    }

    getImages();
  }, [page, query])

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} />}
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  )
}

export default App
