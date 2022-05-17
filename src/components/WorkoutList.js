import React from "react";

import Workout from "./Workout";

const WorkoutList = ({ workouts }) => {
  return (
    <ul className="md:grid md:gap-2 md:grid-cols-2 py-4">
      {workouts.map(workout => (<Workout key={workout.id} workout={workout} />))}
    </ul>
  );
};

export default WorkoutList;