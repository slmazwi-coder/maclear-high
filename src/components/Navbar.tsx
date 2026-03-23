import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Extra-Curricular', path: '/extra-curricular' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Documents', path: '/documents' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'School Fees', path: '/school-fees' },
  { name: 'Policy', path: '/policy' },
  { name: 'Contact', path: '/contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();

  return (
    <nav className="glass-nav border-b-2 border-school-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/Logo/Badge.jpg" 
                alt="Maclear High School Logo" 
                className="h-14 w-14 rounded-lg object-contain shadow-md"
              />
              <div className="hidden md:block">
                <span className="text-xl font-bold text-black block leading-none">Maclear High</span>
                <span className="text-sm font-semibold text-school-primary uppercase tracking-tighter">School</span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-bold transition-colors",
                  location.pathname === link.path
                    ? "text-school-primary bg-red-50"
                    : "text-gray-700 hover:text-black hover:bg-gray-50"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-school-primary p-2 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-bold",
                  location.pathname === link.path
                    ? "text-school-primary bg-red-50"
                    : "text-gray-700 hover:text-black"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
