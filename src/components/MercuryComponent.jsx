import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import arrow from '../assets/pharmacy_16739781.png';

const MercuryComponent = () => {
  const containerRef = useRef(null); // Ref to the container
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
  }, []); // Only run once on mount

  return (
    <div className="background-color left-0 w-full h-20 md:h-40 overflow-hidden relative border-t-2 border-gray-700 flex items-center justify-center">
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
          <div key={index} className="flex items-center space-x-80 sm:space-x-4">
            <span className="text-black text-xl md:text-4xl xl:mr-16 sm:ml-4">{item}</span>
            {index < items.length * 2 - 1 && (
              <img
                src={arrow}
                alt="arrow"
                className=" w-6 h-6 md:w-12 md:h-12" // Larger size for desktop
              />
            )}
          </div>
        ))}
        {/* To ensure smooth transition without gaps, add a blank placeholder */}
        <div className="flex items-center">
          <span className="text-transparent xl:text-8xl">{' '}</span>
        </div>
      </div>
    </div>
  );
};

export default MercuryComponent;
