import React from 'react'

const ThreeDotsVerticalIcon = (props: {color: string}) => {
  return (
    <svg width="30px" height="30px" viewBox="0 0 24 24">
    <g transform="translate(24) rotate(90)">
      <rect width="24" height="24" fill="none"/>
      <circle cx="1" cy="1" r="1" transform="translate(5 11)" stroke={props.color} fill={props.color} strokeMiterlimit="10" strokeWidth="0.5"/>
      <circle cx="1" cy="1" r="1" transform="translate(11 11)" stroke={props.color} fill={props.color} strokeMiterlimit="10" strokeWidth="0.5"/>
      <circle cx="1" cy="1" r="1" transform="translate(17 11)" stroke={props.color} fill={props.color} strokeMiterlimit="10" strokeWidth="0.5"/>
    </g>
  </svg>
  )
}

export default ThreeDotsVerticalIcon
