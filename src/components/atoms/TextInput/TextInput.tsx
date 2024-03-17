import React from 'react';
import "./TextInput.css";

const TextInput = (props: {label: string, setValue: React.Dispatch<React.SetStateAction<string>>, width?: string, optional?: boolean}) => {
    var style = {width: props.width?props.width:"500px"}
    var label = props.optional?<span className='text-input-label flex' style={{gap: "5px"}}>{props.label + "*"} <h6>optional</h6></span>:<span className='text-input-label'>{props.label}</span>
  return (
    <div className="text-input-area" style={style}>
        <input type="text" required onChange={(e)=>props.setValue(e.target.value)}/>
        <div className="text-input-underline"></div>
        {label}
    </div>
  )
}

export default TextInput
