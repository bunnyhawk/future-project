import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;