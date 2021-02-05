import testApi from './index';

export default () => {
  return testApi.get('/posts?userId=10').then((data) => {
    return data;
  });
};
