// src/components/Navbar/Navbar.jsx
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '@/assets/Chuks_Kitchen.png'; // Adjust path to where you save the logo

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Explore', path: '/explore' },
    { name: 'My Orders', path: '/my-orders' },
    { name: 'Account', path: '/account' },
  ];

  return (
    <nav className="shadow-sm bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-3">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img 
              src={logo} 
              alt="Chuks Kitchen" 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-20">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-orange-500'
                    : 'text-gray-700 hover:text-black'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Login Button - Desktop */}
          <div className="hidden md:block shrink-0">
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 transition rounded-lg text-base shadow-sm hover:shadow-md">
              Login
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-700 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-7 w-7" />
              ) : (
                <HiMenuAlt3 className="h-7 w-7" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-3 pb-4 space-y-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={`block px-4 py-2.5 rounded-lg text-base font-normal transition-colors ${
                  isActive(link.path)
                    ? 'bg-gray-50 text-black font-medium'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                }`}
              >
                {link.name}
              </NavLink>
            ))}
            <button className="w-full mt-3 bg-[#FF8C42] hover:bg-[#FF7A29] text-white px-6 py-2.5 rounded-lg text-base font-medium transition-all">
              Login
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;