import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './views/About';
import Donate from './views/Donate';
import Home from './views/Home';
import Submit from './views/Submit';

import './tailwind.output.css';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="container m-auto text-base px-6">
        <header className="py-8">
          <nav className="flex justify-between items-center flex-col sm:flex-row">
            <ul className="flex flex-col sm:flex-row order-2 sm:order-1 text-center">
              <li className="mb-1 sm:mr-4">
                <Link to="/" className="underline">Home</Link>
              </li>
              <li className="mb-1 sm:mr-4">
                <Link to="/about" className="underline">About</Link>
              </li>
              <li className="mb-1">
                <Link to="/donate" className="underline">Donate</Link>
              </li>
            </ul>
            <Link to="/submit" className="bg-cta px-4 py-2 rounded text-light order-1 sm:order-2 mb-5 sm:mb-0">Honor a Loved One</Link>
          </nav>
        </header>

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

        <footer className="my-12 text-center">
          <ul className="inline-flex opacity-75">
            <li>
              <Link to="#" className="termsLink underline mr-2">Terms of Service</Link>
            </li>
            <li>
              <Link to="#" className="underline">Privacy Policy</Link>
            </li>
          </ul>
        </footer>
      </div>
    </Router>
  );
}

