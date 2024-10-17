import { useState } from 'react';

const NavBarComponent = () => {
  // State to handle mobile menu visibility
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-24 bg-gradient-to-r background-color sticky top-0 z-50 flex items-center justify-between px-8 md:px-20 lg:px-40 border-b-[1px] border-gray-700">
      <div className="bg-clip-text text-2xl sm:text-3xl md:text-4xl font-mono text-transparent">
        <h1 className='text-black'>
          Shubham
        </h1> 
      </div>

      <div className="text-black hidden md:flex space-x-6 sm:space-x-12 lg:space-x-20 text-base sm:text-lg lg:text-xl font-light">
        <a href="#home" className="hover:text-orange-300">Home</a>
        <a href="#downloads" className="hover:text-orange-300">Downloads</a>
        <a href="#skills" className="hover:text-orange-300">Skills</a>
        <a href="#projects" className="hover:text-orange-300">Projects</a>
        <a href="#contect" className="hover:text-orange-300">Contect</a>
        <a href="#blog" className="hover:text-orange-300">Blog</a>
        <a href="#about" className="hover:text-orange-300">About</a>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-gray-900 hover:text-gray-900 focus:outline-none focus:text-gray-900"
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
        <div className="absolute mt-8 top-16 left-0 w-full py-10 px-8 background-color flex flex-col space-y-4 text-xl font-light md:hidden border-b-2 border-gray-700">
          <a href="#home" className="hover:text-orange-300">Home</a>
          <a href="#downloads" className="hover:text-orange-300">Downloads</a>
          <a href="#skills" className="hover:text-orange-300">Skills</a>
          <a href="#projects" className="hover:text-orange-300">Projects</a>
          <a href="#contect" className="hover:text-orange-300">Contect</a>
          <a href="#blog" className="hover:text-orange-300">Blog</a>
          <a href="#about" className="hover:text-orange-300">About</a>
        </div>
      )}
    </nav>
  );
}

export default NavBarComponent;
