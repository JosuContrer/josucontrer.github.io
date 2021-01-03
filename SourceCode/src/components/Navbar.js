import React from 'react';
import './Navbar.scss';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { menuData } from '../data/MenuData.js';
 

const Navbar = () => {
     return (
         <div className='NavMenu'>
             <a className='NavMenuIcon' href='/'>
                <FontAwesomeIcon icon={faCoffee}/> Josue Contreras
             </a>
             <div className='NavMenuTitles'>
                 {menuData.map((item, index)=>
                    <Link className='NavMenuLinks' to={item.link} key={index}>
                        {item.title}
                    </Link>
                 )}
             </div>
             <button href="/contact">Contact</button>
         </div>
     )
 }
 
 export default Navbar
 