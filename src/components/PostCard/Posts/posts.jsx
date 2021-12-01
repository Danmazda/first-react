import { PostCard } from "..";
import './styles.css';


export const Posts = ({posts})=>(
    <div className='posts'>
    {posts.map(post =>(
      //Todos os elementos do map precisam de key(id)
      // Componente precisa ser aberto e fechado como uma tag html
      // atributos da tag serão passados como props
      <PostCard 
      key={post.id}
      title={post.title}
      cover ={post.cover}
      body = {post.body}
      />
    ))}
  </div>
); 