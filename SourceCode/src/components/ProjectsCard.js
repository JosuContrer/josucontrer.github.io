import React from 'react'

import {Carousel} from "react-responsive-carousel";
import {computerScienceData} from '../data/CSProjectsData.js';
import {roboticsData} from '../data/RBEProjectsData.js';
import {PopupModal} from './PopupModal.js';

import './carousel.css';
import './ProjectsCard.scss';

function ProjectsCard() {

    const listItem = (length, index) => {
        if(index !== length){
           return ", ";
        }
    }
    return (
        <div className="ProjectsContainer">
            <h1 className="CardTitle ProjectsTextWrapper">PROJECTS</h1>
            <h2 className="CardSubTitle">COMPUTER SCIENCE</h2>
            {/*omputer Science</h2>*/}
            {/*<div className="ContentContainer">*/}
            {/*    <div className="CarouselWrapper">*/}
            {/*        <Carousel showArrows={true} >*/}
            {/*            {*/}
            {/*                computerScienceData.map((item, index) =>*/}
            {/*                    <div key={index}>*/}
            {/*                        <img src={item.image}/>*/}
            {/*                        <div className="legend">*/}
            {/*                            <h1>{item.title}</h1>*/}
            {/*                            <p>{*/}
            {/*                                item.components.map((item2, index) => {*/}
            {/*                                    if (item.components.length !== (index+1))*/}
            {/*                                        return item2 + ', '*/}
            {/*                                    return item2*/}
            {/*                                })*/}
            {/*                            }</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                )*/}
            {/*            }*/}
            {/*        </Carousel>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className="ContentContainer">
                {
                    computerScienceData.map((item, index) =>
                        <div className="ContentProfile" key={index}>
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
                                <PopupModal></PopupModal>
                            </div>
                            <div className="Grey"></div>
                            <img src={item.image}></img>
                        </div>
                    )
                }
            </div>
            {/* <h2 className="CardSubtitle">Robotics</h2>
            <div className="ContentContainer">
                {
                    roboticsData.map((item, index) => 
                        <div className="ContentProfile" key={index}>
                            <h3>{item.title}</h3>
                        </div>
                    )
                }
            </div> */}
            {/* <PopupModal></PopupModal> */}
        </div>
    )
}

export default ProjectsCard
