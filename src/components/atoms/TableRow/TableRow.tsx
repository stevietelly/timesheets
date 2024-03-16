import React from 'react';
import "./TableRow.css";

const TableRow = (props : {children: React.ReactNode}) => {
  return (
    <div className='TableRow'>
      {props.children}
    </div>
  )
}

export default TableRow
