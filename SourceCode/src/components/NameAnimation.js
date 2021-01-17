import React, {useEffect} from 'react'

import './NameAnimation.scss';

export default function NameAnimation() {

    useEffect(() => {

        const card = document.querySelector('.Card');
        const container = document.querySelector('.TitlePageContainer');

        const name1 = document.querySelector('.TitleHeading');
        const name2 = document.querySelector('.Name');

        // Animate Mouse Hover on Main Title
        container.addEventListener('mousemove',(event) => {
            // console.log(event.pageX);
            let xAxis = ((window.innerWidth/2 - event.pageX) /15);
            let yAxis = ((window.innerHeight/2 - event.pageY) /5);

            card.style.transform = "rotateY(" + xAxis + "deg) rotateX(" + yAxis + "deg)";
        });

        // Animate Ease-In
        container.addEventListener("mouseenter", (event) => {
            // For transition effect form in to out
            card.style.transition = "all 0.1s ease";
            // Name pop out
            name1.style.transform = "translateZ(100px)";
            name2.style.transform = "translateZ(150px)";
        });

        // Animate Out
        container.addEventListener("mouseleave", (event) => {
            card.style.transition = "all 0.5s ease";
            card.style.transform = "rotateY(0deg) rotateX(0deg)";
            // Name pop out
            name1.style.transform = "translateZ(0px)";
            name2.style.transform = "translateZ(0px)";
        });
    }, []);

    return (
    <div class="TitlePageWrapper">
        <div class="TitlePageContainer">
            <div class="Card">
                <div class="Info1">
                    <h1 class="TitleHeading">
                        Hi<span class="Dot">.</span>
                    </h1>
                </div>
                <div class="Info2">
                    <h1 class="Name">I am <br/>Josue</h1>
                </div>
            </div>
        </div>
    </div>
    )
}