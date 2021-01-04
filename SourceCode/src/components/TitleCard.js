import React from 'react';

import './TitleCard.scss';
import BackgroundTitleImg from '../images/TitleCardBackground.jpg'

export const TitleCard = () => {
    return (
        <div className="TitleCardContainer">
            <div className="TitleCardWrapper">
                <h1 className="WelcomeTitle">Jello</h1>
                <img className="TitleCardBackgroundImage" src={BackgroundTitleImg} alt="Me"></img>
            </div>
        </div>
    )
}
