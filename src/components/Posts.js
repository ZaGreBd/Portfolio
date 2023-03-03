import React from "react";
import "./Posts.css";

import Post from "./components_comuns/Post";

function Posts() {
  return (
    <div className="posts">
      <div className="posts_title">
        <h1>Minhas publicações</h1>
      </div>
      <div className="posts_container">
        <Post
          title="Boas-vindas"
          date="25/11/22"
          description="Olá, seja bem-vindo(a), aproveite e conheça os meus trabalhos realizados, caso tenha interesse sinta-se a vontade em contato. Se quiser me conhecer melhor pode clicar nos links disponíveis acima das tecnologias. "
          tags="#Saudações"
        />
      </div>
    </div>
  );
}

export default Posts;
