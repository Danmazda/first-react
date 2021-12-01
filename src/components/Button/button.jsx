import { Component } from 'react';
import './styles.css'
// export const Button = ({text, new}) => (<button onClick=new()>{text}</button>);
export class Button extends Component{
   
    render(){
        const {text, f, disabled} = this.props;
        return(
            <button onClick={f} className="load" disabled={disabled}>
                {text}
            </button>
        );
    }
}

