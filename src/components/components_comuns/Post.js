import React from "react";
// import "./Post.css";

import Foto from "../../assets/photos/shanks.jpg";

function Post(props) {
  return (
    <div className="post">
      <div className="post_container">
        <div className="post_photo">
          <img src={Foto} alt="Foto do autor" />
        </div>
        <div className="post_text">
          <div className="post_title">
            <p>{props.title}</p>
          </div>
          <div className="post_date">
            <p>{props.date}</p>
          </div>
          <div className="post_description">
            <p>{props.description}</p>
          </div>
        </div>
      </div>
      <div className="post_tags">
        <p>{props.tags}</p>
      </div>
    </div>
  );
}

export default Post;
