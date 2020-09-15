import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  function handleThemeChange() {
    const rootStyle = window.getComputedStyle(document.documentElement);
    const currTextColor = rootStyle.getPropertyValue("--color-text");

    document.documentElement.style.setProperty(
      "--color-text",
      rootStyle.getPropertyValue("--color-theme")
    );
    document.documentElement.style.setProperty("--color-theme", currTextColor);
  }
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
      {/* <button onClick={handleThemeChange} className="themeChange text-text">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" aria-labelledby="svgTitle" role="img">
          <title id="svgTitle">Change the theme</title>
          <path d="M12 3.571c3.658 5.437 6 9.223 6 12.503 0 3.268-2.691 5.926-6 5.926s-6-2.658-6-5.925c0-3.281 2.341-7.067 6-12.504zm0-3.571c-4.87 7.197-8 11.699-8 16.075 0 4.378 3.579 7.925 8 7.925s8-3.547 8-7.925c0-4.376-3.13-8.878-8-16.075z"/>
        </svg>
      </button> */}
      <div className="themeChange tg-list-item" onChange={handleThemeChange}>
        <input class="tgl tgl-flat" id="cb4" type="checkbox"></input>
        <label class="tgl-btn" for="cb4"><span class="sr-only">Change the theme</span></label>
      </div>
    </header>
  );
};

export default Header;
