import Post from '../components/Post';

export default {
  title: 'App/Post',
  component: Post,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    post: {
      id: 1,
      title: 'Test post',
      body: 'Test post body'
    }
  }
};