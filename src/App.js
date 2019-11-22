import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyHeader from './MyHeader';
import MyClass from './MyClass';
import Posts from './Posts';
import Header from './Header';
import { BrowserRouter, Route } from 'react-router-dom';
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
  state = { baseId: 4 * 5, posts: [] }

  componentDidMount() {
    console.log('did mount');
    setTimeout(() => {
      this.setState((prevState) => {
        return { posts: data }
      })
    }, 2000)
  }

  componentDidUpdate() {
    console.log('did update');

  }

  handle = e => {
    this.setState({ baseId: Math.random() })
  }

  render() {

    return (
      <div >
        <BrowserRouter>
          <Header />
          <Route exact path="/" render={() => <h2>Bienvenido</h2> } />
          <Route path="/new-post" component={Header} />
          {/* <Posts posts={this.state.posts} /> */}
        </BrowserRouter>
      </div>

    );
  }
}

export default App;
