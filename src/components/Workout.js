import React from "react";
import { convertToTime } from '../utils/duration'


const Workout = ({ workout }) => {
  const workoutNotCompleted = workout.completion_state === 'none' && workout.type !== 'rest';
  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });

  return (
    <li className={["block border border-gray-600 px-2 py-2 mb-2 rounded", workoutNotCompleted ? 'bg-teal-100' : 'bg-white'].join(' ')}>
      <div className="flex flex-col md:flex-row justify-between text-left mb-2">
        <div className="md:w-2/6 mb-2">
          {workout.name === '' ? 'No name given' : workout.name}
        </div>
        <div className="md:w-2/6 text-sm mb-2">
          <div><span className="font-bold">Completed:</span> {workoutNotCompleted ? 'No' : 'Yes'}</div>
          <div><span className="font-bold">Type:</span> {workout.type}</div>
          <div><span className="font-bold">Duration:</span> {convertToTime(workout.duration)}</div>
        </div>
        <div className="md:w-2/6 text-sm">
          <div><span className="font-bold">Scheduled:</span> {formatDate(workout.scheduled_at)}</div>
          <div><span className="font-bold">Completed:</span> {workoutNotCompleted ? 'N/A' : formatDate(workout.completed_at)}</div>
        </div>
      </div>
      <div className="text-left text-sm"><span className="font-bold">Notes:</span> {workout.notes || 'N/A'}</div>
    </li >
  );
};

export default Workout;