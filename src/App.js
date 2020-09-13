import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from './views/About';
import Donate from './views/Donate';
import Home from './views/Home';
import Submit from './views/Submit';

import Header from './components/Header';
import Footer from './components/Footer';

import './tailwind.output.css';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container m-auto text-base px-6">
        <Header />    
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/submit">
            <Submit />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

