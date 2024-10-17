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
  ];

  return (
    <div className=" h-screen background-color pb-40 pt-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4 px-8 md:px-20 lg:px-40 border-t-[1px] border-gray-700">
      {skills.map((skill) => (
        <div
          key={skill.id}
          className="shadow-md rounded-lg overflow-hidden flex transition-transform transform hover:scale-95"
          style={{
            backgroundColor: "#FFC55A", // Set background color
            border: "1px solid black", // Add black border
          }}
        >
          <div className="p-4 w-full">
            <h2 className="text-xl font-bold text-black">{skill.name}</h2> {/* Change text color to black */}
            <p className="text-black">{skill.description}</p> {/* Change text color to black */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillComponent;
