//Componente retorna um jsx
//Componente recebe um props
// casting das props, pois recebe um objeto com os valores e não os valores direto
import P from 'prop-types';
import './styles.css';
export const PostCard = ({ title, cover, body }) => (
  <div className="post">
    <img src={cover} alt={title} />
    <h1>{title}</h1>
    <p>{body}</p>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  body: P.string.isRequired,
};
