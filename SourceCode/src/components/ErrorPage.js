import React from 'react'

import { contactData } from '../data/ContactData';

import './ErrorPage.scss';

export default function ErrorPage() {
    return (
        <div className="ErrorPageContainer">
            <h1 className="ErrorPageText">ERROR PAGE OOPS</h1>
            <div className="ContactInfoContainer">
                {contactData.map((item, index) =>
                    <a className="ContactLink" href={item.link}>
                        {item.icon}
                    </a>
                )}
            </div>
        </div>
    )
}
