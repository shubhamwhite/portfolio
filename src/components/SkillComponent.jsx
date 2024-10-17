import React, { useState } from 'react';

const SkillComponent = () => {
  const skills = [
    { id: 1, name: "JavaScript", description: "This is a brief description of JavaScript." },
    { id: 2, name: "HTML", description: "This is a brief description of HTML." },
    { id: 3, name: "CSS", description: "This is a brief description of CSS." },
    { id: 4, name: "Node.js", description: "This is a brief description of Node.js." },
    { id: 5, name: "React", description: "This is a brief description of React." },
    { id: 6, name: "SQL", description: "This is a brief description of SQL." },
    { id: 7, name: "Cloud Computing", description: "This is a brief description of Cloud Computing." },
    { id: 8, name: "Microservices", description: "This is a brief description of Microservices." },
    { id: 8, name: "Microservices", description: "This is a brief description of Microservices." },
    { id: 8, name: "Microservices", description: "This is a brief description of Microservices." }
  ];

  const [visibleSkills, setVisibleSkills] = useState(6); 

  const loadMoreSkills = () => {
    setVisibleSkills((prev) => Math.min(prev + 2, skills.length)); 
  };

  return (
    <div className="flex flex-col justify-center items-center background-color pb-40 pt-20 px-8 md:px-20 lg:px-40 border-t-[1px] border-gray-700 min-h-screen">

      <div className="w-full flex justify-center mb-8">
      <p className="text-center max-w-2xl mx-auto text-gray-800 bg-gray-100 p-4 rounded-lg shadow-md mb-10">
         😎 Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {skills.slice(0, visibleSkills).map((skill) => (
          <div
            key={skill.id}
            className="flex flex-col shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-95"
            style={{
              backgroundColor: "#FFC55A", 
              border: "1px solid black", 
              padding: "40px 50px", 
            }}
          >
            <div className="flex-grow">
              <h2 className="text-xl font-bold text-black">{skill.name}</h2>
              <p className="text-black">{skill.description}</p>
            </div>
          </div>
        ))}

        {visibleSkills < skills.length && (
          <div
            className="flex flex-col shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-95 cursor-pointer"
            onClick={loadMoreSkills} 
            style={{
              backgroundColor: "#FFC55A", 
              border: "1px solid black", 
              padding: "40px 50px",
            }}
            >
            <div className="flex-grow flex items-center justify-center text-2xl font-normal">
              Load More
            </div>
          </div>  
        )}
      </div>
    </div>
  );
};

export default SkillComponent;
