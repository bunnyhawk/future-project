import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header className="py-8">
    <nav className="flex justify-between items-center flex-col sm:flex-row">
      <ul className="flex flex-col sm:flex-row order-2 sm:order-1 text-center">
        <li className="mb-1 sm:mr-4">
          <Link
            to="/"
            className="underline active:text-cta hover:text-cta focus:text-cta"
          >
            Home
          </Link>
        </li>
        <li className="mb-1 sm:mr-4">
          <Link
            to="/about"
            className="underline active:text-cta hover:text-cta focus:text-cta"
          >
            About
          </Link>
        </li>
        <li className="mb-1">
          <Link
            to="/donate"
            className="underline active:text-cta hover:text-cta focus:text-cta"
          >
            Donate
          </Link>
        </li>
      </ul>
      <Link
        to="/submit"
        className="bg-cta border border-cta active:border-light hover:border-light focus:border-light px-4 py-2 rounded text-light order-1 sm:order-2 mb-5 sm:mb-0"
      >
        Honor a Loved One
      </Link>
    </nav>
  </header>
);

export default Header;
