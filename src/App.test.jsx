import { render, screen } from '@testing-library/react';

import { http, HttpResponse, delay } from 'msw';

import { setupServer } from 'msw/node';

import App from './App';

import { posts } from './fixtures/data';

const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';

const server = setupServer(
  http.get(url, () => {
    return HttpResponse.json(posts);
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Main component', () => {
  it('renders properly', () => {
    render(<App />);

    expect(screen.getByText('My blog posts')).toBeInTheDocument();
  });

  it('renders a list of posts', async () => {
    render(<App />);

    expect(await screen.findByText('Post two body')).toBeInTheDocument();

    screen.debug();
  });

  it('renders a loading indicator', async () => {
    server.use(
      http.get(url, async () => {
        await delay('infinite');

        return new Response([]);
      }),
    );

    render(<App />);

    expect(await screen.findByText(/Loading/)).toBeInTheDocument();
  });

  it('renders an error message when fetching fails', async () => {
    server.use(
      http.get(url, () => {
        return new HttpResponse(null, { status: 500 });
      }),
    );

    render(<App />);

    expect(await screen.findByText(/Something went wrong/)).toBeInTheDocument();

    screen.debug();
  });

});