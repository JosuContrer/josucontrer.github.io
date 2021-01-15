import React from 'react'

import {computerScienceData} from '../data/ProjectsData.js';

import './ProjectsCard.scss';

function ProjectsCard() {
    return (
        <div className="ProjectsContainer">
            <h1 className="CardTitle ProjectsTextWrapper">Projects</h1>
            <h2 className="CardSubTitle">Computer Science</h2>
            {computerScienceData.map((item, index) =>
                <div className="ContentCard" id={index}>
                    <h3 className="ProjectTitle"> {item.title} </h3>
                    <div className="ImageContainer">
                        <img src={item.image}></img>
                    </div>
                    <div className="ComponentsContainer">
                        <h4 className="ProjectSubTitle"> Components </h4>
                        <div className="Icons">
                            {item.projectComponents.map((item2, index) => 
                                <a href={item2.link} id={index}>
                                    {item2.icon}
                                </a>
                            )}
                        </div>
                    </div>
                    <div className="TextContainer">
                       <p>
                           {item.description}
                       </p>
                    </div>
                </div>
            )}
            <h2 className="CardSubtitle">Robotics</h2>
        </div>
    )
}

export default ProjectsCard
