import React from 'react';


const MyHeader = props => {
  
  return(
    <div>El nombre es: {props.nombre} con edad {props.edad}</div>
  )
}

export default MyHeader;