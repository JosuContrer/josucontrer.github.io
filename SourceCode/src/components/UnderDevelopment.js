import React from 'react'

import image1 from '../images/Me/udp1.jpg';

import './UnderDevelopment.scss';

export default function UnderDevelopment() {
    return (
        <div className="UnderDevelopmentContainer">
            <div className="Text">
                <h>WELCOME :)</h>
                <p>Website under development!</p>
                <a href="https://github.com/JosuContrer">My GitHub - Josue</a>
            </div>
            <div className="Cheese"></div>
            <img className="Image" src={image1} alt="Picture of me in China"></img>
        </div>
    )
}
