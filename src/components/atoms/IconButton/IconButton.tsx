import React from 'react';
import "./IconButton.css";

const IconButton = (props : {icon : any, style?: {}, onClick?: React.MouseEventHandler}) => {
  return (
    <div className='IconButton' style={props.style} onClick={props.onClick}>
      {props.icon}
    </div>
  )
}

export default IconButton
