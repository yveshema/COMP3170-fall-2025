import App from '../App';

import { http, HttpResponse, delay } from 'msw';

import { posts } from '../fixtures/data';

const url = 'https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5';

export default {
  title: 'App/Main',
  component: App,
  tags: ['autodocs'],
}

export const Default = {
  parameters: {
    msw: {
      handlers: [
        http.get(url, () => {
          return HttpResponse.json(posts);
        }),
      ],
    },
  },
};

export const Loading = {
  parameters: {
    msw: {
      handlers: [
        http.get(url, async () => {
          await delay('infinite');

          return new Reponse([]);
        }),
      ],
    },
  },
};

export const Error = {
  parameters: {
    msw: {
      handlers: [
        http.get(url, () => {
          return new HttpResponse(null, { status: 403 });
        }),
      ],
    },
  },
};

export const Empty = {
  parameters: {
    msw: {
      handlers: [
        http.get(url, () => {
          return HttpResponse.json([]);
        }),
      ],
    },
  },
};