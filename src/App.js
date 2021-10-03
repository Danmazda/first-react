import './App.css';
import { Component } from 'react';

// Cria uma classe App que importa da super classe Component
class App extends Component{
    // state pode ser usado direto sem o construtor (this.state)
    state = { 
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

  render() {
    // Cria variável de mesmo nome da chave do objeto
    const { posts } = this.state;
    // map faz a função para cada elemento da lista sendo esse elemento post
    return(
      //posts.map deve retornar somente uma tag, denro dessa tag podem ter quantas quiser
    <div className="App">
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
