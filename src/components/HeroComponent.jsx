import { useEffect, useState } from 'react';
import profile from '../assets/profile.jpg';
import mouseIcon from '../assets/mouse.png'; // Import your mouse icon

const professions = [
  "web designer",
  "web developer",
  "database designer"
];

const HeroComponent = () => {
  const [currentProfession, setCurrentProfession] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delay, setDelay] = useState(200);
  const [scrollEffect, setScrollEffect] = useState(1); // State to control opacity based on scroll

  useEffect(() => {
    const handleTypingEffect = () => {
      const fullText = professions[index];
      const updatedText = isDeleting 
        ? fullText.slice(0, currentProfession.length - 1)
        : fullText.slice(0, currentProfession.length + 1);

      setCurrentProfession(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setDelay(1000); // Pause before deleting
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % professions.length); // Cycle to next profession
        setDelay(500); // Pause before typing next profession
      } else {
        setDelay(isDeleting ? 100 : 200); 
      }
    };

    const timer = setTimeout(handleTypingEffect, delay);
    return () => clearTimeout(timer);
  }, [currentProfession, isDeleting, index, delay]);

  // Scroll effect handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Current scroll position
      const maxScroll = window.innerHeight; // Maximum scroll value (height of the viewport)

      // Calculate the opacity based on scroll position
      const opacity = Math.max(1 - scrollPosition / maxScroll, 0); // Ensure it doesn't go below 0
      setScrollEffect(opacity); // Update opacity state
    };

    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth', 
    });
  };

  return (
    <div className="flex flex-col lg:flex-row background-color">
      {/* Left Side Content */}
      <div className="hidden lg:flex lg:w-1/2 flex-col mt-60 px-8 md:px-20 lg:px-40" style={{ opacity: scrollEffect }}>
        <h2 className="text-8xl font-bold custom-h2 relative">
          <span className="relative inline-block text-white" style={{ WebkitTextStroke: '2px black' }}>
            Hi,
          </span> <br /> {/* Line break */}
          My name is Shubham <br /> {/* Line break */}
          Panchal
        </h2>
        <h3 className="text-4xl font-semibold mt-2">
          I am a <span className="text-blue-600">{currentProfession}</span>
        </h3>
        <p className="mt-4 text-base">
          I'm passionate about bringing both the technical and visual aspects of digital products to life. 
          User experience, beautiful pixels, and writing clean, accessible, human code matter to me.
        </p>

        {/* Mouse Icon with Animation */}
        <div className="mt-16 flex justify-center animate-bounce" onClick={handleMouseClick}>
          <img src={mouseIcon} alt="Scroll Down" className="w-16 h-16 cursor-pointer" />
        </div>
      </div>

      {/* Right Side Image and Content */}
      <div className="relative w-full lg:w-1/2 flex flex-col items-center">
        <img 
          src={profile} 
          alt="profile" 
          className="w-48 h-48 rounded-full object-cover lg:w-full lg:h-auto lg:rounded-none mt-16 lg:mt-0"
        />

        {/* Text Below Image for Mobile Screens */}
        <div className="flex flex-col justify-center items-center p-8 lg:hidden mt-16 text-center" style={{ opacity: scrollEffect }}>
          <h2 className="text-6xl font-bold text-black custom-h2 relative">
            <span className="relative inline-block text-white" style={{ WebkitTextStroke: '2px black' }}>
              Hi,
            </span> <br /> {/* Line break */}
            My name is Shubham <br /> {/* Line break */}
            Panchal
          </h2>
          <h3 className="text-4xl font-semibold mt-6 text-gray-600">
            I am a <span className="text-blue-600">{currentProfession}</span>
          </h3>
          <p className="mt-6 text-base text-black">
            I'm passionate about bringing both the technical and visual aspects of digital products to life. 
            User experience, beautiful pixels, and writing clean, accessible, human code matter to me.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;
