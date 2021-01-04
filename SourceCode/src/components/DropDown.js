import React from 'react'
import styled from 'styled-components'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

import './DropDown.scss';

export default function DropDown({toggle, isOpen}) {

    // top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
    const DropDownContainer = styled.div`
        top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
        opacity: ${({isOpen}) => (isOpen ? '1' : '0')};
    `;

    return (
        <DropDownContainer className="DropDownMenuContainer" isOpen={isOpen} onClick={toggle}>
            <FontAwesomeIcon className="ExitIcon" icon={ faTimesCircle} onClick={toggle}></FontAwesomeIcon>
            <div className="DropDownMenuTitles">
                {menuData.map((item, index) =>
                    <Link className="DropDownMenuLinks" to={item.link} key={index}>
                        {item.title}
                    </Link>
                )}
                <button href="/contact" title="You wont't regret it!">Contact</button>
            </div>
        </DropDownContainer>
    )
}