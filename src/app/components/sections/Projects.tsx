"use client";

import { motion } from "framer-motion";
import {
  gridStagger,
  headerPop,
  cardItem,
  imageReveal,
  innerStagger,
  pillItem,
} from "../animations/projectVariants";

const ProjectsSection = () => {
  const projects = [
    {
      name: "DSMLC Portal & BI Report",
      description:
        "Data Science and Machine Learning Club dashboarding tool connected to Databricks to create visual reports of club events and members",
      github: "https://github.com/aeMyst/PetPals",
      image: "/projects/databricks.jpg",
      technologies: [
        "TypeScript",
        "PySpark",
        "Next.js",
        "Power BI",
        "Databricks",
        "Supabase",
      ],
    },
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
      technologies: ["React", "JavaScript", "CSS", "TailwindCSS"],
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
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 p-6"
    >
      <motion.h2
        className="text-3xl font-semibold mb-8"
        variants={headerPop}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        PROJECTS
      </motion.h2>

      {/* Grid: parent stagger */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-screen-lg mb-12"
        variants={gridStagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="card bg-base-200 shadow-xl p-4 flex flex-col justify-between h-full"
            variants={cardItem}
            whileHover={{ y: -4 }} // subtle lift
            transition={{ type: "spring", stiffness: 250, damping: 20 }}
          >
            {/* Project Image */}
            <motion.img
              src={project.image}
              alt={project.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
              variants={imageReveal}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.25 }}
            />

            <h3 className="text-xl font-bold mb-2">{project.name}</h3>
            <p className="text-md mb-4 text-white">{project.description}</p>

            {/* Technologies List (nested stagger) */}
            <div className="mb-4">
              <h4 className="text-lg font-semibold text-white">
                Technologies:
              </h4>
              <motion.div
                className="flex flex-wrap gap-2 mt-2"
                variants={innerStagger}
              >
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="text-xs font-semibold bg-secondary text-white px-3 py-1 rounded-full"
                    variants={pillItem}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
            </div>

            {/* GitHub Button */}
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-auto"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              View on GitHub
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
