// import Logo from './Logo';
// import SearchBar from './SearchBar';
// import Navbar from './Navbar';
// import { useEffect, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// function Header() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   // Toggle the menu visibility when the bars icon is clicked

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };


// // Disable scrolling when the menu is open
// useEffect(() => {
//   if (isMenuOpen) {
//     document.body.style.overflow = 'hidden'; // Disable scroll
//   } else {
//     document.body.style.overflow = ''; // Enable scroll
//   }

//   // Cleanup the overflow style when the component unmounts or menu is closed
//   return () => {
//     document.body.style.overflow = ''; // Reset overflow
//   };
// }, [isMenuOpen]);

//   return (
//     <div className="flex items-center justify-between px-8 py-[12px]">
//       {/* Navbar for large screens */}
//       <div className="hidden lg:flex">
//         <Navbar />
//       </div>
//       {/* Bars icon for medium and small screens */}
//       <div className="flex items-center justify-between lg:hidden ">
//         <FontAwesomeIcon
//           icon={faBars}
//           className="cursor-pointer text-4xl"
//           onClick={toggleMenu} // Toggle the menu visibility
//         />
//         {isMenuOpen && (
//           <>
//             {/* Overlay Background */}
//             <div
//               className="absolute inset-0 z-40 bg-black opacity-50 "
//               onClick={toggleMenu}
//             ></div>

//             {/* Navbar */}
//             <div className="absolute left-0 right-0 top-16 z-50 w-full translate-y-0 transform rounded-lg bg-white p-4 shadow-xl transition-transform duration-300 ease-in-out">
//               <Navbar />
//             </div>
//           </>
//         )}
//       </div>
//       <SearchBar />
//       <Logo>Quran</Logo>
//     </div>
//   );
// }

// export default Header;


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

