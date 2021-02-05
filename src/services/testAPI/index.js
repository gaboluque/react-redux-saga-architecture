import axios from 'axios';
import qs from 'qs';

const testApi = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

testApi.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { encode: false });

testApi.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

export default testApi;
