export const loadPostsF = async () => {
  //Pegando os dados da api
  const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts');
  const postsPhotos = fetch('https://jsonplaceholder.typicode.com/photos');
  //esperando o retorno para colocar na variável
  const [posts, photos] = await Promise.all([postsResponse, postsPhotos]);

  //esperando a variável para transformá-la em json
  const postsJson = await posts.json();
  const photosJson = await photos.json();

  // Há muito mais fotos do que posts
  // retorna o objeto do post junto com a url da imagem de acordo com o indice de cada loop
  const photosAndPosts = postsJson.map((post, index) => {
    return { ...post, cover: photosJson[index].url };
  });
  return photosAndPosts;
};
