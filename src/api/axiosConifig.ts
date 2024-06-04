import axios from 'axios';

const baseURL = 'https://economia.awesomeapi.com.br/last/';

const axiosInstance = axios.create({
  baseURL: baseURL,
});

export default axiosInstance;