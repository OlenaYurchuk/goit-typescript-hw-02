import axios from 'axios';
import { KEY } from './accessKey';

axios.defaults.baseURL = "https://api.unsplash.com";

interface UnsplashImage {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  }
}

export const fetchImages = async (searchQuery: string, currentPage: number) => {
  const response = await axios.get(`/search/photos?`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      orientation: 'landscape',
      page: currentPage,
      per_page: 12
    },
  });
  return response.data.results.map((image: UnsplashImage) => ({
    id: image.id,
    title: image.alt_description,
    imageUrl: image.urls.regular,
  }));
}

