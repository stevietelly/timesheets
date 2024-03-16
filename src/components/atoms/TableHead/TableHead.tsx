import React from 'react';

const TableHead = (props: {no_of_columns?: number, columns?: Array<object>, children: React.ReactNode}) => {
  return (
    <div className='TableHead'>
      {props.children}
    </div>
  )
}

export default TableHead
