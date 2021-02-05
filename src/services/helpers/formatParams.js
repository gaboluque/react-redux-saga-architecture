const formatParams = (method, params) =>
  method === 'get' ? { params } : params;

export default formatParams;
