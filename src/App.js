import React, { Component } from 'react';
import './App.scss'

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home/>
        <Services/>
        <Contact/>
        <span>Under development...</span>
    </div>
    );
  }
}

export default App;
