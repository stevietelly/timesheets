import React from 'react';




const Table = (props: {children: React.ReactNode}) => {
    return (
  <div className="Table">
    {props.children}
  </div>

    )
}

export default Table
