import React from 'react';
import "./Popup.css";
import XIcon from '../../../icons/XIcon';
import IconButton from '../IconButton/IconButton';


const Popup = (props: { isOpen: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>>, children: React.ReactNode, title: string, backgroundExit?: boolean}) => {
    // BUGFIX: Children Elements to backdrop uninteneded exit
    if (!props.isOpen) return null;
    const backdropInitiatedExit = () => {if(props.backgroundExit){props.setOpen(false)}}
   
    return (
        <div className="popup-backdrop" onClick={()=>backdropInitiatedExit()}>
            <div className={`popup ${props.isOpen ? 'show' : ''}`} id="popup">
                <div className="popup-top" >
                    <div className="popup-title">
                    <h2 className='color-primary' style={{textDecoration: "none"}}>{props.title}</h2>
                    </div>
                    
                    <IconButton icon={<XIcon />} style={{ position: "absolute", right: "2px", top: "2px"}} onClick={() => props.setOpen(false)} />

                </div>
                <div className="popup-bottom">
                {props.children}
                </div>
                
            </div>
        </div>
    )
}



export default Popup;

