import React from "react";

import Workout from "./Workout";

const WorkoutList = ({ workouts }) => {
  return (
    <ul className="py-4">
      {workouts.map(workout => (<Workout key={workout.id} workout={workout} isFlagged />))}
    </ul>
  );
};

export default WorkoutList;