import React from 'react'

import {Carousel} from "react-responsive-carousel";
import {computerScienceData} from '../data/CSProjectsData.js';
import {roboticsData} from '../data/RBEProjectsData.js';

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
            <h1 className="CardTitle ProjectsTextWrapper">Projects</h1>
            <h2 className="CardSubTitle">Computer Science</h2>
            <div className="ContentContainer">
                <div className="CarouselWrapper">
                    <Carousel showArrows={true} >
                        {
                            computerScienceData.map((item, index) =>
                                <div key={index}>
                                    <img src={item.image}/>
                                    <div className="legend">
                                        <h1>{item.title}</h1>
                                        <p>{
                                            item.components.map((item2, index) => {
                                                if (item.components.length !== (index+1))
                                                    return item2 + ', '
                                                return item2
                                            })
                                        }</p>
                                    </div>
                                </div>
                            )
                        }
                    </Carousel>
                </div>
            </div>
            {/*<div className="ContentContainer">*/}
            {/*    {*/}
            {/*        computerScienceData.map((item, index) =>*/}
            {/*            <div className="ContentProfile" key={index}>*/}
            {/*                <h3>{item.title}</h3>*/}
            {/*                <p>{item.description}</p>*/}
            {/*                <div className="Grey"></div>*/}
            {/*                <img src={item.image}></img>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    }*/}
            {/*    /!* {computerScienceData.map((item, index) =>*/}
            {/*        <div className="ContentCard" id={index}>*/}
            {/*            <h3 className="ProjectTitle"> {item.title} </h3>*/}
            {/*            <div className="ImageContainer">*/}
            {/*                <img src={item.image}></img>*/}
            {/*            </div>*/}
            {/*            <div className="ComponentsContainer">*/}
            {/*                <h4 className="ProjectSubTitle"> Components </h4>*/}
            {/*                <div className="Icons">*/}
            {/*                    {item.documentation.map((item2, index) => */}
            {/*                        <a href={item2.link} id={index}>*/}
            {/*                            {item2.icon}*/}
            {/*                        </a>*/}
            {/*                    )}*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*            <div className="TextContainer">*/}
            {/*            <p>*/}
            {/*                {item.description}*/}
            {/*            </p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    )} *!/*/}
            {/*</div>*/}
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
        </div>
    )
}

export default ProjectsCard
