import React, { Component } from 'react';
import './App.scss'

import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Switch>
              <Route path="/services">
                <Services />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
        <span>Under development...</span>
    </div>
    );
  }
}

export default App;
