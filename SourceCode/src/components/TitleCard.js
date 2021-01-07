import React, {useRef} from 'react';

import './TitleCard.scss';
import BackgroundTitleImg from '../images/TitleCardBackground.jpg'

class TitleCard extends React.Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
        
        const container = document.querySelector('.MainTitleContainer');
        const block = document.querySelector('.MainTitleBlock');

        const name = document.querySelector('.NameTitle');
    
        // Animate Mouse Hover on Main Title
        container.addEventListener('mousemove',(event) => {
            // console.log(event.pageX);
            let xAxis = ((window.innerWidth/2 - event.pageX) /15);
            let yAxis = ((window.innerHeight/2 - event.pageY) /5);

            block.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
        });

        // Animate In
        container.addEventListener("mouseenter", (event) => {
            // For transition effect form in to out
            block.style.transition = "none"; 
            // Name pop out
            // name.style.transform = "translateZ(150px)";
        });

        // Animet Out
        container.addEventListener("mouseleave", (event) => {
            block.style.transition = "all 0.5s ease";
            block.style.transform = "rotateY(0deg) rotateX(0deg)";
            // Name pop out
            // name.style.transform = "translateZ(0px)";
        });
    
    }
    
    render() {
    return (
        <div className="TitleCardContainer">
            <div className="TitleCardWrapper">
                <div className="MainTitleContainer">
                    <div className="MainTitleBlock">
                        <h1 className="NameTitle">Josue <br/>Contreras</h1>
                    </div>
                </div>
            </div>
            <img className="TitleCardBackgroundImage" src={BackgroundTitleImg} alt="Me"></img>
        </div>
    );
    }
}

export default TitleCard