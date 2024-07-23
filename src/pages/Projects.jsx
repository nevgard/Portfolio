import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { animate, delay, motion } from "framer-motion";

const projects = [
  {
    title: "Arta - Finance AI",
    description:
      "As a Mobile Developer, I worked with the team to develop a mobile application for money management using AI. Leveraging React Native and React Query, I ensured seamless integration of features and responsiveness across various mobile devices, contributing to a user-friendly interface for financial task management.",
    imageUrl: "https://i.ibb.co.com/4PfBr8Z/Arta.png",
    liveUrl: "https://play.google.com/store/apps/details?id=com.publika.arta",
  },
  {
    title: "Abi Rafda Dashboard Admin",
    description:
      "As a Front-End Developer, I helped develop an admin dashboard using React.js and React Query. My role involved ensuring seamless feature integration and responsiveness across devices, aiming to simplify task management with a user-friendly interface.",
    imageUrl: "https://i.ibb.co.com/6NmrwgK/abirafda.png",
    liveUrl: "https://abirafda.vercel.app/",
  },
  {
    title: "E-commerce Web - Harisenin.com",
    description:
      "As a Front-End Developer, I developed an ecommerce website using HTML, CSS, React.js, and JavaScript. I contributed to the successful implementation of key features, enhancing the website's functionality.",
    imageUrl: "https://i.ibb.co.com/0ntkJh9/front-End-Clonning-Kyouid.png",
    githubUrl: "https://github.com/nevgard/react-kyouid",
  },
  {
    title: "Personal Web - Harisenin.com",
    description:
      "As a Full Stack Developer, I designed and created a personal portfolio website to effectively showcase my skills and accomplishments. I implemented responsive web design principles to ensure optimal user experience across various devices and screen sizes.",
    imageUrl: "https://i.ibb.co.com/mz270cd/portfolio-JS.png",
    githubUrl: "https://nevgard.github.io/harisenin-portfolio-javascript",
  },
  {
    title: "Landing Page Web - Fierci.id",
    description:
      "As a Front-End Developer, I developed a landing page website for a fashion store using JavaScript, HTML, and Tailwind CSS. The goal was to create a simpler, more attractive website to draw in visitors.",
    imageUrl: "https://i.ibb.co.com/17kM2Xm/fierci.png",
    liveUrl: "https://nevgard.github.io/fierci.id/",
    githubUrl: "https://github.com/nevgard/fierci.id",
  },
  {
    title: "Company Profile Web - Batik Cakra Budaya",
    description:
      "As a Full-Stack Developer, I created a dynamic company profile website using Bootstrap, JavaScript, PHP, and MySQL. This project included developing user and admin dashboard pages for managing the website.",
    imageUrl: "https://i.ibb.co.com/Wn8FmWG/cakrabudaya.png",
    githubUrl: "https://github.com/nevgard/batikcakrabudaya",
  },
];
const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1 * index,
    },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className=" md:h-full mb-12 md:ml-[780px] md:pl-24 mt-12 md:mt-0">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "all" }}
      >
        <div className="text-center md:text-start">
          <h1 className="head1">FEATURED</h1>
          <h1 className="head1 text-neutral-700 -mt-16"> PROJECTS</h1>
        </div>
      </motion.div>
      <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-8 px-6 md:px-0 md:pr-6 mt-6">
        {projects.map((project, index) => (
          <motion.div
            variants={fadeInAnimation}
            custom={index}
            initial="initial"
            key={index}
            whileInView="animate"
            viewport={{ once: "true", amount: "some" }}
          >
            <div className="card bg-primary p-6 rounded-3xl flex flex-col justify-between">
              <h3 className="text-2xl font-semibold text-gray-200 mb-4">
                {project.title}
              </h3>
              <img
                src={project.imageUrl}
                alt="Project"
                className="mb-4 aspect-video object-cover object-top rounded-xl"
                height="400px"
                width="100%"
              />
              <p className="text-sm text-gray-200">{project.description}</p>
              <div className=" mt-4">
                {project.githubUrl && (
                  <div className="buttonCard group w-fit rounded-xl bg-[#141517] px-4 py-2 flex justify-between items-center gap-x-3 hover:text-lime-400 transition-all ease-in-out">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group-hover:text-lime-400 transition-all ease-in-out "
                    >
                      View GitHub
                    </a>
                    <FaGithub />
                  </div>
                )}
                {project.liveUrl && (
                  <div className="buttonCard group w-fit rounded-xl bg-[#141517] px-4 py-2 flex justify-between items-center gap-x-3 mt-3 hover:text-lime-400 transition-all ease-in-out">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm group-hover:text-lime-400 transition-all ease-in-out"
                    >
                      View Live
                    </a>
                    <FaGlobe className="ml-2" />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
