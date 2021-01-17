import React, {useRef} from 'react';

import NameAnimation from './NameAnimation';

import './TitleCard.scss';
// import BackgroundTitleImg from '../images/TitleCardBackground.jpg'
import BackgroundTitleImgRight from '../images/Me/udp1.jpg';
import BackgroundTitleImgMiddle from '../images/Me/middle.jpg';

class TitleCard extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            screenSizeSmall: false,
        }

        this.updateScreenSize = this.updateScreenSize.bind(this);
    }

    componentDidMount(){
        this.updateScreenSize();
        window.addEventListener("resize", this.updateScreenSize);
    }
    
    updateScreenSize(){
        this.setState({
            screenSizeSmall: window.innerWidth < 1000
        });
    }

    render() {
    return (
        <div className="TitleCardContainer">
            <NameAnimation/>
            {this.state.screenSizeSmall ? (
                <img className="TitleCardBackgroundImage" src={BackgroundTitleImgMiddle} alt="Me"></img>
            ) : (
                <img className="TitleCardBackgroundImage" src={BackgroundTitleImgRight} alt="Me"></img>    
            )}
        </div>
    );
    }
}

export default TitleCard