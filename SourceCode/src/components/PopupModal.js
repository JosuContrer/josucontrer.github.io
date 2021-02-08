import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import {Carousel} from "react-responsive-carousel";

// import 'reactjs-popup/dist/index.css';
import './PopupModal.scss';

export const PopupModal = (props) => {

    return(
    <Popup
        trigger={<button className="buttModal">Click me for more ... </button>}
        modal
        nested
    >
      
        {close => (
                <div className="modal">
                    <button className="close" onClick={close}>
                        &times;
                    </button>
                    <div className="imagesContainer">
                        <Carousel showArrows={true}>
                            {props.content.map((item, index) =>
                                <div>
                                    {item.type === 'img' ? 
                                        <img src={item.object}/> :
                                        <video width="100%" controls>
                                            <source src={item.object} type="video/mp4"></source>    
                                        </video>}
                                </div>
                            )}
                        </Carousel>
                    </div>
                    <div className="header"> {props.title} </div>
                    <div className="content">
                        {' '}
                        {props.bulletPoints}
                    </div>
                    <h4>Documentation</h4>
                    <div className="documentationContainer">
                        {props.documentation.map((item, index) => 
                            <div className="dboxes">
                            {item.available === "Yes" ?
                                <a href={item.link}>
                                    {item.icon}
                                </a>
                             : <></>
                            }
                            </div>
                        )}
                    </div>
                </div>
        )}
       
    </Popup>)
};