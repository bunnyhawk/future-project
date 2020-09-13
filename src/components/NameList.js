import React from "react";
import ReactTooltip from "react-tooltip";
import CloseIcon from "../components/CloseIcon";
import { CSSTransition } from "react-transition-group";

const NameList = ({ list, isQueryList }) => {
  return (
    // <TransitionGroup component="ul" className="text-left">
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
              className="pr-2 relative"
              data-tip
              data-for={`${idx}-${person.age}`}
            >
              {person.name}
              <span className="hidden sm:inline">
                , {person.age}, {person.location}
              </span>
            </span>
            
            <ReactTooltip
              id={`${idx}-${person.age}`}
              aria-haspopup="true"
              role="example"
              type="light"
              effect="float"
            >
              <CSSTransition timeout={1000} classNames="fade">
                <div className="bg-light p-3">
                  <div className="float-right sm:hidden">
                    <CloseIcon />
                  </div>
                  <strong>{person.name}</strong>
                  <br />
                  {person.age}, {person.location}
                  <p className="my-2 italic">{person.about}</p>
                  <p className="opacity-50">{person.source}</p>
                </div>
              </CSSTransition>
            </ReactTooltip>
              
          </li>
        </CSSTransition>
      ))}
      {!isQueryList && <li className="nameList__item">...</li>}
    </ul>
      
  );
};

export default NameList;
