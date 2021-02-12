import { number, shape, string } from 'prop-types';

export const userType = shape({
  id: number,
  email: string,
  name: string,
  phone: string,
  username: string,
  website: string,
  address: shape({
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: shape({
      lat: string,
      lng: string,
    }),
  }),
});
