import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { menuData } from '../data/MenuData';
import { contactData } from '../data/ContactData';

import './DropDown.scss';

export default function DropDown({toggle, isOpen}) {

    return (
        <div className={isOpen ? "DropDownMenuContainerOpen" : "DropDownMenuContainerClosed"} isOpen={isOpen} onClick={toggle}>
            <div className="ExitIconContainer">
                <FontAwesomeIcon className="ExitIcon" icon={ faTimesCircle} onClick={toggle}></FontAwesomeIcon>
            </div>
            <div className="DropDownMenuTitles">
                {menuData.map((item, index) =>
                    <div className="DropDownMenuRowContainer">
                        {item.icon}
                        <Link className="DropDownMenuLinks" onClick={toggle} to={item.link} key={index}spy={true} smooth={true} offset={0} duration={500}>
                            {item.title}
                        </Link>
                    </div>
                )}
                <button href="/contact" title="You wont't regret it!">
                    <FontAwesomeIcon icon={faAddressCard}/> Contact
                </button>
            </div>
            <div className="ContactContainer">
                {contactData.map((item, index) => 
                    <a href={item.link} className="ContactIcon">
                        {item.icon}
                    </a>
                )}
            </div>
        </div>
    )
}