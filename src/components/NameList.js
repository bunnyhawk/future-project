import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const NameList = ({ list }) => {
  return (
    <TransitionGroup>
      <ul className="text-left" >
        {list.map(person => (
          <CSSTransition
          
            timeout={500}
            classNames="fade"
            key={`${person.location}-${person.name}-${person.age}`}
          >
            <li className="nameList__item">
              <span className="pr-2 relative">
                {person.name}<span className="hidden sm:inline">, {person.age}, {person.location}</span>
              </span>
            </li>
          </CSSTransition>
        ))}
        <li className="nameList__item">...</li>
      </ul>
    </TransitionGroup>
  );
}
 
export default NameList;