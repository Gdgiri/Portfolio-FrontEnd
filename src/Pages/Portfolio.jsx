import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Full Stack Development Project",
      description:
        "Completed a comprehensive project showcasing full stack web development skills.",
      imageUrl: "/path/to/project1.jpg", // Replace with the actual image path
      projectLink: "https://example.com/project1",
    },
    {
      id: 2,
      title: "React Application",
      description:
        "Developed a responsive React application with modern JavaScript features.",
      imageUrl: "/path/to/project2.jpg", // Replace with the actual image path
      projectLink: "https://example.com/project2",
    },
    {
      id: 3,
      title: "React Application",
      description:
        "Developed a responsive React application with modern JavaScript features.",
      imageUrl: "/path/to/project2.jpg", // Replace with the actual image path
      projectLink: "https://example.com/project2",
    },
    {
      id: 4,
      title: "React Application",
      description:
        "Developed a responsive React application with modern JavaScript features.",
      imageUrl: "/path/to/project2.jpg", // Replace with the actual image path
      projectLink: "https://example.com/project2",
    },
  ];

  return (
    <div className="py-5 m-5">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-6 drop-shadow-lg">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="overflow-hidden rounded-lg shadow-xl transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover transition-transform transform hover:scale-110"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-2">{project.description}</p>
              {project.projectLink && (
                <a
                  href={project.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline transition duration-200 transform hover:scale-105"
                >
                  View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
