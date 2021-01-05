import React from 'react'

import { contactData } from '../data/ContactData';

export default function ErrorPage() {
    return (
        <div>
            <h1>ERROR PAGE OOPS</h1>
            <div>
                {contactData.map((item, index) =>
                    <a href={item.link}>
                        {item.icon}
                    </a>
                )}
            </div>
        </div>
    )
}
