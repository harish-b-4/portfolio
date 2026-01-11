import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer";
import BulkMail from "../assets/images/Bulk Mail.png";
import Netflix from "../assets/images/Netflix.png";
import Weather from "../assets/images/Weather.png";
import TaskManagement from "../assets/images/Task Management.png";
import Nostra from "../assets/images/Nostra.png";
import Apple from "../assets/images/Apple.png";



const Project = () => {
  return (
    <div>

      <Navbar />

      <section className="px-4 py-20 bg-gradient-to-b from-[#020617] via-slate-900 to-[#111827] text-white">

        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-3">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="text-center text-gray-300 mb-14">
            Some of the projects I have built during my learning journey
          </p>


          {/* Projects Grid */}
          <div className="grid gap-10 grid-cols-1 lg:grid-cols-3">


            {/* Project 1 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-teal-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={BulkMail} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-teal-400 mb-2">Bulk Mail Sender</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                A full-stack Bulk Email Sending Application that enables users to send emails to multiple recipients efficiently by uploading an Excel file.
                Built with a focus on usability, performance, and real-world backend integration.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-teal-400 font-medium">Tech Stack :</span> React.js | Vite | Tailwind CSS | Node.js | Express.js | MongoDB | Nodemailer
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/bulkmail" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300">
                  GitHub
                </a>

                <a href="https://bulkmail-beige.vercel.app/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300">
                  Live Demo
                </a>

              </div>

            </div>



            {/* Project 2 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={Netflix} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Netflix Login Page</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                Developed a Netflix-inspired login system with a separate frontend and backend architecture, focusing on authentication flow and clean UI design.
                The application replicates the look and feel of Netflix’s login experience while implementing secure user authentication on the backend.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-cyan-400 font-medium">Tech Stack :</span> React.js | Vite | Tailwind CSS | Node.js | Express.js
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/netflix-login" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300" >
                  GitHub
                </a>

                <a href="https://netflix-login-alpha.vercel.app/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300" >
                  Live Demo
                </a>

              </div>

            </div>



            {/* Project 3 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-teal-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={Weather} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-teal-400 mb-2">Weather App</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                A responsive and interactive weather application that allows users to fetch and view real-time weather information for any city using a public API.
                Built with modern frontend technologies, this project showcases API integration, dynamic UI updates, and responsive design.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-teal-400 font-medium">Tech Stack :</span> React.js | Vite | Tailwind CSS | Public Weather API
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/weather-app" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300">
                  GitHub
                </a>

                <a href="https://weather-app-seven-murex-ndx4x27tc8.vercel.app/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300">
                  Live Demo
                </a>

              </div>

            </div>



            {/* Project 4 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={TaskManagement} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Task Management</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                A simple and responsive Task Management Application that allows users to easily create, view, update, and delete tasks using a clean and intuitive interface.
                This project demonstrates core frontend skills like state management, CRUD operations, and responsive design.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-cyan-400 font-medium">Tech Stack :</span> React.js | Vite | Tailwind CSS
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/task-management-app" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300" >
                  GitHub
                </a>

                <a href="https://task-management-app-plum-kappa.vercel.app/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300" >
                  Live Demo
                </a>

              </div>

            </div>



            {/* Project 5 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-teal-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={Nostra} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-teal-400 mb-2">Nostra e-commerce</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                A responsive and modern front-end e-commerce web app built with HTML, CSS, and JavaScript.
                Users can browse products, filter collections, and interact with a clean, intuitive UI across devices.
                Demonstrates strong front-end fundamentals, responsive design, and dynamic interactivity.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-teal-400 font-medium">Tech Stack :</span> HTML5 | CSS3 | JavaScript
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/nostra-e-commerce" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300">
                  GitHub
                </a>

                <a href="https://harish-b-4.github.io/nostra-e-commerce/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300">
                  Live Demo
                </a>

              </div>

            </div>



            {/* Project 6 */}
            <div className="bg-black/40 rounded-2xl p-6 shadow-2xl hover:shadow-cyan-500 transition duration-300">

              <div className="h-40 bg-gray-800 rounded-xl mb-4 flex items-center justify-center text-gray-500">
                <img src={Apple} alt="BulkMail Img" className="w-full h-full rounded-xl" />
              </div>

              <h3 className="text-xl font-semibold text-cyan-400 mb-2">Apple UI Clone</h3>

              <p className="text-gray-300 text-sm font-medium mb-4">
                A visually accurate Apple website clone built to replicate the layout, styling, and responsive design of the official Apple product landing pages. 
                This project focuses on frontend development skills, particularly layout structuring, responsive design, and component-based architecture using modern tooling.
              </p>

              <p className="text-sm text-gray-300 mb-4">
                <span className="text-cyan-400 font-medium">Tech Stack :</span> React.js | Vite | Tailwind CSS
              </p>

              <div className="flex gap-4">

                <a href="https://github.com/harish-b-4/Apple-clone-react-vite" target="_blank" className="px-4 py-2 text-sm rounded-md bg-cyan-400 text-[#020617] font-semibold hover:bg-white transition duration-300" >
                  GitHub
                </a>

                <a href="https://apple-clone-react-vite.vercel.app/" target="_blank" className="px-4 py-2 text-sm rounded-md border border-cyan-400 text-cyan-400 hover:bg-white hover:text-[#020617] transition duration-300" >
                  Live Demo
                </a>

              </div>

            </div>

            {/* Copy this card to add more projects */}




          </div>

        </div>

      </section>

      <Footer />

    </div>

  );
};

export default Project;
