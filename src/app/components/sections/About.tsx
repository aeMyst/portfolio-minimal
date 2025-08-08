"use client";

import {
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaFileExcel,
  FaChartBar,
  FaFigma,
} from "react-icons/fa";
import {
  SiDjango,
  SiTypescript,
  SiNextdotjs,
  SiPandas,
  SiNumpy,
} from "react-icons/si";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { BsFiletypeSql } from "react-icons/bs";
import { VscVscode } from "react-icons/vsc";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100"
    >
      <h2 className="text-3xl font-semibold mb-8">ABOUT ME</h2>

      {/* Tabs Component */}
      <div className="tabs tabs-lift w-full max-w-6xl min-h-auto">
        {/* Background Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-xl"
          aria-label="Background"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h3 className="text-4xl font-semibold mb-8">Background</h3>
          <p className="text-white">
            This is my background. I am a passionate computer science student
            with a keen interest in software development, AI, and machine
            learning.
          </p>
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-xl"
          aria-label="Skills"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {/* Main Grid for Sections */}
          <h3 className="text-4xl font-semibold mb-4">Skills</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Languages Section */}
            <div className="card bg-base-200 shadow-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Languages
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <FaPython className="text-4xl mb-2" />
                  <h4 className="text-white">Python</h4>
                </div>
                <div className="flex flex-col items-center">
                  <IoLogoJavascript className="text-4xl mb-2" />
                  <h4 className="text-white">Javascript</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaJava className="text-4xl mb-2" />
                  <h4 className="text-white">Java</h4>
                </div>
                <div className="flex flex-col items-center">
                  <SiTypescript className="text-4xl mb-2" />
                  <h4 className="text-white">Typescript</h4>
                </div>
                <div className="flex flex-col items-center">
                  <BsFiletypeSql className="text-4xl mb-2" />
                  <h4 className="text-white">SQL</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaHtml5 className="text-4xl mb-2" />
                  <h4 className="text-white">HTML</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaCss3Alt className="text-4xl mb-2" />
                  <h4 className="text-white">CSS</h4>
                </div>
              </div>
            </div>

            {/* Frameworks & Libraries Section */}
            <div className="card bg-base-200 shadow-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <FaReact className="text-4xl mb-2" />
                  <h4 className="text-white">React</h4>
                </div>
                <div className="flex flex-col items-center">
                  <SiNextdotjs className="text-4xl mb-2" />
                  <h4 className="text-white">Next.js</h4>
                </div>
                <div className="flex flex-col items-center">
                  <SiPandas className="text-4xl mb-2" />
                  <h4 className="text-white">Pandas</h4>
                </div>
                <div className="flex flex-col items-center">
                  <SiNumpy className="text-4xl mb-2" />
                  <h4 className="text-white">Numpy</h4>
                </div>
              </div>
            </div>

            {/* Databases & Tools Section */}
            <div className="card bg-base-200 shadow-xl p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Databases & Tools
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center">
                  <SiDjango className="text-4xl mb-2" />
                  <h4 className="text-white">Django</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaNodeJs className="text-4xl mb-2" />
                  <h4 className="text-white">Node.js</h4>
                </div>
                <div className="flex flex-col items-center">
                  <IoLogoFirebase className="text-4xl mb-2" />
                  <h4 className="text-white">Firebase</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaFileExcel className="text-4xl mb-2" />
                  <h4 className="text-white">Firebase</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaChartBar className="text-4xl mb-2" />
                  <h4 className="text-white">Power BI</h4>
                </div>
                <div className="flex flex-col items-center">
                  <VscVscode className="text-4xl mb-2" />
                  <h4 className="text-white">VsCode</h4>
                </div>
                <div className="flex flex-col items-center">
                  <FaFigma className="text-4xl mb-2" />
                  <h4 className="text-white">Figma</h4>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-xl"
          aria-label="Education"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <div className="flex flex-col md:flex-row items-start">
            {/* Image Section */}
            <div className="flex-shrink-0 mr-8">
              <img
                src={"/assets/uofc.jpg"}
                className="w-92 h-92 object-cover rounded-lg"
              />
            </div>

            {/* Content Section */}
            <div>
              <h3 className="text-4xl font-semibold mb-8">Education</h3>
              <p className="text-white mb-4">
                I am currently a student at the University of Calgary studying
                Computer Science. Throughout my academics, I've had numerous
                opportunities to build my skills through comprehensive projects
                and activities. Here is a list of some of the highlighted
                courses I have taken:
              </p>
              <ul className="list-disc pl-6 text-white">
                <li>Database Management Systems</li>
                <li>Human Computer Interactions</li>
                <li>Machine Learning & AI</li>
                <li>Web Development Essentials</li>
                <li>Data Structures</li>
                <li>Algorithm Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
