import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyClass from './MyClass';
import Posts from './Posts';
import Header from './Header';
import NewPost from './NewPost';
import axios from 'axios';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Signin from './Signin';
import AuthContext from './AuthContext';

const data = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    "userId": 1,
    "id": 3,
    "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    "userId": 1,
    "id": 4,
    "title": "eum et est occaecati",
    "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },]
class App extends Component {
  state = {
    baseId: 4 * 5,
    posts: [],
    isAuth: false
  }

  async componentDidMount() {
    console.log('did mount');
    // setTimeout(() => {
    //   this.setState((prevState) => {
    //     return { posts: data }
    //   })
    // }, 2000)

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(posts);

    this.setState({ posts: response.data })
    // this.setState({ posts: data })
  }

  componentDidUpdate() {
    console.log('did update');
    // hago la llamada al servidor por aparte para cargar imagen
  }

  addPost = post => {
    post.userId = '23';
    post.id = this.state.posts.length + 1;

    this.setState((prevState) => {
      return {
        ...prevState,
        posts: [...prevState.posts, post]
      }
    })
  }

  deletePost = toDelete => {
    this.setState((prevState) => {
      return {
        ...prevState,
        posts: prevState.posts.filter(currentPost => currentPost.id !== toDelete)

      }
    })
  }

  handle = e => {
    this.setState({ baseId: Math.random() })
  }

  changeAuth = () => {
    this.setState((prevState) => {
      return {isAuth: !prevState.isAuth}
    })
  }

  render() {

    return (
      <AuthContext.Provider value={{
        isAuth: this.state.isAuth,
        toggleAuth: this.changeAuth
      }}>
        <BrowserRouter>
          <Header />
          {this.state.isAuth ? <button onClick={this.changeAuth}>Logout</button> : <button onClick={this.changeAuth}>Login</button> }
          <br/>
          <Switch>
            <Route exact path="/" render={() => <h2>Bienvenido</h2>} />
            <Route exact path="/signin" component={Signin} />
            <Route path="/new-post" render={props => <NewPost addPost={this.addPost} />} />
            <Route path="/posts" render={props => <Posts posts={this.state.posts} deletePost={this.deletePost} />} />
            {/* <Redirect from="/" to="/examen" /> */}
            <Route render={() => <h1>Oops. page not found</h1>} />
          </Switch>
      <img src="" alt="Cargado imagen"/>
        </BrowserRouter>
      </AuthContext.Provider>

    )
  }
}

export default App;
