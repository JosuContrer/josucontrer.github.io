import React from 'react';
import './Navbar.scss';
import {Link} from 'react-scroll';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { menuData } from '../data/MenuData.js';

import nameLogo from '../images/NameInitials2.png';
// import nameLogo from '../images/NameInitials6.png';

const Navbar = ({toggle}) => {
     return (
         <div className='NavMenu'>
             <a className='NavMenuIconLink' href='/'>
                 <div className="NavMenuIconContainer">
                    {/* <FontAwesomeIcon icon={faCoffee}/>  */}
                    {/* Josue */}
                    <img className="NameLogo" src={nameLogo}></img>
                </div>
             </a>
             <div className='NavMenuTitles'>
                 {menuData.map((item, index)=>
                    <Link className='NavMenuLinks' to={item.link} key={index} spy={true} smooth={true} offset={item.offset} duration={500}>
                        {item.title}
                    </Link>
                 )}
             </div>
             <Link className="ContactButton" to="/contact" key="cb" spy={true} smooth={true} offset={0} duration={500}>
                <button title="You wont't regret it!">Contact</button>
             </Link>
             <div className="NavMenuMobile" onClick={toggle}>
                 <FontAwesomeIcon icon={faBars}/>
             </div>
         </div>
     )
 }
 
 export default Navbar
 