import React from 'react';
import './Post.css'
import withAuth from './test-hoc';

const Post = props => {
  return (
    <div className="single-post">
      <h1>{props.title}</h1>
      <br />
      <div>{props.contenido}</div>
      <div>{props.author}</div>
      <button onClick={props.deletePost}>Delete me</button>
      {props.isAuth ?
        <div>holamundo</div> :
        <div>login to delete</div> }
    </div>
  )
}
const wrapped = withAuth(Post)
export default Post;
