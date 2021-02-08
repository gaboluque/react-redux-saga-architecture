import testApi from './index';

export const FETCH_POSTS_ENDPOINT = '/posts?userId=10';

export default () => {
  return testApi.get(FETCH_POSTS_ENDPOINT).then((data) => {
    return data;
  });
};
