import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Context } from "./ContextProvider.jsx";
import { useContext } from "react";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
    const { user } = useContext(Context);
 
 
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <div className="text-2xl font-bold">🌍 LOGO</div>
          <span className="text-xl font-semibold hidden sm:block">EcoPlanet</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Navigation Links */}
        <div className="md:flex space-between items-center ">
        <nav
          className={`sm:flex sm:items-center sm:space-x-6 ${
            isOpen ? "block" : "hidden"
          } absolute sm:static bg-blue-600 sm:bg-transparent w-full left-0 top-16 p-6 sm:p-0 shadow-lg sm:shadow-none transition-all`}
        >
          <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            {["Home", "Blogs", "Missions", "Communities", "Quiz", "Events","Profile"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase()}`}
                    className={({ isActive }) =>
                      `text-lg font-semibold transition duration-300 ${
                        isActive
                          ? "text-yellow-300 underline"
                          : "hover:text-gray-200"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
            
            {/* Authentication Links */}
            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `text-lg font-semibold bg-white px-4 py-2 rounded-lg transition duration-300 
                ${user.isLoggedIn ? "hidden" : ""}
                ${
                    isActive
                      ? "text-blue-600 border border-yellow-300"
                      : "text-blue-600 hover:bg-gray-100"
                  }`
                }
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                    
                  `text-lg font-semibold border px-4 py-2 rounded-lg transition duration-300 
                  ${user.isLoggedIn ? "hidden" : ""}
                  ${
                    isActive
                      ? "bg-white text-blue-600 border-yellow-300"
                      : "border-white hover:bg-white hover:text-blue-600"
                  }`
                }
              >
                Sign In
              </NavLink>
            </li>
          </ul>
        </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
