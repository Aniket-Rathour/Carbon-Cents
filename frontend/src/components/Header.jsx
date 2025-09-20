import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    // Replaced flexbox with absolute positioning for a transparent overlay effect.
    // Removed shadows and added padding for better spacing.
    // Added a z-index to ensure it stays on top of other content.
    <header className="absolute top-0 left-0 w-full z-30 p-6 md:p-8">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Changed the image link to a text link and styled it to match the photo */}
        <Link to="/" className="text-white text-3xl font-light tracking-wider">
          CARBON-CENTS
        </Link>
        
        {/* Kept your responsive breakpoint and updated nav links */}
        <nav className="hidden md:flex gap-7 text-white text-lg font-thin">
          <NavLink to="/" className="hover:text-gray-300 transition-colors">
            Home
          </NavLink>
          <NavLink to="/Accreditation" className="hover:text-gray-300 transition-colors">
            Mechanics
          </NavLink>
          <NavLink to="/signin" className="hover:text-gray-300 transition-colors">
            Sign Up
          </NavLink>
          <NavLink to="/about" className="hover:text-gray-300 transition-colors">
            About US
          </NavLink>
          <NavLink to="/contacts" className="hover:text-gray-300 transition-colors">
            Contacts
          </NavLink>
        </nav>

        {/* Placeholder for a mobile menu button on small screens */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>

      </div>
    </header>
  );
}

export default Nav;
