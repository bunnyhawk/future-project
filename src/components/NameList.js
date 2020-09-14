import React from "react";
import { CSSTransition } from "react-transition-group";

import ListToolTip from "./ListToolTip";

const NameList = ({ list, isQueryList }) => (
  <ul className="text-left">
    {list.map((person, idx) => (
      <CSSTransition
        timeout={500}
        classNames="fade"
        key={`${person.location}-${person.name}-${person.age}`}
      >
        <li
          className="nameList__item"
          key={`${person.location}-${person.name}-${person.age}`}
        >
          <span
            className="pr-2 relative nameList__itemRecord active:text-cta hover:text-cta focus:text-cta"
            data-tip
            data-for={`${idx}-${person.age}`}
          >
            {person.name}
            <span className="hidden sm:inline">
              , {person.age}, {person.location}
            </span>
          </span>

          <ListToolTip person={list[idx]} idx={idx} />
        </li>
      </CSSTransition>
    ))}
    {!isQueryList && <li className="nameList__item">...</li>}
  </ul>
);

export default NameList;
