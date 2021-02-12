import testApi from '../index';

export const FETCH_POSTS_ENDPOINT = '/users';

export default (id) => () => {
  return testApi.get(`${FETCH_POSTS_ENDPOINT}/${id}`).then((data) => {
    return data;
  });
};
