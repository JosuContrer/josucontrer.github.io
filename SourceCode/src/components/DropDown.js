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
                    <Link className="DropDownMenuLinks" onClick={toggle} to={item.link} key={index}spy={true} smooth={true} offset={0} duration={500}>
                        {item.icon} &nbsp; {item.title}
                    </Link>
                    
                )}
                <Link className="ContactButton" to="/contact" key="cb" spy={true} smooth={true} offset={0} duration={500}>
                    <button title="You wont't regret it!">
                        <FontAwesomeIcon icon={faAddressCard}/> Contact
                    </button>
                </Link>
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