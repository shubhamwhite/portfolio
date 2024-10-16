import { useState } from 'react';

const NavBarComponent = () => {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-24 bg-gradient-to-r from-[#7752FE] to-[#1C1678] sticky top-0 z-50 flex items-center justify-between px-8 md:px-20 lg:px-40 border-b-2 border-gray-700">
      <div className="bg-clip-text text-2xl sm:text-3xl md:text-4xl font-bold text-transparent">
        <h1 className='text-gray-100'>
          Shubham
        </h1> 
      </div>

      <div className="text-white hidden md:flex space-x-6 sm:space-x-12 lg:space-x-20 text-base sm:text-lg lg:text-xl font-light">
        <a href="#home" className="hover:text-gray-600">Home</a>
        <a href="#downloads" className="hover:text-gray-600">Downloads</a>
        <a href="#projects" className="hover:text-gray-600">Projects</a>
        <a href="#skills" className="hover:text-gray-600">Skills</a>
        <a href="#feature" className="hover:text-gray-600">Feature</a>
        <a href="#blog" className="hover:text-gray-600">Blog</a>
        <a href="#about" className="hover:text-gray-600">About</a>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-100 hover:text-gray-100 focus:outline-none focus:text-gray-100"
        >
          {isOpen ? (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="absolute mt-8 top-16 left-0 w-full py-10 px-8 project-bg flex flex-col space-y-4 text-xl font-semibold md:hidden border-b-2 border-gray-700">
          <a href="#home" className="hover:text-gray-600">Home</a>
          <a href="#downloads" className="hover:text-gray-600">Downloads</a>
          <a href="#projects" className="hover:text-gray-600">Projects</a>
          <a href="#skills" className="hover:text-gray-600">Skills</a>
          <a href="#feature" className="hover:text-gray-600">Feature</a>
          <a href="#blog" className="hover:text-gray-600">Blog</a>
          <a href="#about" className="hover:text-gray-600">About</a>
        </div>
      )}
    </nav>
  );
}

export default NavBarComponent;
