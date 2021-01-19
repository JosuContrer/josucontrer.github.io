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
            <h2 className="Statement">Made with {emojify(':yellow_heart:')} by Josue C.</h2>
            <a className="Email" href="jdcontrerasalbuj@wpi.edu">jdcontrerasalbuj@wpi.edu</a>
        </div>
    )
}
