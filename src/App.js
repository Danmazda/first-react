import './App.css';
import { Component } from 'react';

// Cria uma classe App que importa da super classe Component
class App extends Component{
    // state pode ser usado direto sem o construtor (this.state)
    state = {
      counter: 0,
     posts: [
       {
         id: 1,
         title: 'Título 1',
         body: 'Corpo 1'
       },
       {
        id: 2,
        title: 'Título 2',
        body: 'Corpo 2'
      },
      {
        id: 3,
        title: 'Título 3',
        body: 'Corpo 3'
      }
     ]
    };
  //Para ter acesso ao timeout de qlqr parte dentro da classe
  timeoutUpdate = null;
  handleTimeOut = () => {
    const {posts, counter} = this.state;
    posts[0].title = 'O título mudou';
    if(counter <= 5){
    this.timeoutUpdate = setTimeout(() => {
      this.setState({posts: posts, counter: counter+1});
    }, 1000);}
    else{
      console.log('Counting is done')
    }
  }

  componentDidMount(){
    this.handleTimeOut();
  }

  componentDidUpdate(){
    this.handleTimeOut();
  };
  // Limpar o lixo deicado pelo settimeout toda vez que o componente é desmontado
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate);
  };
  render() {
    // Cria variável de mesmo nome da chave do objeto
    const { posts, counter} = this.state;
    // map faz a função para cada elemento da lista sendo esse elemento post
    return(
      //posts.map deve retornar somente uma tag, denro dessa tag podem ter quantas quiser
    <div className="App">
      <h2>{counter}</h2>
      {posts.map(post =>(
        <div className='myDiv' key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>);
  };}

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
