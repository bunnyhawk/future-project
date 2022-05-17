import React from "react";
import { Link } from "react-router-dom";


const User = ({ user, workouts, isFlagged }) => {
  return (
    <li className={["block border border-gray-600 px-2 py-2 mb-2 rounded", isFlagged ? 'bg-teal-100' : 'bg-white'].join(' ')}>
      <Link to={`/user/${user.id}`}>
        <div className="flex justify-between flex-row text-left">
          <div>
            <div className="mb-2">{user.first_name} {user.last_name}</div>
            <div className="text-sm">
              <span className="font-bold">Sessions:</span> {workouts.length}<br />
              <span className="font-bold">Missed:</span> {user.missedSessions}
            </div>
          </div>
          <div className="flex flex-row justify-between text-center">
            <div>
              <div className="text-sm">Percent<br />Missed</div>
              <div className="font-bold text-xl">{user.currentPercentage}%</div>
            </div>
          </div>
        </div>

      </Link>
    </li >
  );
};

export default User;