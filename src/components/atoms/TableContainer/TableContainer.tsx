import React from 'react'


const TableContainer = (props: {children?: React.ReactNode}) => {
  return (
    <div className='TableContainer'>
      {props.children}
    </div>
  )
}

export default TableContainer
