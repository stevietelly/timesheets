import React from 'react';
import "./IconLabelButton.css";

const IconLabelButton = (props:{icon: React.ReactNode, style?: {}, name:string, onClick?: React.MouseEventHandler}) => {
  return (
    <div onClick={props.onClick} className='button__area' style={props.style}>
      <div className="button__icon flex-center">{props.icon}</div>
      <div className="button__label ">{props.name}</div>
    </div>
  )
}

export default IconLabelButton
