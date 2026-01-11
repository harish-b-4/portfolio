import React from "react";
import profileimg from "../assets/images/Profile Img.png";
import Type from "./Type";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const Hero = () => {

  const navigate = useNavigate()



  return (
    <section className="relative min-h-screen pt-24 py-10 flex md:flex-row flex-col items-center
    bg-gradient-to-br from-[#020617] via-slate-900 to-[#111827] overflow-hidden">


      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-teal-400/10 rounded-full blur-3xl"></div>



      {/* Image */}
      <div className="flex-1 flex justify-center z-10">
        <img src={profileimg} alt="Harish" className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-xl" />
      </div>




      {/* Content */}
      <div className="flex-1 text-center md:text-left z-10 mt-10 md:mt-0">

        <p className="text-lg uppercase tracking-widest text-gray-400">
          MERN Stack Developer
        </p>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-3">
          Hi, I'm <span className="text-cyan-400">Harish</span>
        </h1>

        <h2 className="text-lg md:text-2xl mt-4 text-gray-400 font-medium">
          <Type />
        </h2>

        <button onClick={() => navigate("/contact")}
          className="mt-8 bg-cyan-400 text-black px-8 py-3 text-sm font-medium rounded-full transition-colors duration-300 hover:bg-white">
          Connect With Me
        </button>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 mt-10 text-2xl">

          <a href="https://github.com/harish-b-4" target="_blank" className="text-gray-500 hover:text-cyan-400 transition-all hover:-translate-y-1">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/harish-mern-stack-react/" target="_blank" className="text-gray-500 hover:text-[#0A66C2] transition-all hover:-translate-y-1">
            <FaLinkedin />
          </a>

          <a
            href="https://wa.me/9150517706?text=Hi%20Harish,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-green-500 transition-all hover:-translate-y-1"
          >
            <FaWhatsapp />
          </a>


        </div>

      </div>

    </section>

  );
};

export default Hero;
