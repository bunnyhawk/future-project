import React, { Fragment } from 'react';

const TextInput = ({ name, inputRef, validation, label, errors }) => {
  return (
    <Fragment>
      <label htmlFor={name} className="block text-sm normal-case">{label}</label>
      <input
        type="text"
        name={name}
        ref={inputRef({ required: true, ...validation })}
        className="w-full bg-background text-base border border-solid border-light rounded mb-4 p-2"
      />
      {errors && <span className="text-sm color-primary">{errors.message}</span>}
    </Fragment>
  );
}
 
export default TextInput;