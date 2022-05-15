import React from "react";
import { useParams } from 'react-router-dom'
import WorkoutList from "../components/WorkoutList";

const UserDetails = ({ users, userWorkouts }) => {
  const { id } = useParams();

  if (!userWorkouts[id]) return false;
  const currentUser = users.find(user => user.id === id);

  return (
    <main className="bg-theme text-text text-left">
      <h1 className="text-xl">{currentUser.first_name} {currentUser.last_name}</h1>
      <WorkoutList workouts={userWorkouts[id]} />
    </main>
  );
};

export default UserDetails;
