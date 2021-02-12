import testApi from '../index';
import formatParams from '../../helpers/formatParams';

const fakeDataParser = (data) => ({ ...data, parsedElement: 'Hi' });

export default (params) =>
  testApi.post('/posts', formatParams(params)).then((data) => {
    return fakeDataParser(data);
  });
