import React from "react";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "GD-Events",
      description: "GD-Events is used to book the venues for marriage.",
      imageUrl:
        "https://github.com/user-attachments/assets/e147e2ab-c098-4c12-86ad-97fe6e817e8c",
      projectLink: "https://wedding-app-gdevents.netlify.app/",
    },
    {
      id: 2,
      title: "Tamil Letters",
      description:
        "Developed a responsive React application with modern JavaScript features.",
      imageUrl:
        "https://github.com/user-attachments/assets/4edac14a-35e5-44a6-9116-c3c914458542",
      projectLink: "https://gdgiri.github.io/tamil-letters1/",
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
            <div className="h-64 w-full relative">
              {/* Set height for the image wrapper */}
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover transition-transform transform hover:scale-110" // Ensure the image covers the full height and width
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Project-Title: {project.title}
              </h3>
              <p className="text-gray-600 mb-2">
                <strong>Project-Description:</strong> {project.description}
              </p>
              {project.projectLink && (
                <div className="text-center">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-6 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all duration-300"
                  >
                    View Project
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
