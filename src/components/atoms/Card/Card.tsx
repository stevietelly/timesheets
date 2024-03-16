import React from 'react';
import "./Card.css";


const Card = (props: {height?:string, children?:React.ReactNode, width?: string, style?: {}, class?: string}) => {
  var class_ = props.class?`Card ${props.class}`: "Card";
  var styles = props.style;
  if (props.height)styles = {height: props.height, ...styles};
  if (props.width)styles = {width: props.width, ...styles};
  
  
  return (
    <div className={class_} style={styles}>
      {props.children}
    </div>
  )
}

export default Card
