


import Logo from './Logo';
import SearchBar from './SearchBar';
import Navbar from './Navbar';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Disable scrolling when the menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <header className="">
      <div className="container mx-auto flex items-center justify-between gap-6 px-4 sm:px-6 lg:px-8 py-3">
        {/* Mobile Menu Button (Align Left) */}
        <button className="block lg:hidden p-2" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className="text-3xl" />
        </button>

        {/* Desktop Navbar (Align Left) */}
        <div className="hidden lg:flex">
          <Navbar />
        </div>

        {/* Search Bar (Centered) */}
        <div className="flex-grow hidden lg:flex max-w-sm mx-auto">
          <SearchBar />
        </div>

        {/* Logo (Align Right) */}
        <div className="ml-auto">
          <Logo>Quran</Logo>
        </div>
      </div>

      {/* Mobile Navbar (Slide-in from Left) */}
      <div
        className={`fixed inset-0 z-50 transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out bg-white shadow-xl p-5 lg:hidden`}
      >
        {/* Close button */}
        <button className="absolute top-4 right-4 text-3xl" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        {/* Mobile Navbar Links */}
        <Navbar />
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;

