import React from 'react';
import "./HyperlinkButton.css";

 const HyperlinkButton = (props: any) => {
  return (
    <div className='flex-center' style={{height: "100%"}}>
      <span className="button__name color-grey" onClick={props.onClick}>{props.name}</span>
    </div>
  )
}

export default HyperlinkButton
