import React from 'react';
import "./Popup.css";
import XIcon from '../../../icons/XIcon';
import IconButton from '../IconButton/IconButton';


const Popup = (props: { isOpen: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode, title: string }) => {
    if (!props.isOpen) return null;

   
    return (
        <div className="popup-backdrop">
            <div className={`popup ${props.isOpen ? 'show' : ''}`} id="popup">
                <div className="popup-top" >
                    <h2 className='color-primary' style={{textDecoration: "none"}}>{props.title}</h2>
                    <IconButton icon={<XIcon />} style={{ position: "absolute", right: "2px" }} onClick={() => props.setOpen(false)} />

                </div>
                <div className="popup-bottom">
                {props.children}
                </div>
                
            </div>
        </div>
    )
}

export default Popup;

