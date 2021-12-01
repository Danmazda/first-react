import './App.css';
import { Component } from 'react';

import {Posts} from '../components/PostCard/Posts/posts'
import {loadPostsF} from '../utils/loadPosts'
import {Button} from '../components/Button/button'
import { TextInput } from '../components/TextInput';

// Cria uma classe App que importa da super classe Component
class Home extends Component{
    // state pode ser usado direto sem o construtor (this.state)
    state = {
     posts: [],
     allPosts: [],
     page: 0,
      postsPerPage: 10,
      searchValue: ''
    };
 

  //lifecicle method
 async componentDidMount(){
   await this.loadPosts();
  }
  loadPosts = async () => {
    const {page, postsPerPage} = this.state;
    const photosAndPosts = await loadPostsF();
    this.setState({posts : photosAndPosts.slice(page, postsPerPage),
                    allPosts: photosAndPosts});
  }

  loadMorePosts = () =>{
    const {posts, allPosts, page, postsPerPage} = this.state;
    const newPage = page + postsPerPage;
    const nextPosts = allPosts.slice(newPage, newPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({posts, page: newPage});
  }
  handleInput =(e)=>{
    const {value} = e.target;
    this.setState({searchValue: value});
  }

  render() {
    // Cria variável de mesmo nome da chave do objeto
    const {posts, allPosts, page, postsPerPage, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length
    const filteredPosts = !!searchValue ? allPosts.filter(post => 
      {return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
        )}) 
      : posts;
    return(
      // map faz a função para cada elemento da lista sendo esse elemento post
      //posts.map deve retornar somente uma tag, denro dessa tag podem ter quantas quiser
    <div className="App">
        {/* Avaliação de curto circuito:
          Se não existe nada no searchValue o resultado é falso
          Quando for verdadeiro faça o q estiver depois do && */}
        
       <section className='container' key='ronaldo'>
       <div className='search-container'>
          {!!searchValue && (
              <h1>Search Value: {searchValue}</h1>
          )}
            <TextInput searchValue={searchValue} handleInput={this.handleInput}/>
        </div>
         {filteredPosts.length > 0 && (
           <Posts posts={filteredPosts}/>
         )}
         {filteredPosts.length === 0 && (
           <p>Não existem posts</p>
         )}
         
         {!searchValue && (
           <div className='button-container'>
              <Button text='Load more' f={this.loadMorePosts} disabled={noMorePosts}/>
            </div>
         )}
         
       </section>
    </div>);
  };
}

export default Home;
