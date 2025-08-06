"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      <a
        href="https://github.com/aeMyst"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle w-12 h-12 transition duration-300 hover:scale-110 hover:brightness-125"
        style={{ backgroundColor: "#181717", color: "white" }}
      >
        <FaGithub className="text-3xl" />
      </a>
      <a
        href="https://www.linkedin.com/in/peter-tran-portal"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle w-12 h-12 transition duration-300 hover:scale-110 hover:brightness-125"
        style={{ backgroundColor: "#0077B5", color: "white" }}
      >
        <FaLinkedin className="text-3xl" />
      </a>
      <a
        href="https://www.instagram.com/peterthetran"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-circle w-12 h-12 transition duration-300 hover:scale-110 hover:brightness-125"
        style={{ backgroundColor: "#E1306C", color: "white" }}
      >
        <FaInstagram className="text-3xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
