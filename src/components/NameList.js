import React from "react";
import ListToolTip from "./ListToolTip";

const Name = ({ person, index }) => (
  <li className="nameList__item">
    <span
      className="pr-2 relative nameList__itemRecord active:text-primary hover:text-primary focus:text-primary"
      data-tip
      data-for={`${index}-${person.age}`}
    >
      {person.name}
      <span className="hidden sm:inline">
        , {person.age}, {person.location}
      </span>
    </span>

    <ListToolTip person={person} idx={index} />
  </li>
);


const NameList = ({ list, isQueryList }) => {
  if (!list || list.length === 0) return;

  return (
    <ul className="text-left">
      {list.map((person, index) => (
        <Name
          key={`${person.location}-${person.name}-${person.age}`}
          person={person}
          index={index}
        />
      ))}
      {!isQueryList && <li className="nameList__item">...</li>}
    </ul>
  );
}
export default NameList;
