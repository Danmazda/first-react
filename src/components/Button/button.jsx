import P from 'prop-types';
import { Component } from 'react';
import './styles.css';
// export const Button = ({text, new}) => (<button onClick=new()>{text}</button>);
export class Button extends Component {
  render() {
    const { text, f, disabled = false } = this.props;
    return (
      <button onClick={f} className="load" disabled={disabled}>
        {text}
      </button>
    );
  }
}

Button.defaultProps = {
  disabled: false,
};
Button.propTypes = {
  text: P.string.isRequired,
  f: P.func.isRequired,
  disabled: P.bool,
};
