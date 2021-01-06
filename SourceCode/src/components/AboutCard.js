import React, { useEffect, useRef } from 'react'

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
                <p>WebGL Animation</p>
            </div>
            <div className="ColRight">
                <h1 className="CardTitle AboutTextWrapper animateAbout">ABOUT</h1>
                <p className="AboutTextWrapper animateAboutP">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>
    )
}
