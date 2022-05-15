import React from "react";

import { FLAG_USER_PERCENTAGE } from "../state/constants"

import User from "./User";

const UserList = ({ users, userWorkouts }) => {
  const activeUsers = [];
  const flaggedUsers = [];

  users.forEach(user => {
    const sessions = userWorkouts[user.id];
    if (!sessions.length) return;

    const missedSessionCount = sessions.reduce((total, session) => {
      let newTotal = total;
      if (session.completion_state === 'none') {
        return newTotal + 1;
      }
      return newTotal;
    }, 0);

    const currentPercentage = parseFloat(sessions.length * (missedSessionCount / sessions.length));

    if (currentPercentage > FLAG_USER_PERCENTAGE) {
      flaggedUsers.push({ ...user, missedSessions: missedSessionCount })
    } else {
      activeUsers.push({ ...user, missedSessions: missedSessionCount });
    }
  });

  return (
    <ul className="py-4">
      {flaggedUsers.map(user => (<User key={user.id} user={user} workouts={userWorkouts[user.id]} isFlagged />))}
      {activeUsers.map(user => (<User key={user.id} user={user} workouts={userWorkouts[user.id]} />))}
    </ul>
  );
};

export default UserList;