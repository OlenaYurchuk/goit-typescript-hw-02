export const KEY = "hw5tdjdiiK8Lmw6UbGLsDS19cUZqPKSQvd9Hf6g8IF0";

// import axios from 'axios';
// import { KEY } from './accessKey';

// axios.defaults.baseURL = "https://api.unsplash.com/";

// export const fetchImagesBySearch = async topic => {
//     const params = new URLSearchParams({
//         client_id: KEY,
//         query: topic,
//         orientation: 'landscape',
//         page: 1,
//         per_page: 12
//     });

//     const response = axios.get(`search/photos?${params}`);
//     console.log(response.data);
//     return response.data.hits;
// }



// App.jsx
// import { useState } from 'react'
// import SearchBar from '../SearchBar/SearchBar';
// import Loader from '../Loader/Loader';
// import ErrorMessage from '../ErrorMessage/ErrorMessage'
// import ImageGallery from '../ImageGallery/ImageGallery';
// import { fetchImagesBySearch } from '../../data/images-api';
// import './App.css'


// function App() {
//     const [images, setImages] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(false);

//     const handleSearch = async (topic) => {
//         try {
//             setLoading(true);
//             setError(false);
//             setImages([]);
//             const data = await fetchImagesBySearch(topic)
//             console.log(data)
//             setImages(data);
//         } catch (error) {
//             setError(true);
//         } finally {
//             setLoading(false)
//         }
//     }

//     return (
//         <div>
//             <SearchBar onSearch={handleSearch} />
//             {loading && <Loader />}
//             {error && <ErrorMessage />}
//             {images.length > 0 && <ImageGallery images={images} />}
//         </div>
//     )
// }

// export default App
