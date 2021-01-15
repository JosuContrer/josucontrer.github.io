import React, {useRef} from 'react';

import NameAnimation from './NameAnimation';

import './TitleCard.scss';
// import BackgroundTitleImg from '../images/TitleCardBackground.jpg'
import BackgroundTitleImg from '../images/udp1.jpg';

class TitleCard extends React.Component {

    constructor(props){
        super(props);
    }
    
    render() {
    return (
        <div className="TitleCardContainer">
            <NameAnimation/>
            <img className="TitleCardBackgroundImage" src={BackgroundTitleImg} alt="Me"></img>
        </div>
    );
    }
}

export default TitleCard