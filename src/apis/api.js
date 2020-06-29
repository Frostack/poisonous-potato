import axios from 'axios';
import Cookies from 'js-cookie';

const instance = axios.create({
  baseURL: 'https://poisonous-potato-server.herokuapp.com',
});

instance.interceptors.request.use(
  config => {
    const token = Cookies.get('token');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
