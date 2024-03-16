import React from 'react'

const TimesheetsIcon = (props: {width?: number, height?: number, color?: string}) => {
  var size = {width: props.width?props.width:40, height: props.height?props.height:40};
  var cls = props.color?props.color:"#e64848";
  return (
 
    <svg width={size.width} height={size.height} viewBox="0 0 24 24" id="_24x24_On_Light_Schedule" data-name="24x24/On Light/Schedule" xmlns="http://www.w3.org/2000/svg">
      <rect id="view-box" width="24" height="24" fill="none"/>
      <path id="Shape" d="M2.75,17.5A2.753,2.753,0,0,1,0,14.75v-10A2.754,2.754,0,0,1,2.5,2.011V.75A.75.75,0,0,1,4,.75V2h9.5V.75a.75.75,0,0,1,1.5,0V2.011A2.754,2.754,0,0,1,17.5,4.75v10a2.752,2.752,0,0,1-2.75,2.75ZM1.5,14.75A1.251,1.251,0,0,0,2.75,16h12A1.251,1.251,0,0,0,16,14.75V8H1.5ZM16,6.5V4.75A1.251,1.251,0,0,0,14.75,3.5h-12A1.251,1.251,0,0,0,1.5,4.75V6.5Z" transform="translate(3.25 3.25)" fill={cls}/>
    </svg>
  )
}

export default TimesheetsIcon
