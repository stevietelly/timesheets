import React, { useState } from 'react';
import "./Alert.css";
import IconButton from '../IconButton/IconButton';
import XIcon from '../../../icons/XIcon';
import ErrorIcon from '../../../icons/ErrorIcon';

const Alert = (props: {isOpen: boolean, message: string, type: string, setOpen: Function}) => {
  
    if (!props.isOpen) return null;
    return (
      <div className={"alert " + props.type}>
        <div className="flex-center alert-box">
          <div className="alert-box-icon flex-center"><ErrorIcon/></div>
        <p>{props.message}</p>
        </div> 
       
        <IconButton icon={<XIcon/>} onClick={()=>props.setOpen(false)}/>
    
      </div>
    );
}

export default Alert
