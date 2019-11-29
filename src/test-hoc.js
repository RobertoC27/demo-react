import React from 'react';
import AuthContext from './AuthContext';

const withAuth = Component => props => {
  return (
    <AuthContext.Consumer >
      {value => <Component isAuth={value.isAuth} {...props} />}
    </AuthContext.Consumer>
  )
}

export default withAuth;