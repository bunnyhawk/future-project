import React from 'react';

const TextLink = ({ href, children }) => (
  <a
    href={href}
    className="underline active:text-primary hover:text-primary focus:text-primary"
    target="_blank"
    rel="noopener noreferrer"
  >
    {children}
  </a>
);

 
export default TextLink;