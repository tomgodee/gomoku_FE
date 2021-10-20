import axios from 'axios';
import { ACCESS_TOKEN } from '../../config/localStorage';

const baseConfig = {
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 15000,
};

const baseService = axios.create(baseConfig);

baseService.interceptors.request.use((config) => {
  const accessToken = `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`;
  // eslint-disable-next-line no-param-reassign
  if (accessToken) config.headers.Authorization = accessToken;
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default baseService;
