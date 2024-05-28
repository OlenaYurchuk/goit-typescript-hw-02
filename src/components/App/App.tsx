import { useEffect, useState } from 'react';
import { fetchImages } from '../../data/images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import Loader from '../Loader/Loader';
import ImageModal from '../ImageModal/ImageModal';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import {Image} from './types'
import './App.css'

function App(): JSX.Element {

  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const handleSearch = (newQuery: string): void => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  const openModal = (image: Image): void => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (query === "" || page < 1) {
      return;
    }

    const getImages = async (): Promise<void> => {
      try {
        setError(null);
        setIsLoading(true);
        const data: Image[] = await fetchImages(query, page);
        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError('An error occured while fetching images. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [page, query])

  const hasMoreImagesToLoad: boolean = images.length > 0 && !error && !isLoading;

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {isLoading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && <ImageGallery images={images} openModal={openModal} />}
      {selectedImage && <ImageModal isOpen={modalIsOpen} onRequestClose={closeModal} image={selectedImage} />}
      {hasMoreImagesToLoad && <LoadMoreBtn onClick={handleLoadMore} />}
    </div>
  )
}

export default App
