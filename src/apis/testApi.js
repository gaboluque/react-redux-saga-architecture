import axios from 'axios';
import qs from 'qs';
import appendJWT from './helpers/appendJWT';

const testApi = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

testApi.defaults.paramsSerializer = (params) =>
  qs.stringify(params, { encode: false });

testApi.interceptors.response.use(
  (response) => response,
  (error) => error.response
);

testApi.interceptors.request.use(appendJWT);

export default testApi;
