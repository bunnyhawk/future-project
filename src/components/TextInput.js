import React from "react";

const TextInput = ({ name, inputRef, validation, label, errors }) => (
  <div className="clearfix">
    <label htmlFor={name} className="block text-sm normal-case">
      {label}
    </label>
    <input
      type="text"
      name={name}
      ref={inputRef ? inputRef({ required: true, ...validation }) : null}
      className="w-full bg-theme text-base border border-solid border-text rounded p-2"
      required
    />
    <div className="text-sm text-primary text-right float-right">
      &nbsp;{errors && errors.message}
    </div>
  </div>
);

export default TextInput;
