import React from 'react';
import "./Template.css";
import ThreeDotsVerticalIcon from '../../../icons/ThreeDotsVerticalIcon';
import IconButton from '../IconButton/IconButton';


const Template = (props: any) => {
  // Shapes: Square or Reactangle


  return (

      <div className="Template">
        <div className="template__top">
          <IconButton icon={<ThreeDotsVerticalIcon color="#F64848"/>} style={{position: "absolute", right: 0,top:0}}/>
          
        </div>
        <div className="template__bottom flex-center background-primary color-light" style={{cursor: "default"}}><h6>{props.title}</h6></div>
      </div>
    
     

  )
}

export default Template;
