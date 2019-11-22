import React from 'react';
import { Link } from 'react-router-dom';

const Header = props => {
  return (
    <header>
      <nav>
        <ul className="header=elements">
          <li className="header-element">
            
            <Link to="/">Home</Link>
          </li>
          <li className="header-element">
            
            <Link to={{
              pathname: '/posts',
              hash: '#unelement',
              search: '?user=1232'
            }} >Posts</Link>
          </li>
          <li className="header-element">
            <Link to="/new-post">New post</Link>
            </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;