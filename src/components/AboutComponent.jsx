import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// HeroComponent
const AboutComponent = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the text
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="px-8 md:px-20 lg:px-40 flex flex-col justify-center items-center min-h-screen background-color border-t-2 border-gray-700">
      <h1
        ref={textRef}
        className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-center leading-snug mb-8"
        style={{ fontFamily: "'Poppins', sans-serif", lineHeight: '1.4' }}
      >
        The first time I got asked to speak at a conference, my gut reaction was 
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: 'linear-gradient(to right, #0ea5e9, #6b21a8, #dc2626)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        > 
          “heck no. That sounds terrifying”.
        </span>
      </h1>

      {/* Centered Button */}
      <button
        className="mt-6 px-8 py-4 text-white text-lg font-semibold rounded-md hover:opacity-80 transition duration-300 ease-in-out hidden md:block" // Hide on small screens
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundImage: 'linear-gradient(to right, #3A1078, #1C1678)', // Gradient background
        }}
      >
        Downloads
      </button>
      
      {/* Optional: Add a mobile-specific button */}
      <button
        className="mt-6 px-4 py-2 text-white text-lg font-semibold rounded-md hover:opacity-80 transition duration-300 ease-in-out md:hidden" // Show only on small screens
        style={{
          fontFamily: "'Poppins', sans-serif",
          backgroundImage: 'linear-gradient(to right, #3A1078, #1C1678)', // Gradient background
        }}
      >
        Downloads
      </button>
    </div>
  );
};

export default AboutComponent;
