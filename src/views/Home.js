import React from "react";
import { FETCHED_USERS, FETCHED_WORKOUTS } from "../state/constants";

import UserList from "../components/UserList";

const Home = ({ users, userWorkouts, userStatus, workoutStatus }) => {
  const usersLoaded = userStatus === FETCHED_USERS && users.length > 0;
  const workoutsLoaded = workoutStatus === FETCHED_WORKOUTS && !!userWorkouts;

  return (
    <main className="bg-theme text-text text-center">
      <div className="text-lg">Your Roster</div>
      {!usersLoaded && (
        <div>
          <span className="dot dot1">.</span>
          <span className="dot dot2">.</span>
          <span className="dot dot3">.</span>
        </div>
      )}
      {usersLoaded && workoutsLoaded && (
        <UserList users={users} userWorkouts={userWorkouts} />
      )}

    </main>
  );
};

export default Home;
