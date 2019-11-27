import React from 'react';

const withAuth = Component => props =>{
  return class WithAuth extends React.Component {
    
    state = {isAuth: true}
    render() {
      return (
        <Component isAuth={this.state.isAuth} {...this.props}/>
      )
    }
  }
}

export default withAuth;