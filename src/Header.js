import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import WithAuth from './test-hoc';
import withAuth from './test-hoc';

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

          {props.isAuth ?
            <Fragment>
              <li>Soporte</li>
              <li className="header-element">
                <Link to="/new-post">New post</Link>
              </li>
            </Fragment> :
            <li>Login</li>}
        </ul>
      </nav>
    </header>
  )
}

const wrappedHeader = withAuth(Header);
export default Header;