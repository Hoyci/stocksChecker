import axios from 'axios';

export const STOCKS = axios.create({
  baseURL: 'https://brapi.dev/api/',
  headers: {
    'Content-Type': 'application/json',
  },
});
