import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BulkMail from "../assets/images/Bulk Mail.png";
import Netflix from "../assets/images/Netflix.png";
import Weather from "../assets/images/Weather.png";
import TaskManagement from "../assets/images/Task Management.png";
import Nostra from "../assets/images/Nostra.png";
import Apple from "../assets/images/Apple.png";

const Project = () => {
  return (
    <div>
      <section
        id="projects"
        className="px-4 py-24 bg-gradient-to-tr from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden -mb-[1px]"
      >

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">

          {/* Section Label */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              What I've Built
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Projects
            </span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"></div>

          <p className="text-center text-gray-300 mb-16 text-sm">
            Some of the projects I have built during my learning journey
          </p>

          {/* Projects Grid */}
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

            {/* ── Project 1 — Bulk Mail Sender ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={BulkMail}
                  alt="Bulk Mail Sender"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Bulk Mail Sender
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A full-stack Bulk Email Sending Application that enables users to send emails to multiple recipients efficiently by uploading an Excel file.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">React.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Node.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Express.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">MongoDB</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Nodemailer</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/bulkmail"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://bulkmail-beige.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* ── Project 2 — Netflix Login ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Netflix}
                  alt="Netflix Login Page"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Netflix Login Page
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A Netflix-inspired login system with separate frontend and backend architecture, focusing on authentication flow and clean UI design.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">React.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Vite</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Tailwind CSS</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Node.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Express.js</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/netflix-login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://netflix-login-alpha.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* ── Project 3 — Weather App ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Weather}
                  alt="Weather App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Weather App
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A responsive and interactive weather application that fetches real-time weather information for any city using a public API.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">React.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Vite</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Tailwind CSS</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Weather API</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://weather-app-seven-murex-ndx4x27tc8.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* ── Project 4 — Task Management ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={TaskManagement}
                  alt="Task Management"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Task Management
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A simple and responsive Task Management app that allows users to create, view, update, and delete tasks with a clean and intuitive interface.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">React.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Vite</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Tailwind CSS</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/task-management-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://task-management-app-plum-kappa.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* ── Project 5 — Nostra E-Commerce ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Nostra}
                  alt="Nostra E-Commerce"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Nostra E-Commerce
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A responsive and modern front-end e-commerce web app where users can browse products, filter collections, and interact with a clean, intuitive UI.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">HTML5</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">CSS3</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">JavaScript</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/nostra-e-commerce"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://harish-b-4.github.io/nostra-e-commerce/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

            {/* ── Project 6 — Apple UI Clone ── */}
            <div className="group flex flex-col bg-black/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500 overflow-hidden">

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={Apple}
                  alt="Apple UI Clone"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  Apple UI Clone
                </h3>

                <p className="text-gray-400 text-sm leading-6 mb-4 flex-1">
                  A visually accurate Apple website clone replicating the layout, styling, and responsive design of official Apple product landing pages.
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">React.js</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Vite</span>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400">Tailwind CSS</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">

                  <a href="https://github.com/harish-b-4/Apple-clone-react-vite"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                  >
                    <FaGithub className="text-base" /> GitHub
                  </a>

                  <a href="https://apple-clone-react-vite.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-cyan-400 to-indigo-500 text-black hover:opacity-90 hover:scale-105 transition-all duration-300"
                  >
                    <FaExternalLinkAlt className="text-xs" /> Live Demo
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;