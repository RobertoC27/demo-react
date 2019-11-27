import React from 'react';

class NewPost extends React.Component {

  constructor(props) {
    super(props);
    this.initialState = {
      title: '',
      body: '',
      isSubmitting: false
    }
    this.state = this.initialState
  }


  handleTitleChange = e => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    this.setState({ title: e.target.value })
  }

  handleBodyChange = e => {
    this.setState({ body: e.target.value })

  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    this.setState({isSubmitting: true})
    setTimeout(() => {
      this.setState({
        ...this.initialState
      })
    }, 2000)
  }

  createPost = () => {
    this.props.addPost({
      title: this.state.title,
      body: this.state.body
    });
    this.setState(this.initialState)
  }

  render() {
    return (
      <div>
        <h1>Datos para el post</h1>
        <label htmlFor="title">Titulo</label>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleChange} />
        <br />
        <label>Contenido</label>
        <input
          type="text"
          name="body"
          value={this.state.body}
          onChange={this.handleChange} />
        <br />
        <button 
        onClick={this.createPost}
        disabled={this.state.isSubmitting}>Enviar</button>
      </div>
    )
  }
}

export default NewPost;