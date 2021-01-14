import axios from 'axios'
const baseUrl = 'https://api.themoviedb.org/3/discover/movie?api_key=f7b67d9afdb3c971d4419fa4cb667fbf'
export function getData() {
    return axios({
      method: 'GET',
      url: baseUrl,
    });
  }