import React from "react";

const Workout = ({ workout }) => {
  const workoutCompleted = workout.completion_state !== 'none';
  const formatDate = (date) =>
    new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric" });

  return (
    <li className={["block border border-gray-600 px-2 py-2 mb-2 rounded", workoutCompleted ? 'bg-red-100' : 'bg-white'].join(' ')}>
      <div className="flex justify-between text-left mb-2">
        <div className="w-2/6">
          {workout.name === '' ? 'No name given' : workout.name} {workoutCompleted && (<span role="img" aria-label="flagged user">🚩</span>)}
        </div>
        <div className="w-2/6 text-sm">
          <span className="font-bold">Completed: {workoutCompleted ? 'No' : 'Yes'}<br />Type:</span> {workout.type}
        </div>
        <div className="w-2/6 text-sm">
          <span className="font-bold">Scheduled at:</span> {formatDate(workout.scheduled_at)}<br />
          <span className="font-bold">Completed:</span> {workoutCompleted ? formatDate(workout.completed_at) : 'N/A'}
        </div>
      </div>
      <div className="text-left text-sm"><span className="font-bold">Notes:</span> {workout.notes || 'N/A'}</div>
    </li >
  );
};

export default Workout;