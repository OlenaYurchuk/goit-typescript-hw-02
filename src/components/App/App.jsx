import { useEffect, useState } from 'react'
import axios from 'axios';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { KEY } from '../../data/accessKey';
import './App.css'


function App() {
  axios.defaults.baseURL = "https://api.unsplash.com/";

  const [images, setImages] = useState([]);

  useEffect(() => {
    async function fetchImages() {
      const params = new URLSearchParams({
        client_id: KEY,
        per_page: 12
      });

      try {
        const response = await axios.get("/photos", { params });
        console.log(response.data)
        setImages(response.data.hits);
      } catch (error) {
        console.error("Error fetching images:", error)
      }

    }

    fetchImages();
  }, [])
  return (
    <>
      <SearchBar />
      {images.length > 0 && <ImageGallery images={images} />}
    </>
  )
}

export default App
