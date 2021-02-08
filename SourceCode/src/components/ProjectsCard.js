import React, { useState } from 'react'

import {Carousel} from "react-responsive-carousel";
import {computerScienceData} from '../data/CSProjectsData.js';
import {roboticsData} from '../data/RBEProjectsData.js';
import {PopupModal} from './PopupModal.js';

import './carousel.css';
import './ProjectsCard.scss';

function ProjectsCard() {

    const [isShown, setIsShown] = useState(false);

    const listItem = (length, index) => {
        if(index !== length){
           return ", ";
        }
    }
    return (
        <div className="ProjectsContainer">
            <h1 className="CardTitle ProjectsTextWrapper">PROJECTS</h1>
            <h2 className="CardSubTitle">COMPUTER SCIENCE</h2>
            <div className="ContentContainer">
                {
                    computerScienceData.map((item, index) =>
                        <div className="ContentProfile" key={index} onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}>
                            <h3>{item.title}</h3>
                            <div className="Description">
                                <p className="Components">{
                                    item.components.map((item2, index) => {
                                            if(item.components.length !== (index+1))
                                                return item2 + ', '
                                            return item2
                                        }
                                    )
                                }</p>
                                <p className="Des">{item.description}</p>
                                <PopupModal index={index} visible={isShown} content={item.content} title={item.title} bulletPoints={item.bulletPoints} documentation={item.documentation}></PopupModal>
                            </div>
                            <div className="Grey"></div>
                            <img src={item.image}></img>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProjectsCard
