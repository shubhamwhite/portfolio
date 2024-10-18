import { useEffect, useState } from 'react';
import profile from '../assets/profile.jpg';
import mouseIcon from '../assets/mouse.png';

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
  const [scrollEffect, setScrollEffect] = useState(1); 

  useEffect(() => {
    const handleTypingEffect = () => {
      const fullText = professions[index];
      const updatedText = isDeleting 
        ? fullText.slice(0, currentProfession.length - 1)
        : fullText.slice(0, currentProfession.length + 1);

      setCurrentProfession(updatedText);

      if (!isDeleting && updatedText === fullText) {
        setDelay(1000);
        setIsDeleting(true);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setIndex((prevIndex) => (prevIndex + 1) % professions.length);
        setDelay(500); 
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
      const scrollPosition = window.scrollY; 
      const maxScroll = window.innerHeight; 

      const opacity = Math.max(1 - scrollPosition / maxScroll, 0); 
      setScrollEffect(opacity); 
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
    <div className="h-screen flex flex-col lg:flex-row" style={{ backgroundColor: "#FEFFD2" }}>
      <div className="hidden lg:flex lg:w-1/2 flex-col mt-40 px-8 md:px-20 lg:px-40" style={{ opacity: scrollEffect }}>
        <h2 className="text-8xl font-bold custom-h2 relative ">
          <span className="relative inline-block text-white" style={{ WebkitTextStroke: '2px black' }}>
            Hi,
          </span> <br />
          My name is Shubham <br />
          Panchal
        </h2>
        <h3 className="text-4xl font-semibold mt-2 text-gray-600">
          I am a <span className="text-orange-600">{currentProfession}</span>
        </h3>
        <p className="mt-4 text-base">
          I'm passionate about bringing both the technical and visual aspects of digital products to life. 
          User experience, beautiful pixels, and writing clean, accessible, human code matter to me.
        </p>

       
        <div className="mt-16 flex justify-center animate-bounce" onClick={handleMouseClick}>
          <img src={mouseIcon} alt="Scroll Down" className="w-16 h-16 cursor-pointer" />
        </div>
      </div>

      <div className="relative w-full lg:w-1/2 flex flex-col items-center">
        <img 
          src={profile} 
          alt="profile" 
          className="w-48 h-48 xl:h-screen rounded-full object-cover lg:w-full lg:h-auto lg:rounded-none mt-16 lg:mt-0"
        /> 

        <div className="flex flex-col justify-center items-center p-8 lg:hidden mt-16 text-center" style={{ opacity: scrollEffect }}>
          <h2 className="text-6xl font-bold text-black custom-h2 relative">
            <span className="relative inline-block text-orange-100" style={{ WebkitTextStroke: '2px black' }}>
              Hi,
            </span> <br /> 
            My name is Shubham <br />
            Panchal
          </h2>
          <h3 className="text-4xl font-semibold mt-6 text-gray-600">
            I am a <span className="text-orange-600">{currentProfession}</span>
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
