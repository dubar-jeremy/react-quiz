import axios from 'axios';

export const API = axios.create({
  baseURL: 'https://opentdb.com/',
  // decode html
  responseType: 'text/html',
});
