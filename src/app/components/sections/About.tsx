"use client";

import { motion } from "framer-motion";

import {
  slideInLeft,
  slideInRight,
  staggerContainer,
  innerStagger,
  pillItem,
} from "../animations/variants";

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
      <motion.h2
        className="text-3xl font-semibold mb-8"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.4 }}
      >
        ABOUT ME
      </motion.h2>

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
        <motion.div
          className="tab-content border-base-300 bg-base-100 p-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h3
            className="text-4xl font-semibold mb-6"
            variants={slideInLeft}
          >
            Background
          </motion.h3>

          <motion.p className="text-white mb-4" variants={slideInRight}>
            I&apos;m a passionate Computer Science student with aspirations to
            become a professional Data Analyst and Web Developer. Outside of my
            coursework, I dedicate a lot of time to volunteering at my
            university. As a Prospective Student Engagement Ambassador,
            I&apos;ve had the privilege of welcoming new students and their
            families, giving campus tours that highlight my favorite spots, and
            helping organize events for the Computer Science Department such as
            orientations and student activities. In addition, I serve as the
            Tech Executive for the Data Science and Machine Learning Club, where
            I design and manage tools that keep our operations running smoothly.
            I love bringing ideas to life; there&apos;s nothing more rewarding
            than turning a concept into a polished, useful final product. I
            believe data is essential for making well-informed, justifiable
            decisions, and I&apos;m excited by future opportunities to combine
            my analytical skills with my web development expertise to create
            intuitive dashboards that can be easily understood by both
            professionals and non-professionals alike.
          </motion.p>

          <motion.p className="text-white mb-4" variants={slideInLeft}>
            Outside of academics, I have a wide range of hobbies that keep me
            inspired and energized. I&apos;m an avid motorcyclist; I love the
            feeling of the open road and the fresh breeze, especially when
            riding with friends. Traveling is another big passion of mine, and
            I&apos;ve been fortunate to visit many countries, including Mexico,
            Japan, the United States, several parts of Europe, and more.
            I&apos;m currently eyeing trips to Singapore and China, both of
            which have incredible sights I can&apos;t wait to experience. In my
            free time, I also enjoy gaming with friends. It&apos;s my way of
            unwinding, connecting, and having a good laugh. Though sometimes
            things can get competitive, its all a part of the fun. I believe
            that my passion for technology has always gone hand-in-hand with my
            love for video games, as I believe technology has the power to bring
            people together and build strong communities.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
            variants={innerStagger}
          >
            <motion.img
              src="/assets/motorcycle.jpg"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={slideInRight}
            />
            <motion.img
              src="/assets/friends.jpg"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={slideInRight}
            />
            <motion.img
              src="/assets/travel.jpg"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              variants={slideInRight}
            />
          </motion.div>
        </motion.div>
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-xl"
          aria-label="Skills"
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {/* Parent stagger controls everything in this tab */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            <motion.h3
              className="text-4xl font-semibold mb-4"
              variants={slideInLeft}
            >
              Skills
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* Languages */}
              <motion.div
                className="card bg-base-200 shadow-xl p-6 mb-6"
                variants={slideInLeft}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Languages
                </h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  variants={innerStagger}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaPython className="text-4xl mb-2" />
                    <h4 className="text-white">Python</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <IoLogoJavascript className="text-4xl mb-2" />
                    <h4 className="text-white">Javascript</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaJava className="text-4xl mb-2" />
                    <h4 className="text-white">Java</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <SiTypescript className="text-4xl mb-2" />
                    <h4 className="text-white">Typescript</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <BsFiletypeSql className="text-4xl mb-2" />
                    <h4 className="text-white">SQL</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaHtml5 className="text-4xl mb-2" />
                    <h4 className="text-white">HTML</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaCss3Alt className="text-4xl mb-2" />
                    <h4 className="text-white">CSS</h4>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Frameworks & Libraries */}
              <motion.div
                className="card bg-base-200 shadow-xl p-6 mb-6"
                variants={slideInRight}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Frameworks & Libraries
                </h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  variants={innerStagger}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaReact className="text-4xl mb-2" />
                    <h4 className="text-white">React</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <SiNextdotjs className="text-4xl mb-2" />
                    <h4 className="text-white">Next.js</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <SiPandas className="text-4xl mb-2" />
                    <h4 className="text-white">Pandas</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <SiNumpy className="text-4xl mb-2" />
                    <h4 className="text-white">Numpy</h4>
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Databases & Tools */}
              <motion.div
                className="card bg-base-200 shadow-xl p-6 mb-6"
                variants={slideInLeft}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Databases & Tools
                </h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
                  variants={innerStagger}
                >
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <SiDjango className="text-4xl mb-2" />
                    <h4 className="text-white">Django</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaNodeJs className="text-4xl mb-2" />
                    <h4 className="text-white">Node.js</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <IoLogoFirebase className="text-4xl mb-2" />
                    <h4 className="text-white">Firebase</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaFileExcel className="text-4xl mb-2" />
                    <h4 className="text-white">Excel</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaChartBar className="text-4xl mb-2" />
                    <h4 className="text-white">Power BI</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <VscVscode className="text-4xl mb-2" />
                    <h4 className="text-white">VS Code</h4>
                  </motion.div>
                  <motion.div
                    className="flex flex-col items-center"
                    variants={pillItem}
                  >
                    <FaFigma className="text-4xl mb-2" />
                    <h4 className="text-white">Figma</h4>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Education Tab */}
        <input
          type="radio"
          name="my_tabs_3"
          className="tab text-xl"
          aria-label="Education"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          {/* Parent stagger for this whole tab */}
          <motion.div
            className="flex flex-col md:flex-row items-start"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
          >
            {/* Image Section */}
            <motion.div
              className="flex-shrink-0 md:mr-8 mb-6 md:mb-0"
              variants={slideInLeft}
            >
              <img
                src="/assets/uofc.jpg"
                alt="University of Calgary"
                className="w-92 h-92 object-cover rounded-lg"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div variants={slideInRight}>
              <h3 className="text-4xl font-semibold mb-8">Education</h3>

              <motion.p className="text-white mb-4" variants={slideInRight}>
                I am currently a student at the University of Calgary studying
                Computer Science. Throughout my academics, I&apos;sve had
                numerous opportunities to build my skills through comprehensive
                projects and activities. Here is a list of some of the
                highlighted courses I have taken:
              </motion.p>

              {/* Nested stagger for the list */}
              <motion.ul
                className="list-disc pl-6 text-white"
                variants={innerStagger}
              >
                {[
                  "Database Management Systems",
                  "Human Computer Interactions",
                  "Machine Learning & AI",
                  "Web Development Essentials",
                  "Data Structures",
                  "Algorithm Analysis",
                ].map((course) => (
                  <motion.li key={course} variants={pillItem}>
                    {course}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
