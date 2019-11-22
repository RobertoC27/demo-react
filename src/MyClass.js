import React, { Component } from 'react';;

class MyClass extends Component {

  constructor(props) {
    super(props)
    this.state = { prueba: "Testing my class", id: this.props.id +7 }
  }
  render() {
    return (
      <div>
        <h1>Esto es una clase {this.state.id}</h1>
        <h2>{this.state.prueba}</h2>
      </div>
    )
  }
}

export default MyClass;