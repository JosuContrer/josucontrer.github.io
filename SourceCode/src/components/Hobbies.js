import React from 'react'

import {Carousel} from "react-responsive-carousel";
import ReactPlayer from "react-player";
import {volunteeringImages, artImages} from '../data/HobbiesData.js';

import './Hobbies.scss';
import './carousel.css';

export const Hobbies = () => {

    const urls = [
        "https://www.youtube.com/watch?v=_vmEgLo3z7Y&ab_channel=JosueContreras",
        "https://www.youtube.com/watch?v=vGmk3REEqqA&fbclid=IwAR1k6oYCKJ-fMRITKb0wGbfZg_00wsLKZCk-MpWUcipKdwFFr4EZrG1Omu8&ab_channel=JonathanTai",
        "https://www.youtube.com/watch?v=ev9uFGZMw5I&ab_channel=JosueContreras",
    ];

    const YoutubeSlide = ({ url, isSelected }: { url: string; isSelected?: boolean }) => (
        <ReactPlayer width="100%" light={true} height="500px" controls={true} url={url} playing={isSelected} />
    );

    return (
        <div className="HobbiesPage">
            <h1>Hobbies</h1>
            <div className="Container">
                {/*<div className="GridWrapper">*/}
                {/*    <div className="TitleWrapper1">*/}
                {/*        <h1>Volunteering</h1>*/}
                {/*    </div>*/}
                    <div className="GridVolunteering ShadowWrapper">
                        {
                            volunteeringImages.map((item, index) =>
                                <img className={item.title} src={item.image} key={index}/>
                            )
                        }
                    </div>
                {/*</div>*/}
                {/*<div className="GridWrapper">*/}
                {/*    <div className="TitleWrapper1">*/}
                {/*        <h1>Art</h1>*/}
                {/*    </div>*/}
                    <div className="GridArt ShadowWrapper">
                        {
                            artImages.map((item, index) =>
                                <img className={item.title} src={item.image} key={index}/>
                            )
                        }
                    </div>
                {/*</div>*/}
                {/*<div className="GridWrapper">*/}
                {/*    <div className="TitleWrapper2">*/}
                {/*        <h1>Cinematography</h1>*/}
                {/*    </div>*/}
                    <div className="GridPhotoCine ShadowWrapper">
                        <Carousel>
                            {
                                urls.map((item, index) =>
                                    <YoutubeSlide key={"youtube-"+{index}} url={item}/>
                                )
                            }
                        </Carousel>
                    </div>
                {/*</div>*/}
            </div>
        </div>


    )
}
