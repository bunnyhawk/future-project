import React from "react";

import { FLAG_USER_PERCENTAGE } from "../state/constants"

import User from "./User";

const UserList = ({ users, userWorkouts }) => {
  const activeUsers = [];
  const flaggedUsers = [];

  if (!users || !users.length) return;

  users.forEach(user => {
    const sessions = userWorkouts[user.id];
    if (!sessions || !sessions.length) return;

    const missedSessions = sessions.reduce((total, session) => {
      let newTotal = total;
      if (session.completion_state === 'none') {
        return newTotal + 1;
      }
      return newTotal;
    }, 0);

    const currentPercentage = parseFloat(sessions.length * (missedSessions / sessions.length));
    const updatedUser = { ...user, currentPercentage, missedSessions };

    if (currentPercentage > FLAG_USER_PERCENTAGE) {
      flaggedUsers.push(updatedUser)
    } else {
      activeUsers.push(updatedUser);
    }
  });

  return (
    <div>
      <h2 className="mt-4 pb-2 text-lg border-b border-grey-600 text-left">Flagged Users</h2>
      <ul className="py-4">
        {flaggedUsers.map(user => (<User key={user.id} user={user} workouts={userWorkouts[user.id]} isFlagged />))}
      </ul>
      <h2 className="mt-4 pb-2 text-lg border-b text-left">On Track Users</h2>
      <ul className="py-4">
        {activeUsers.map(user => (<User key={user.id} user={user} workouts={userWorkouts[user.id]} />))}
      </ul>
    </div>

  );
};

export default UserList;