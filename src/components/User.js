import React from "react";
import { Link } from "react-router-dom";


const User = ({ user, workouts, isFlagged }) => {
  return (
    <li className={["block border border-gray-600 px-2 py-2 mb-2 rounded", isFlagged ? 'bg-red-100' : 'bg-white'].join(' ')}>
      <Link to={`/user/${user.id}`}>
        <div className="flex justify-between  text-left">
          <div className="w-4/6">
            {user.first_name} {user.last_name} {isFlagged && (<span role="img" aria-label="flagged user">🚩</span>)}
          </div>
          <div className="w-2/6 text-sm">
            <span className="font-bold">Sessions:</span> {workouts.length}<br />
            <span className="font-bold">Missed:</span> {user.missedSessions}
          </div>
        </div>

      </Link>
    </li>
  );
};

export default User;