import { render, screen } from '@testing-library/react';
import { PostCard } from './index';
const mock = {
  title: 'title 1',
  cover: 'img/img.png',
  body: 'body 1',
};

describe('<PostCard/>', () => {
  it('should render PostCard properly', () => {
    // Spread faz os atributos do mock se tronarem props do PostCard
    render(<PostCard {...mock} />);
    //debug do método render, vê o que está sendo renderizado pelo console
    expect(screen.getByAltText(/title 1/i)).toHaveAttribute('src', mock.cover);
    expect(screen.getByRole('heading', mock.title)).toBeInTheDocument();
    expect(screen.getByText(mock.body)).toBeInTheDocument();
  });
  it('should match the snapshot', () => {
    const { container } = render(<PostCard {...mock} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
