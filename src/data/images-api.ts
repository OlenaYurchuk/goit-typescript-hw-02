import axios from 'axios';
import { KEY } from './accessKey';

axios.defaults.baseURL = "https://api.unsplash.com";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get(`/search/photos?`, {
    params: {
      client_id: KEY,
      query: searchQuery,
      orientation: 'landscape',
      page: currentPage,
      per_page: 12
    },
  });
  console.log(response.data.results)
  return response.data.results;
}

