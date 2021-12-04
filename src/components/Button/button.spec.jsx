import { fireEvent, render, screen } from '@testing-library/react';
import { Button } from './button';
const fn = jest.fn();
describe('< Button />', () => {
  it('should render a button with text', () => {
    render(<Button text="load more" f={fn} disabled={false} />);

    //Asserção assíncrona
    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });
  it('should call a function on click', () => {
    render(<Button text="load more" f={fn} disabled={false} />);
    const button = screen.getByRole('button', { name: /load more/i });
    fireEvent.click(button);
    expect(fn).toBeCalledTimes(1);
  });
  it('should be disabled if disabled is true', () => {
    render(<Button text="load more" f={fn} disabled={true} />);
    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });
  it('should match the snapshot', () => {
    const { container } = render(<Button text="load more" f={fn} disabled={false} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
