import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="py-8">
    <nav className="flex justify-between items-center flex-col sm:flex-row">
      <ul className="flex flex-col sm:flex-row order-2 sm:order-1 text-center">
        <li className="mb-1 sm:mr-4">
          <Link
            to="/"
            className="underline active:text-primary hover:text-primary focus:text-primary"
          >
            Home
          </Link>
        </li>
        <li className="mb-1 sm:mr-4">
          <Link
            to="/about"
            className="underline active:text-primary hover:text-primary focus:text-primary"
          >
            About
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/donate"
            className="underline active:text-primary hover:text-primary focus:text-primary"
          >
            Donate
          </Link>
        </li>
      </ul>
      <Link
        to="/submit"
        className="bg-primary border border-primary active:border-text hover:border-text focus:border-text px-4 py-2 rounded text-text order-1 sm:order-2 mb-5 sm:mb-0"
      >
        Honor a Loved One
      </Link>
    </nav>
  </header>
);

export default Header;
