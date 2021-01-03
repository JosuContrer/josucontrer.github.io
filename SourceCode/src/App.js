import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;
