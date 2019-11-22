import React from 'react';
import './Post.css'
const Post = props => {
  return (
    <div className="single-post"> 
      <h1>{props.title}</h1>
      <br />
      <div>{props.contenido}</div>
      <div>{props.author}</div>
    </div>
  )
}

export default Post;