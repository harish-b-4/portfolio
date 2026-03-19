import profileimg from "../assets/images/Profile Img.png";
import Type from "./Type";
import { FaGithub, FaLinkedin, FaWhatsapp, FaArrowDown } from "react-icons/fa";

const Hero = () => {

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 py-10 flex md:flex-row flex-col items-center bg-gradient-to-tr from-black via-purple-900 to-indigo-900 overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-cyan-400/15 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-indigo-400/10 rounded-full blur-2xl"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center z-10">
        <div className="relative group">

          {/* Spinning Gradient Ring */}
          <div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-400 opacity-75 blur-sm group-hover:opacity-100 transition duration-500 animate-spin"
            style={{ animationDuration: "6s" }}
          ></div>

          {/* Inner Ring */}
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-50"></div>

          {/* Image */}
          <img
            src={profileimg}
            alt="Harish"
            className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-black shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-500"
          />

          {/* Available Badge */}
          <span className="absolute bottom-4 right-4 flex items-center gap-1.5 bg-black/70 backdrop-blur-sm text-cyan-400 text-xs font-semibold px-3 py-1.5 rounded-full border border-cyan-400/30">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse inline-block"></span>
            Available
          </span>

        </div>
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center md:text-left z-10 mt-12 md:mt-0 px-4">

        {/* Role Badge */}
        <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-5">
          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
          MERN Stack Developer
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mt-2 leading-tight tracking-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Harish
          </span>
        </h1>

        {/* Typewriter */}
        <h2 className="text-lg md:text-2xl mt-4 text-gray-300 font-medium">
          <Type />
        </h2>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mt-6 md:mx-0 mx-auto rounded-full"></div>

        {/* Tagline */}
        <p className="mt-4 text-sm text-gray-300 max-w-sm md:mx-0 mx-auto leading-relaxed">
         Passionate about building responsive and user-friendly web applications 
          using modern technologies like React.js, Node.js, Express.js and MongoDB.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black px-8 py-3 text-sm font-bold rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/60 hover:scale-105 transition-all duration-300"
          >
            Connect With Me
            <span>→</span>
          </button>


          {/* Resume Download Button */}

          <a href="/Resume.pdf" download="Resume.pdf" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 text-sm font-semibold rounded-full hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300" >

            <FaArrowDown />
            Download Resume

          </a>


        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mt-10">


          <a href="https://github.com/harish-b-4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-2xl  hover:text-black/60 hover:border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
          >
            <FaGithub />
          </a>


          <a href="https://www.linkedin.com/in/harish-mern-stack-react/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-2xl hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0A66C2]/20 transition-all duration-300"
          >
            <FaLinkedin />
          </a>


          <a href="https://wa.me/9150517706?text=Hi%20Harish,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-2xl  hover:text-[#25D366] hover:border-[#25D366]/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#25D366]/20 transition-all duration-300"
          >
            <FaWhatsapp />
          </a>

        </div>

      </div>

    </section>
  );
};

export default Hero;