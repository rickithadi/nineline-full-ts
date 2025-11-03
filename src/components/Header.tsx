import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// Header component props interface
interface HeaderProps {
  logo: React.ReactNode;
  navigation: {
    html: string;
    links: { text: string; href: string }[];
  };
  favicon: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  navigation,
  favicon,
}) => {
  return (
    <header className="bg-primary text-white py-4 sm:py-6">
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center">
          {logo || (
            <span className="font-bold text-2xl sm:text-3xl">
              {navigation.html || 'F|fo'}
            </span>
          )}
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center space-x-6">
          {navigation.links.map((link, index) => (
            <NavLink
              key={index}
              to={link.href}
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-secondary hover:text-accent'
                    : 'hover:text-accent'
                }`
              }
            >
              {link.text}
            </NavLink>
          ))}
        </nav>

        {/* Call-to-Action */}
        <div className="hidden sm:flex items-center space-x-4">
          <Link
            to="/login"
            className="text-lg font-medium transition-colors duration-300 hover:text-accent"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-secondary hover:bg-accent text-lg font-medium px-6 py-3 rounded-md transition-colors duration-300"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="sm:hidden">
          <button type="button" className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;