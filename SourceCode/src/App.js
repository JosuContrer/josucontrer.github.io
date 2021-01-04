import React, {useState} from 'react';

import Navbar from './components/Navbar';
import AboutCard from './components/AboutCard';
import DropDown from './components/DropDown';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { TitleCard } from './components/TitleCard';

import './App.scss';
import UnderDevelopment from './components/UnderDevelopment';

function App() {

  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <Router>
        <Navbar toggle={toggle}/>
        <DropDown toggle={toggle} isOpen={isOpen}/>
        <UnderDevelopment/>
        {/* <TitleCard/>
        <AboutCard/> */}
      </Router>
    </>
  );
}

export default App;
