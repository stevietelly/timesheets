import React from 'react'

const PlusIcon = (props: {color: string}) => {
  return (
    <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 12H18M12 6V18" stroke={props.color} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export default PlusIcon
