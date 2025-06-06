import React, { useState } from 'react';

const projectData = [
  {
    title: 'Prescripto',
    tech: 'HTML, CSS, JavaScript, React.js, TailwindCSS, MongoDB, Node.js, Express.js',
    description: `Prescripto is a full-stack healthcare platform that allows users to seamlessly book and manage doctor appointments with secure payments, role-based dashboards, and cloud-based image storage.`,
    link: 'https://github.com/aakarsh111/Prescripto',
  },
  {
    title: 'Bg-Removal',
    tech: 'RestAPI, React.js, Express.js, TailwindCSS, MongoDB',
    description: `Bg-Removal is a web application that enables users to upload and remove image backgrounds seamlessly, featuring secure authentication, payment integration, and a credit-based system for both individual and enterprise use.`,
    link: 'https://github.com/aakarsh111/bg-removal',
  },
  {
    title: 'E-commerce',
    tech: 'HTML, CSS, JavaScript',
    description: `Ecommerce is a full-stack web application that enables users to browse, search, and purchase products online, featuring secure authentication, payment integration, and dedicated dashboards for users and admins to manage orders and inventory seamlessly.`,
    link: 'https://github.com/aakarsh111/Ecommerce',
  },
  
  
];

function Projects() {
  const [showMore, setShowMore] = useState(false);

  const displayedProjects = showMore ? projectData : projectData.slice(0, 2);

  return (
    <div id="projects" className="w-full max-w-[90rem] px-8 py-16 mx-auto text-white text-center">
      <span className="text-4xl font-bold">My Projects</span>
      <p className="mt-4 text-lg text-gray-300 max-w-[800px] mx-auto">
      Here are some of the projects I've worked on that reflect my skills in full-stack development, artificial intelligence, and creative problem solving. From building real-time web apps to integrating deep learning models, each project showcases a different aspect of my technical journey. Whether it's crafting clean UI/UX, writing scalable backend APIs, or implementing smart algorithms, I love turning ideas into functional and impactful solutions.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10 justify-center">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            className="w-full bg-[#2a2a2a]/60 backdrop-blur-md border border-gray-600 hover:border-yellow-500 transition-all duration-300 rounded-2xl p-8 shadow-md hover:shadow-yellow-500/30 hover:scale-[1.03] text-left"
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">{project.title}</h2>
            <p className="text-sm text-gray-400 italic mb-2">Tech: {project.tech}</p>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline font-semibold"
            >
              GitHub - {project.title}
            </a>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-10 bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-400 transition-colors"
      >
        {showMore ? 'View Less' : 'View More'}
      </button>
    </div>
  );
}

export default Projects;
