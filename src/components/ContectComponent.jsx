import React from 'react';
import video from '../assets/video/1114832_Woman_Hand_3840x2160.mp4'; 

const ContectComponent = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center min-h-screen p-10 px-8 md:px-20 lg:px-40 border-t-[1px] border-gray-700" style={{ backgroundColor:"#FEFFD2" }}>
      {/* Left side: Video (hidden on mobile, loop and autoplay on desktop) */}
      <div className="w-full md:w-1/2 p-4 hidden md:block">
        <video className="w-full h-auto rounded-lg" loop autoPlay muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Right side: Form */}
      <div className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center">
        {/* Add text for mobile devices */}
        <div className="text-center mb-12 md:hidden">
          <p className="text-gray-700 text-lg">
            Lorem Ipsum is dummy text of 🎉 typesetting industry.
          </p>
        </div>
        
        {/* Add text for desktop screens */}
        <div className="text-center mb-6 hidden md:block">
          <p className="text-gray-700 text-lg">
            Lorem Ipsum is dummy text of 🎉 typesetting industry.
          </p>
        </div>

        <form className="w-full max-w-md">
          <div className="mb-6">
            <label
              className="block text-gray-900 text-lg font-normal mb-2"
              htmlFor="fullName"
            >
            </label>
            <input
              type="text"
              id="fullName"
              className="background-color shadow appearance-none border rounded h-14 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder-black"
              style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: 'background-color', // Set background color
                border: '1px solid black',
              }}
              placeholder="Full name"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-900 text-lg font-normal mb-2"
              htmlFor="email"
            >
            </label>
            <input
              type="email"
              id="email"
              className="background-color shadow appearance-none border rounded h-14 w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline placeholder-black"
              style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: 'background-color', 
                border: '1px solid black',
              }}
              placeholder="Email"
            />
          </div>

          {/* Button Centered on Mobile */}
          <div className="flex items-center justify-center md:justify-between">
            <button
              className="background-color w-full md:w-auto sm:w-1/2 px-10 py-4 text-lg font-light rounded-md hover:opacity-80 transition duration-300 ease-in-out text-black"
              style={{
                fontFamily: "'Poppins', sans-serif",
                backgroundColor: 'background-color', 
                border: '1px solid black', 
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Add custom CSS for placeholder color */}
     
    </div>
  );
};

export default ContectComponent;
