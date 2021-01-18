import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { emojify } from 'react-emojione';

import image1 from '../images/Me/funny.png';

import './AboutCard.scss';

export default function AboutCard() {

    const ref = useRef(null);

    // gsap.registerPlugin(ScrollTrigger);
    // useEffect(() => {
    //     const element = ref.current;
    //     gsap.from(
    //         element.querySelector('.animateAbout'),{
    //         duration: 2,
    //         opacity: 0,
    //         x: 200,
    //         scrollTrigger: {
    //             trigger: element.querySelector(".AboutCardContainer"),
    //             // start: "top top",
    //             // end: "center top",  
    //             // scrub: true,              
    //         }
    //     });
    //     gsap.from(
    //         element.querySelector('.animateAboutP'),{
    //         duration: 3,
    //         opacity: 0,
    //         x: 200,
    //         scrollTrigger: {
    //             trigger: element.querySelector(".AboutCardContainer"),
    //             // start: "top top",
    //             // end: "bottom center",
    //             // scrub: true
    //         }
    //     });
        
    // }, []);

    return (
        <div className="AboutCardContainer" ref={ref}>
            <div className="ColLeft">
                <img className="FunnyImage" src={image1} alt="Ummm this is akward :)"></img>
                <div className="Circle"></div>
            </div>
            <div className="ColRight">
                <h1 className="AboutTextWrapper animateAbout">ABOUT</h1>
                <p className="AboutTextWrapper animateAboutP">I drink coffee, I eat sushi, I write code, and improve my skills every day. I have a B.Sc. degree in Robotics and Electrical & Computer Engineering. I enjoy software engineering so I decided to pursue a master’s in computer science and I am about to finish in the next few months of 2021{emojify(':smiley:')}. Enjoy this portfolio I developed in ReactJS showcasing my projects, experience, and me!</p>
            </div>
        </div>
    )
}
