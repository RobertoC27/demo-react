import React from 'react';


const rectangle = props => {
  return <span 
  style={{
    width: '10rem',
    height: '10rem',
    border: '5px dotted blue',
    boxSizing: 'border-box',
    padding: '1.5rem',
    margin: '2rem',
    display: 'inline-block',
    textAlign: "center"

  }}>
    <h2 style={{marginTop: 0 }}>{props.title}</h2>
    <p style={{textAlign: "center"}}>{props.content}</p>
  </span>
}

export default rectangle;