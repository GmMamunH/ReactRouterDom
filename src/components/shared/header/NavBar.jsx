import { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navBar = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Services", link: "services" },
    { id: 4, name: "Contact", link: "contact" },
    { id: 5, name: "Login", link: "auth", isLogin: true },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 py-4 fixed top-0 left-0 w-full z-50 shadow-md">
      <nav className="flex items-center justify-between max-w-screen-xl mx-auto px-6">
        {/* Logo */}
        <div className="text-white text-2xl font-extrabold tracking-wide">
          <Link to="/">RSM Innovators</Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navBar.map(({ id, name, link, isLogin }) => (
            <Link
              key={id}
              to={link}
              className={`${
                isLogin
                  ? "text-white bg-blue-600 px-4 py-1 rounded-lg hover:bg-blue-700"
                  : "text-white font-medium text-lg hover:text-blue-400 transition duration-300"
              }`}
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMenuOpen ? "×" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-90 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} className="text-white text-3xl">
            ×
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6">
          {navBar.map(({ id, name, link, isLogin }) => (
            <Link
              key={id}
              to={link}
              className={`${
                isLogin
                  ? "text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700"
                  : "text-white text-2xl font-medium hover:text-blue-400 transition duration-300"
              }`}
              onClick={() => setIsMenuOpen(false)} // Close the menu on click
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};
