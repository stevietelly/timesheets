import React from 'react';
import "./TableHeadRow.css";

const TableHeadRow = (props : {children: React.ReactNode}) => {
  return (
    <div className='TableHeadRow'>
      {props.children}
    </div>
  )
}

export default TableHeadRow
