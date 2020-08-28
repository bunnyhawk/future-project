import React from 'react';

const Header = ({ children }) => {
  return (
    <h1 className="text-2xl leading-8 font-serif font-bold mb-2">{children}</h1>
  );
}
 
export default Header;