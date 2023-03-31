import axios from "axios";

const heroku = process.env.REACT_APP_API_URL;

const instance = axios.create({
  baseURL: 'https://dashboard.heroku.com/apps/kim-blog-mern',
});

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');

  return config;
})

export default instance;