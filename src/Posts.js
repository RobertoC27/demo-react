import React from 'react';
import Post from './Post';

const posts = props => {
  let posts = <h2>No hay posts</h2>;
  if (props.posts && props.posts.length) {
    posts = props.posts.map(post => {
      return (
        <Post
          key={post.id}
          title={post.title}
          contenido={post.body}
          author={post.userId}
        />
      )
    })
  }
  return (
    <div>
      {posts}
    </div>
  )
}

export default posts;