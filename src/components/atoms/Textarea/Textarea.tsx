import React from 'react';
import "./Textarea.css";

const Textarea = (props: {label:string, width?:string, setNotes: React.Dispatch<React.SetStateAction<string>>, optional?: boolean}) => {
    var style = {width: props.width?props.width:"500px"};
    var label = props.optional?<span className='textarea-label flex' style={{gap: "5px"}}>{props.label + "*"} <h6>optional</h6></span>:<span className='textarea-label'>{props.label}</span>
  return (
    <div className='textarea-area' style={style}>
      <textarea name="" id="" cols={72} rows={5} required onChange={(e)=>props.setNotes(e.target.value)}></textarea>
      <div className="textarea-underline"></div>
      {label}
    </div>
  )
}

export default Textarea
