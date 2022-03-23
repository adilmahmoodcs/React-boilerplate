import axios from 'axios';
import {BASE_URL}   from "../configs/constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }
});

export default axiosInstance;
