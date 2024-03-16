import React from 'react';
import "./TableCell.css";
const TableCell = (props: {align?: string, children: React.ReactNode, flex?: number}) => {
    var flt = props.align?"center":props.align;// start end center
    var flx = props.flex?1:props.flex;
  return (
    <div className='TableCell' style={{display: "flex", justifyContent: flt, alignItems: "center", flex: flx}}>
      {props.children}
    </div>
  )
}

export default TableCell
