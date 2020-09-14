import React from 'react';

const TextLink = ({ href, children }) => (
  <a
    href={href}
    className="underline active:text-cta hover:text-cta focus:text-cta"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

 
export default TextLink;