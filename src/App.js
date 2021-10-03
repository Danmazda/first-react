import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Cria uma classe App que importa da super classe Component
class App extends Component{
  //constructor sempre usa props
  constructor(props){
    //Usa a super classe para criar o objeto
    super(props);
    // Alteração do estado do objeto
    this.state = { 
      name: 'Danilo Procópio',
      counter: 0
    };
  }
  // Usa-se arrow function, pois ela n tem this, assim quando se usa this esta se referindo a própria classe
  handlePClick = () =>{
    // A cada alteração de estado render é chamado novamente 
    this.setState({name: 'Gilberto'});
  }

  handleAClick = (event)=>{
    event.preventDefault();
    const { counter } = this.state;
    this.setState({counter: counter+1});
  }

  render(){
    // Cria variável de mesmo nome da chave do objeto
    const { name, counter } = this.state;
    return(<div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p onClick={this.handlePClick}>
                {name} {counter}
              </p>
              <a onClick={this.handleAClick}
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header> 
          </div>);
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Olá mundo
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
