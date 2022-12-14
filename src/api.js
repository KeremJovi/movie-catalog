import axios from 'axios';
require('dotenv').config({ path: '.env' });

const api = axios.create({
  baseURL: process.env.BASE_URL,
});

export default api;
