import Education from "./Education";
import profileimg from "../assets/images/Profile Img.png";

const About = () => {
  return (
    <div className="bg-[#020617]">
      <section
        id="about"
        className="pt-16 bg-gradient-to-br from-black via-purple-900 to-indigo-900 overflow-hidden relative"
      >

        {/* Glow Effects */}
        <div className="absolute top-20 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[300px] h-[300px] bg-purple-500/15 rounded-full blur-3xl animate-pulse"></div>

        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16 px-6 relative z-10">

          {/* Profile Image */}
          <div className="flex-1 flex justify-between">
            <div className="relative group">

              {/* Spinning Gradient Ring */}
              <div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-400 opacity-70 blur-sm group-hover:opacity-100 transition duration-500 animate-spin"
                style={{ animationDuration: "7s" }}
              ></div>

              {/* Inner Ring */}
              <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-40"></div>

              <img
                src={profileimg}
                alt="Harish"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-black shadow-2xl shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-500"
              />

            </div>
          </div>

          {/* About Info Card */}
          <div className="flex-1 mt-8 md:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/5 hover:shadow-cyan-500/60 hover:border-cyan-500/20 transition-all duration-500">
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                Get To Know Me
              </div>

              <h2 className="text-4xl font-extrabold mb-4 leading-tight">
                <span className="text-white">About </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Me</span>
              </h2>

              {/* Divider */}
              <div className="w-12 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mb-6 rounded-full"></div>

              <p className="text-gray-400 mb-5 leading-7 text-sm md:text-base">
                I have completed my{" "}
                <strong className="text-cyan-300 font-semibold">B.Sc. Computer Science</strong> at{" "}
                <strong className="text-cyan-300 font-semibold">G.T.N. Arts College, Dindigul</strong>,
                graduating in 2024. Currently, I am a{" "}
                <strong className="text-cyan-300 font-semibold">MERN Full Stack Developer</strong> with
                hands-on experience in{" "}
                <strong className="text-cyan-300 font-semibold">
                  React.js, Tailwind CSS, Node.js, Express, MongoDB, and Firebase
                </strong>.
              </p>

              <p className="text-gray-300 mb-5 leading-7 text-sm md:text-base">
                I specialize in creating{" "}
                <strong className="text-white font-semibold">intuitive and responsive user interfaces</strong>,
                ensuring seamless navigation and optimal performance across devices. With strong expertise in{" "}
                <strong className="text-white font-semibold">frontend development</strong>, I enjoy crafting
                dynamic and visually appealing web applications.
              </p>

              <p className="text-gray-300 mb-6 leading-7 text-sm md:text-base">
                I successfully completed the{" "}
                <strong className="text-white font-semibold">MERN Full Stack course at Error Makes Clever Academy</strong>,
                which strengthened my skills in building full-stack web projects and enhanced my
                problem-solving abilities in real-world development scenarios.
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-2">
                {["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Firebase"].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400/20 transition-colors duration-200 cursor-pointer"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          </div>

        </div>

        {/* Education */}
        <Education />

      </section>
    </div>
  );
};

export default About;