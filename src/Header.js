import React from 'react';

const Header = props => {
  return (
    <header>
      <nav>
        <ul className="header=elements">
          <li className="header-element"><a href="/">Home</a></li>
          <li className="header-element"><a href="/posts">Posts</a></li>
          <li className="header-element"><a href="/new-post">New Post</a> </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;