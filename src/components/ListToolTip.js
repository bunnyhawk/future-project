import React from "react";
import ReactTooltip from "react-tooltip";
import CloseIcon from "../components/CloseIcon";

const ListToolTip = ({ person, idx }) => (
  <ReactTooltip
    id={`${idx}-${person.age}`}
    aria-haspopup="true"
    role="example"
    type="light"
    effect="float"
    position="top"
    className="border border-solid border-black"
  >
    <div className="p-6">
      <div className="float-right sm:hidden">
        <CloseIcon />
      </div>
      <strong>{person.name}</strong>
      <br />
      {person.age}, {person.location}
      <p className="my-2 italic">{person.about}</p>
      <p className="opacity-50">
        Source: {person.source} {person.relation}
      </p>
    </div>
  </ReactTooltip>
);

export default ListToolTip;
