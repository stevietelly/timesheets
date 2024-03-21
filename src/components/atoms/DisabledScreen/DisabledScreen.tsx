import React from 'react';
import "./DisabledScreen.css";

const DisabledScreen = (props: {screenDisabled: boolean, setScreenDisabled: React.Dispatch<React.SetStateAction<boolean>>}) => {
  return props.screenDisabled && <div className='disabled-screen'></div>
}

export default DisabledScreen
