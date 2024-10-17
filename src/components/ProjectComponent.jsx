import { useState } from "react";
import leftArrow from "../assets/arrow_left.png"; // Replace with the actual path to your left arrow image
import rightArrow from "../assets/arrow_right.png"; // Replace with the actual path to your right arrow image

const ProjectComponent = () => {
  const cardData = [
    {
      project_name: "FaceBook",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGluZm9ybWF0aW9uJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      project_name: "Google",
      details: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      imageUrl:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cardData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="px-8 lg:px-40 md:px-38 background-color w-full h-screen flex flex-col items-center justify-center xl:pt-90 md:pt-20 border-t-2 border-gray-700">
      <div className="relative w-full flex items-center justify-center pb-0">
        <div className="w-full max-w-6xl h-[400px] md:h-[600px] overflow-hidden flex flex-col items-center justify-center">
          <img
            src={cardData[currentIndex].imageUrl}
            alt={`Slide ${currentIndex + 1}`}
            className="w-[400px] md:w-full h-[600px] object-cover rounded-md"
          />
        </div>

        {/* Desktop Navigation Arrows */}
        <div
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block"
        >
          <img
            src={leftArrow}
            alt="Previous"
            className="h-10 w-10 md:h-20 md:w-20 hover:opacity-75 transition duration-300"
          />
        </div>

        <div
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer hidden md:block"
        >
          <img
            src={rightArrow}
            alt="Next"
            className="h-10 w-10 md:h-20 md:w-20 hover:opacity-75 transition duration-300"
          />
        </div>
      </div>

      <div className="w-full max-w-6xl text-center p-3">
        <h2 className="text-xl font-bold">{cardData[currentIndex].project_name}</h2>
        <p className="text-gray-700 mt-1">{cardData[currentIndex].details}</p>
      </div>

      {/* Mobile Navigation Arrows */}
      <div className="flex md:hidden justify-center w-full max-w-6xl px-4 mt-4">
        <div onClick={goToPrevious} className="mx-2 cursor-pointer">
          <img
            src={leftArrow}
            alt="Previous"
            className="h-10 w-10 hover:opacity-75 transition duration-300"
          />
        </div>
        <div onClick={goToNext} className="mx-2 cursor-pointer">
          <img
            src={rightArrow}
            alt="Next"
            className="h-10 w-10 hover:opacity-75 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectComponent;
