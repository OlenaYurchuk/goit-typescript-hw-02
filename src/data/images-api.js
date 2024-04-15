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
  return response.data.results;
}

// export const fetchImages = async (searchQuery, currentPage) => {
//   try {
//     const response = await axios.get(`/search/photos?`, {
//       params: {
//         client_id: KEY,
//         query: searchQuery,
//         orientation: 'landscape',
//         page: currentPage,
//         per_page: 12
//       },
//     });
//      console.log("Response:", response); // Log the entire response object
//     if (response.data && Array.isArray(response.data.results)) {
//       return response.data.results;
//     } else {
//       throw new Error("Invalid response structure");
//     }
//   } catch (error) {
//     console.error('Error fetching images:', error);
//     throw error; // Re-throw the error to handle it in the caller function
//   }
// }
