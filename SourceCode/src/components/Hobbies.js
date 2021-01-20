import React from 'react'

import {volunteeringImages, artImages} from '../data/HobbiesData.js';

import './Hobbies.scss';

export const Hobbies = () => {
    return (
        <div className="HobbiesPage">
            <h1>Hobbies</h1>
            <div className="Container">
                <div className="GridVolunteering">
                    {
                        volunteeringImages.map((item, index) => 
                            <img className={item.title} src={item.image} key={index}/>
                        )
                    }
                </div>
                <div className="GridArt">
                    {
                        artImages.map((item, index) =>
                            <img className={item.title} src={item.image} key={index}/>
                        )
                    }
                </div>
                <div className="GridPhotography">

                </div>
            </div>
        </div>
    )
}
