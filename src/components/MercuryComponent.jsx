import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import arrow from '../assets/asterisk_17385171.png';

const MercuryComponent = () => {
  const containerRef = useRef(null); 
  const items = ['Figma', 'VsCode', 'Postman', 'RabbitMq', 'AWS', 'Ubuntu'];

  useEffect(() => {
    const container = containerRef.current;
    let lastScrollY = window.scrollY;

    const updateScroll = () => {
      const deltaY = window.scrollY - lastScrollY; 
      lastScrollY = window.scrollY;

      const newTranslateX = gsap.getProperty(container, 'x') + deltaY * 0.8; 
      gsap.to(container, { x: newTranslateX, duration: 0, ease: 'power1.out' });

      if (Math.abs(newTranslateX) >= container.scrollWidth / 10) {
        gsap.set(container, { x: 0 });
      }
    };

    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll); 
    };
  }, []);

  return (
    <div className="left-0 w-full sm:h-28 md:h-40 overflow-hidden relative border-t-[1px] border-gray-700 flex items-center justify-center" style={{ backgroundColor: "#FEFFD2" }}>
      <div
        ref={containerRef}
        className="flex space-x-6 md:space-x-24" 
        style={{
          willChange: 'transform',
          whiteSpace: 'nowrap',
          position: 'relative',
        }}
      >
        {items.concat(items).map((item, index) => (
          <div 
            key={index} 
            className="flex items-center justify-center md:space-x-12 sm:space-x-4 sm:px-4" 
          >
            <span className="text-black sm:text-[20px] md:text-[40px] xl:font-light">
              {item}
            </span>
            {index < items.length * 2 - 1 && (
              <img
                src={arrow}
                alt="arrow"
                className="sm:w-[40px] sm:h-[40px] md:w-[60px] md:h-[60px] sm:ml-4 md:ml-6" 
              />
            )}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-transparent xl:text-8xl">{' '}</span>
        </div>
      </div>
    </div>
  );
};

export default MercuryComponent;
