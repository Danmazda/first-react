import './App.css';
import { useState, useEffect, useCallback } from 'react';

import { Posts } from '../components/PostCard/Posts/posts';
import { loadPostsF } from '../utils/loadPosts';
import { Button } from '../components/Button/button';
import { TextInput } from '../components/TextInput';

// class Counter extends Component {
//   state = {
//     counter: 0,
//   };

//   handleCounter = () => {
//     this.setState(
//       //função para garantir que vai pegar o último estado
//       (prevState) => {
//         return { counter: prevState.counter + 1 };
//       },
//       // callback para ter certeza que será executado após
//       () => {
//         console.log('This:', this.state.counter);
//       },
//     );
//   };
//   render() {
//     return (
//       <div className="container">
//         <h1>{this.state.counter}</h1>
//         <button onClick={this.handleCounter}>Incrementar</button>
//       </div>
//     );
//   }
// }

export const Home3 = () => {
  // state = {
  //   posts: [],
  //   allPosts: [],
  //   page: 0,
  //    postsPerPage: 10,
  //    searchValue: ''
  //  };
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(2);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase());
      })
    : posts;

  const loadPosts = useCallback(async (page, postsPerPage) => {
    const photosAndPosts = await loadPostsF();
    setAllPosts(photosAndPosts);
    setPosts(photosAndPosts.slice(page, postsPerPage));
  }, []);

  const loadMorePosts = () => {
    //const {posts, allPosts, page, postsPerPage} = this.state;
    const newPage = page + postsPerPage;
    const nextPosts = allPosts.slice(newPage, newPage + postsPerPage);
    posts.push(...nextPosts);
    setPage(newPage);
    setPosts(posts);
    //this.setState({posts, page: newPage});
  };
  const handleInput = (e) => {
    const { value } = e.target;
    //this.setState({searchValue: value});
    setSearchValue(value);
  };

  useEffect(() => {
    loadPosts(0, postsPerPage);
  }, [loadPosts, postsPerPage]);
  return (
    // map faz a função para cada elemento da lista sendo esse elemento post
    //posts.map deve retornar somente uma tag, denro dessa tag podem ter quantas quiser
    <div className="App">
      {/* Avaliação de curto circuito:
          Se não existe nada no searchValue o resultado é falso
          Quando for verdadeiro faça o q estiver depois do && */}

      <section className="container" key="ronaldo">
        <div className="search-container">
          {!!searchValue && <h1>Search Value: {searchValue}</h1>}
          <TextInput searchValue={searchValue} handleInput={handleInput} />
        </div>
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length === 0 && <p>Não existem posts</p>}

        {!searchValue && (
          <div className="button-container">
            <Button text="Load more" f={loadMorePosts} disabled={noMorePosts} />
          </div>
        )}
      </section>
    </div>
  );
};

// Cria uma classe App que importa da super classe Component
// class Home2 extends Component {
//   // state pode ser usado direto sem o construtor (this.state)
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 10,
//     searchValue: '',
//   };

//   //lifecicle method
//   async componentDidMount() {
//     await this.loadPosts();
//   }
//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const photosAndPosts = await loadPostsF();
//     this.setState({ posts: photosAndPosts.slice(page, postsPerPage), allPosts: photosAndPosts });
//   };

//   loadMorePosts = () => {
//     const { posts, allPosts, page, postsPerPage } = this.state;
//     const newPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(newPage, newPage + postsPerPage);
//     posts.push(...nextPosts);
//     this.setState({ posts, page: newPage });
//   };
//   handleInput = (e) => {
//     const { value } = e.target;
//     this.setState({ searchValue: value });
//   };

//   render() {
//     // Cria variável de mesmo nome da chave do objeto
//     const { posts, allPosts, page, postsPerPage, searchValue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;
//     const filteredPosts = !!searchValue
//       ? allPosts.filter((post) => {
//           return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//       : posts;
//     return (
//       // map faz a função para cada elemento da lista sendo esse elemento post
//       //posts.map deve retornar somente uma tag, denro dessa tag podem ter quantas quiser
//       <div className="App">
//         {/* Avaliação de curto circuito:
//           Se não existe nada no searchValue o resultado é falso
//           Quando for verdadeiro faça o q estiver depois do && */}

//         <section className="container" key="ronaldo">
//           <div className="search-container">
//             {!!searchValue && <h1>Search Value: {searchValue}</h1>}
//             <TextInput searchValue={searchValue} handleInput={this.handleInput} />
//           </div>
//           {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
//           {filteredPosts.length === 0 && <p>Não existem posts</p>}

//           {!searchValue && (
//             <div className="button-container">
//               <Button text="Load more" f={this.loadMorePosts} disabled={noMorePosts} />
//             </div>
//           )}
//         </section>
//       </div>
//     );
//   }
// }

export default Home3;
