import { number, shape, string } from 'prop-types';

export const postType = shape({
  id: number,
  title: string,
  content: string,
});
