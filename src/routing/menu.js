import { ContainerOutlined, UserOutlined } from '@ant-design/icons';
import { POSTS_PATH, USERS_PATH } from './paths';

export default {
  public: [
    {
      title: 'Posts',
      path: POSTS_PATH,
      icon: ContainerOutlined,
    },
    {
      title: 'Users',
      path: USERS_PATH,
      icon: UserOutlined,
    },
  ],
};
