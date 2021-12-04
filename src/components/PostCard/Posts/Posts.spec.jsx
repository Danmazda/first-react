import { render, screen } from '@testing-library/react';
import { Posts } from './posts';
// key={post.id}
// title={post.title}
// cover ={post.cover}
// body = {post.body}
const props = [
  {
    id: 1,
    title: 'title 1',
    cover: 'img/img.png',
    body: 'body 1',
  },
];

describe('<Posts />', () => {
  it('should render Posts', () => {
    render(<Posts posts={props} />);
    expect(screen.getByRole('heading', 'title 1')).toBeInTheDocument();
    expect(screen.getByAltText('title 1')).toHaveAttribute('src', 'img/img.png');
    expect(screen.getByText('body 1')).toBeInTheDocument();
  });
  it('should be like the snapshot', () => {
    const { container } = render(<Posts posts={props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
