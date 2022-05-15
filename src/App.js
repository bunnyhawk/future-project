import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useFetchUsers } from "./state/hooks";
import { USER_API } from "./state/constants";

import Home from './views/Home';
import UserDetails from './views/UserDetails';

import './tailwind.output.css';
import './App.css';

export default function App() {
  const [{ users, userWorkouts, userStatus, workoutStatus }] = useFetchUsers(USER_API, "userData");
  const props = { users, userWorkouts, userStatus, workoutStatus };

  return (
    <Router>
      <div className="container m-auto text-base px-6">

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

