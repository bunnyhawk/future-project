import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="my-12 text-center">
      <ul className="inline-flex opacity-75">
        <li>
          <Link to="#" className="termsLink underline mr-2">Terms of Service</Link>
        </li>
        <li>
          <Link to="#" className="underline">Privacy Policy</Link>
        </li>
      </ul>
    </footer>
  );
}
 
export default Footer;