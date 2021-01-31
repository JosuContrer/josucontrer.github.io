import React from 'react'

import {emojify} from 'react-emojione';
import {contactData} from '../data/ContactData.js';
import './Contact.scss';

export const Contact = () => {
    return (
        <div className="ContactPage">
            <h1>Contact</h1>
            <div className="ContactContainer">
                {
                    contactData.map((item, index) =>
                        <a className="Link" href={item.link} key={index}>{item.icon}</a>
                    )
                }
            </div>
            <div class="LI-profile-badge LI"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="josue-contreras-127238141">
                {/* <a class="LI-simple-link" href='https://www.linkedin.com/in/josue-contreras-127238141?trk=profile-badge'>Josue Contreras</a> */}
            </div>
            <div class="Bottom">
                <h2 className="Statement">Made with {emojify(':yellow_heart:')} by Josue C.</h2>
                <a className="Email" href="jdcontrerasalbuj@wpi.edu">jdcontrerasalbuj@wpi.edu</a>
            </div>
        </div>
    )
}
