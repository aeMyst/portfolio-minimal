"use client";

const ProjectsSection = () => {
  const projects = [
    {
      name: "PetPals",
      description:
        "2nd Place Hackathon Winner that focuses on building a platform for anonymous blogging to address inclusivity",
      github: "https://github.com/aeMyst/PetPals",
      image: "/projects/petpals.png",
      technologies: [
        "Firebase",
        "React",
        "JavaScript",
        "Express.js",
        "Gemini API",
        "Axios",
        "Figma",
      ],
    },
    {
      name: "TableTalk",
      description:
        "Community based board game website that focuses on practicing HCI principles",
      github: "https://github.com/aeMyst/TableTalk",
      image: "/projects/tabletalk.png",
      technologies: ["React", "JavaScript", "HTML", "CSS", "TailwindCSS"],
    },
    {
      name: "RevRentals Marketplace",
      description:
        "A mobile app created to foster a peer-to-peer marketplace for renting motorcycles",
      github: "https://github.com/aeMyst/RevRentals",
      image: "/projects/revrentals.png",
      technologies: [
        "Flutter",
        "Dart",
        "Figma",
        "Django",
        "Python",
        "SQL",
        "mySQL",
        "Android Studio",
      ],
    },
    {
      name: "Minigame Online Portal",
      description:
        "A multiplayer platform that simulates matchmaking in chess, tic-tac-toe, and Connect4",
      github: "https://github.com/aeMyst/Minigame-Portal",
      image: "/projects/gameportal.png",
      technologies: ["Java", "JavaFX", "CSS"],
    },
    {
      name: "ChefAI",
      description:
        "A recipe generator that provides tailored meal ideas based on expiring ingredients in the fridge",
      github: "https://github.com/aeMyst/ai-chef",
      image: "/projects/chefai.png",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Python",
        "Flask",
        "SQLite",
        "Figma",
        "OpenAI API",
      ],
    },
    {
      name: "Celebrity Capability Survey",
      description:
        "A compatibility calculator with celebrities that visualizes results through Data dashboards",
      github: "https://github.com/aeMyst/Celebrity-Compatibility-Test",
      image: "/projects/testapp.png",
      technologies: ["Java", "JavaFX", "CSS"],
    },
    {
      name: "Wordle Console Replica",
      description:
        "A console-based Python program that replicates the Wordle game experience.",
      github: "https://github.com/aeMyst/Wordle",
      image: "/projects/wordle.png",
      technologies: ["Python"],
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-6"
    >
      <h2 className="text-3xl font-semibold mb-8">-----= PROJECTS =-----</h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mb-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-xl p-4 flex flex-col justify-between h-full"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />

            <h3 className="text-xl font-bold mb-4">{project.name}</h3>
            <p className="text-md mb-4 text-white">{project.description}</p>

            {/* Technologies List */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-xs font-semibold bg-gray-700 text-white px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* GitHub Button */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-auto transition duration-300 hover:scale-105"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
