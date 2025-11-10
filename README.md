# Testing in React

This branch provides examples of two approaches to testing your React applications:

- Using React Testing Library
- Using Storybook

React Testing Library allows you to test your component code as well as any other code your component depend on.

Storybook allows you to visually test your components in isolation by creating stories for each components. Each story represent a different variant/state that your component can assume.

## Key concepts:

- **Test runner**: a utility that you use to run your tests (jest, vitest, chai, ...)
- **Test suite**: a collection of tests for related functionality
- **Test case**: a single test, often part of a test suite. **Storybook** stories can be considered as test cases.
- **Mocks**: objects created for the purposes of mimicking the behaviors of some API or data objects used in your application.

## References

- [https://testing-library.com/docs/react-testing-library/intro](https://testing-library.com/docs/react-testing-library/intro)
- [https://storybook.js.org/docs](https://storybook.js.org/docs)
- [Mocking with vitest](https://vitest.dev/guide/mocking)
- [Mock Service Worker (MSW)](https://mswjs.io/docs/quick-start)