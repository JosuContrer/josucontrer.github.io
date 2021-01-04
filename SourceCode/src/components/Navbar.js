import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faBars } from '@fortawesome/free-solid-svg-icons'
import { menuData } from '../data/MenuData.js';
 

const Navbar = ({toggle}) => {
     return (
         <div className='NavMenu'>
             <a className='NavMenuIcon' href='/'>
                <FontAwesomeIcon icon={faCoffee}/> Josue
             </a>
             <div className='NavMenuTitles'>
                 {menuData.map((item, index)=>
                    <Link className='NavMenuLinks' to={item.link} key={index}>
                        {item.title}
                    </Link>
                 )}
             </div>
             <button href="/contact" title="You wont't regret it!">Contact</button>
             <div className="NavMenuMobile" onClick={toggle}>
                 <FontAwesomeIcon icon={faBars}/>
             </div>
         </div>
     )
 }
 
 export default Navbar
 