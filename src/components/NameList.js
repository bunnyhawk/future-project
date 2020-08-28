import React from 'react';

const NameList = ({ list }) => {
  return (
    <ul className="text-left">
      {list.map(person => (
        <li className="nameList__item" key={`${person.location}-${person.name}-${person.age}`}>
          <span className="pr-2 relative">
            {person.name}<span className="hidden sm:inline">, {person.age}, {person.location}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
 
export default NameList;