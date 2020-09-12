import React from "react";

const TextInput = ({ name, inputRef, validation, label, errors }) => {
  return (
    <div className='clearfix'>
      <label htmlFor={name} className="block text-sm normal-case">
        {label}
      </label>
      <input
        type="text"
        name={name}
        ref={inputRef({ required: true, ...validation })}
        className="w-full bg-background text-base border border-solid border-light rounded p-2"
        required
      />
      <div className="text-sm text-primary text-right float-right">&nbsp;{errors && errors.message}</div>
    </div>
  );
};

export default TextInput;
