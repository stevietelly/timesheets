import React, { ReactElement, useState } from 'react';
import "./Window.css";
import Home from '../../../pages/Home/Home';

const Window = () => {
    const default_screen = <Home handleScreenChange={handleScreenChange}/>
    function handleScreenChange(screen:ReactElement) {
        setCurrentScreen(screen);
    }
    const [currentScreen, setCurrentScreen] = useState(default_screen);

  return currentScreen;
}

export default Window
