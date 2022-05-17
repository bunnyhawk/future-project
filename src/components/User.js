import React from "react";
import { Link } from "react-router-dom";


const User = ({ user, workouts, isFlagged }) => {
  return (
    <li className={["block border border-gray-600 px-2 py-2 mb-2 rounded", isFlagged ? 'bg-teal-100' : 'bg-white'].join(' ')}>
      <Link to={`/user/${user.id}`}>
        <div className="flex justify-between flex-col md:flex-row text-left">
          <div className="w-full md:w-1/2">
            {user.first_name} {user.last_name}
          </div>
          <div className="flex flex-row md:w-1/2 justify-between">
            <div className="md:w-2/6 text-sm">
              <span className="font-bold">Sessions:</span> {workouts.length}<br />
              <span className="font-bold">Missed:</span> {user.missedSessions}
            </div>
            <div className="md:w-1/6 text-sm text-center">
              <div className="text-sm">Percent Missed</div>
              <div className="font-bold text-xl">{user.currentPercentage}%</div>
            </div>
          </div>
        </div>

      </Link>
    </li >
  );
};

export default User;