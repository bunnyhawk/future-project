import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useFetchUsers } from "./state/hooks";
import { USER_API } from "./state/constants";

import Home from './views/Home';
import UserDetails from './views/UserDetails';

import './tailwind.output.css';

export default function App() {
  const [{ users, userWorkouts, userStatus, workoutStatus }] = useFetchUsers(USER_API, "userData");
  const props = { users, userWorkouts, userStatus, workoutStatus };

  return (
    <Router>
      <div className="container m-auto text-base px-6">
        <div className="py-4 w-32">
          <Link to="/">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 864.72 96.18">
              <g>
                <g fill="#000"><path d="M297.65 13.56h42.88v81.26h16.25V13.56h42.89V.02H297.65v13.54zM0 94.82h16.25V61.64h61.39V48.1H16.25V13.56h69.52V.02H0v94.8zM228.4 47.29c0 15.44 3.57 35.34-36.11 35.34s-36.11-19.77-36.11-35.34V0h-16.25v47.29c0 33 10.65 48.89 52.36 48.89s52.36-16 52.36-48.89V0H228.4zM541.14 47.29c0 15.44 3.57 35.34-36.11 35.34s-36.11-19.77-36.11-35.34V0h-16.26v47.29c0 33 10.66 48.89 52.37 48.89s52.36-16 52.36-48.89V0h-16.25zM864.72 13.56V.02h-85.76v94.8h85.76V81.28h-69.51V54.19h59.86V40.65h-59.86V13.56h69.51zM715.66 30.85A30.68 30.68 0 0 0 685.22 0H620.84v94.8h16.25V61.69h40.76l22 33.13H719l-23.32-35a30.85 30.85 0 0 0 19.98-28.97zm-13.68 0A17 17 0 0 1 685.22 48h-48.13V13.68h48.13A17 17 0 0 1 702 30.85z"></path></g>
              </g>
            </svg>
          </Link>
        </div>
        <Switch>
          <Route path="/user/:id">
            <UserDetails {...props} />
          </Route>
          <Route path="/">
            <Home  {...props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

