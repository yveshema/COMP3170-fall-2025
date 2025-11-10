import { render, screen } from '@testing-library/react';

import PostList from './PostList';

import { posts } from '../fixtures/data';

describe('PostList component', () => {
  it('renders a list of posts', () => {
    render(<PostList posts={posts} />);

    expect(screen.getByText('Post one body')).toBeInTheDocument();
  });

  it('renders a loading indicator', () => {
    render(<PostList posts={[]} loading={true} />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders nothing when there are not posts', () => {
    render(<PostList posts={[]} />);

    expect(screen.queryByTestId('posts')).toBeNull();
  });
});