import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should render TextInput', () => {
    const fn = jest.fn();
    render(<TextInput handleInput={fn} />);
    const input = screen.getByPlaceholderText(/search/i);
    expect(input).toBeInTheDocument();
  });
  it('should call handleInput on each keypress', () => {
    const fn = jest.fn();
    render(<TextInput handleInput={fn} />);
    const input = screen.getByPlaceholderText(/search/i);
    const value = 'the value';
    userEvent.type(input, value);
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length);
  });
  it('should match the snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput handleInput={fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
