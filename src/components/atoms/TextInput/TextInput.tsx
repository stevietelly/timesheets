import React from 'react';
import "./TextInput.css";

const TextInput = (props: { label: string, width?: string }) => {
    var style = {width: "500px"};
    style.width = props.width? props.width: style.width;
    return (
        <div className='text-input-holder'>
            <input type="text" required className='text-input' style={style}/>
            <div className="text-label">{props.label}</div>
        </div>
    )
}

export default TextInput
