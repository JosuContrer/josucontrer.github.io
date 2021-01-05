import React, {useState} from 'react';

import Navbar from './components/Navbar';
import UnderDevelopment from './components/UnderDevelopment';
import AboutCard from './components/AboutCard';
import DropDown from './components/DropDown';

import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { TitleCard } from './components/TitleCard';

import './App.scss';

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
        <Switch>
          <Route path='/' component={UnderDevelopment}/>
          {/* <Route path='/home' TitleCard/>
          <AboutCard/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
