import PostList from '../components/PostList';

import { posts } from '../fixtures/data';

export default {
  title: 'App/PostList',
  component: PostList,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    posts,
    loading: false,
  },
};

export const Loading = {
  args: {
    posts: [],
    loading: true,
  }
};

export const Empty = {
  args: {
    posts: [],
    loading: false,
  },
};
