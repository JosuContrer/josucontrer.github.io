import React, {useState} from 'react';

import { Switch, Route } from 'react-router-dom';
import { Element } from 'react-scroll';

import Navbar from './components/Navbar';
import UnderDevelopment from './components/UnderDevelopment';
import AboutCard from './components/AboutCard';
import DropDown from './components/DropDown';
import TitleCard from './components/TitleCard';
import ProjectsCard from './components/ProjectsCard';
import ErrorPage from './components/ErrorPage';

import './App.scss';

function App() {

  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggle={toggle}/>
      <DropDown toggle={toggle} isOpen={isOpen}/>
      <Switch>
        <Route exact path='/'>
          <Element name='/home'> <TitleCard/> </Element>
          <Element name='/about'> <AboutCard/> </Element>
          <Element name='/projects'> <ProjectsCard/> </Element>
          {/*<Route path='/' UnderDevelopment/> */}
        </Route>
        <Route exact path='*'>
          <ErrorPage/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
