import React from 'react';
import "./Button.css";

const Button = (props: {name: string, width?: string, onClick: React.MouseEventHandler}) => {
  var width = "150px"
  return (
 <button className='Button' style={{width: width}} onClick={props.onClick}>
  {props.name}
 </button>
  )
}

export default Button
