import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BulkMail from "../assets/images/Bulk Mail.png";
import Netflix from "../assets/images/Netflix.png";
import Weather from "../assets/images/Weather.png";
import TaskManagement from "../assets/images/Task Management.png";
import Nostra from "../assets/images/Nostra.png";
import Apple from "../assets/images/Apple.png";

const projects = [
  {
    image: BulkMail,
    alt: "Bulk Mail Sender",
    title: "Bulk Mail Sender",
    description: "A full-stack Bulk Email Sending Application that enables users to send emails to multiple recipients efficiently by uploading an Excel file.",
    tech: ["React.js", "Vite", "Node.js", "Express.js", "MongoDB", "Nodemailer"],
    github: "https://github.com/harish-b-4/bulkmail",
    live: "https://bulkmail-beige.vercel.app/",
  },
  {
    image: Netflix,
    alt: "Netflix Login Page",
    title: "Netflix Login Page",
    description: "A Netflix-inspired login system with separate frontend and backend architecture, focusing on authentication flow and clean UI design.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Node.js", "Express.js"],
    github: "https://github.com/harish-b-4/netflix-login",
    live: "https://netflix-login-alpha.vercel.app/",
  },
  {
    image: Weather,
    alt: "Weather App",
    title: "Weather App",
    description: "A responsive and interactive weather application that fetches real-time weather information for any city using a public API.",
    tech: ["React.js", "Vite", "Tailwind CSS", "Weather API"],
    github: "https://github.com/harish-b-4/weather-app",
    live: "https://weather-app-seven-murex-ndx4x27tc8.vercel.app/",
  },
  {
    image: TaskManagement,
    alt: "Task Management",
    title: "Task Management",
    description: "A simple and responsive Task Management app that allows users to create, view, update, and delete tasks with a clean and intuitive interface.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/harish-b-4/task-management-app",
    live: "https://task-management-app-plum-kappa.vercel.app/",
  },
  {
    image: Nostra,
    alt: "Nostra E-Commerce",
    title: "Nostra E-Commerce",
    description: "A responsive and modern front-end e-commerce web app where users can browse products, filter collections, and interact with a clean, intuitive UI.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/harish-b-4/nostra-e-commerce",
    live: "https://harish-b-4.github.io/nostra-e-commerce/",
  },
  {
    image: Apple,
    alt: "Apple UI Clone",
    title: "Apple UI Clone",
    description: "A visually accurate Apple website clone replicating the layout, styling, and responsive design of official Apple product landing pages.",
    tech: ["React.js", "Vite", "Tailwind CSS"],
    github: "https://github.com/harish-b-4/Apple-clone-react-vite",
    live: "https://apple-clone-react-vite.vercel.app/",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: (i % 3) * 0.15 },
  }),
};

const Project = () => {
  return (
    <div>
      <section
        id="projects"
        className="px-4 py-24 bg-transparent text-white relative overflow-hidden -mb-[1px]"
      >
        {/* Glow Effects */}
        <div className="hidden lg:block">
          <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        </div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Label */}
          <motion.div
            className="flex justify-center mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0}
            viewport={{ once: "true" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              What I've Built
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: "true" }}
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400">
              Projects
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="w-16 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: "true" }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-center text-gray-300 mb-16 text-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: "true" }}
          >
            Some of the projects I have built during my learning journey
          </motion.p>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={i}
                viewport={{ once: "true", amount: 0.15 }}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-linear-to-r from-black/70 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">

                    <a href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                    >
                      <FaGithub className="text-base" /> GitHub
                    </a>

                    <a href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-linear-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default Project;