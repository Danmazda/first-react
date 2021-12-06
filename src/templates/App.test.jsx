import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import Home3 from './App';
import userEvent from '@testing-library/user-event';

const handlers = [
  rest.get('*jsonplaceholder.typicode.com/*', async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          userId: 1,
          id: 1,
          title: 'title 1',
          body: 'body 1',
          url: 'img/img1.png',
        },
        {
          userId: 1,
          id: 2,
          title: 'title 2',
          body: 'body 2',
          url: 'img/img2.png',
        },
        {
          userId: 1,
          id: 3,
          title: 'title 3',
          body: 'body 3',
          url: 'img/img3.png',
        },
      ]),
    );
  }),
];
const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });
  it('should render PostCard, Posts and TextInput', async () => {
    render(<Home3 />);
    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    expect.assertions(3);
    const theInput = screen.getByPlaceholderText(/search/i);
    expect(theInput).toBeInTheDocument();

    const allPosts = screen.getAllByRole('img');
    expect(allPosts).toHaveLength(2);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });
  it('should show only the search value', async () => {
    render(<Home3 />);
    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    expect.assertions(5);
    const theInput = screen.getByPlaceholderText(/search/i);
    expect(theInput).toBeInTheDocument();
    userEvent.type(theInput, 'title 1');

    expect(screen.queryByRole('heading', { name: 'title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'title 2' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Search Value: title 1' })).toBeInTheDocument();

    userEvent.clear(theInput);
    userEvent.type(theInput, 'yimnr');
    expect(screen.getByText('Não existem posts')).toBeInTheDocument();
  });
  it('should load more posts after clicking the button', async () => {
    render(<Home3 />);
    const noMorePosts = screen.getByText('Não existem posts');
    await waitForElementToBeRemoved(noMorePosts);

    expect.assertions(4);
    expect(screen.getAllByRole('img')).toHaveLength(2);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();

    userEvent.click(button);
    expect(screen.getAllByRole('img')).toHaveLength(3);
    expect(button).toBeDisabled();
  });
});
