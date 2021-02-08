import axios from 'axios';
import qs from 'qs';

const dummyAPI = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

dummyAPI.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { encode: false });

dummyAPI.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

export default dummyAPI;
