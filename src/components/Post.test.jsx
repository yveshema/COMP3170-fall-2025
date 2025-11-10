import { render, screen } from '@testing-library/react';

import Post from './Post';

const post = {
  id: 1,
  title: 'Test post',
  body: 'Test post body'
};

describe('Post component', () => {
  it('renders properly', () => {
    render(<Post post={post} />);

    screen.debug();
  });

  it('renders the post title', () => {
    render(<Post post={post} />);

    expect(screen.getByText('Test post')).toBeInTheDocument();
  });
});

