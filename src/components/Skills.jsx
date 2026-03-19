import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub, } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVite, } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-4 text-white bg-gradient-to-bl from-black via-purple-900 to-indigo-900 overflow-hidden"
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
            What I Work With
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Skills
          </span>
        </h2>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"></div>

        <p className="text-center text-gray-300 mb-16 text-sm">
          Technologies I use as a MERN Full Stack Developer
        </p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* ── Frontend Card ── */}
          <div className="group rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/70 transition-all duration-500">

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-lg">
                🎨
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Frontend</h3>
                <p className="text-xs font-semibold text-gray-300">UI Development</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent mb-6"></div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-orange-400/10 border border-orange-500/20 hover:scale-105 transition-transform duration-300">
                <FaHtml5 className="text-3xl text-orange-500" />
                <span className="text-xs font-medium text-gray-300">HTML5</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-blue-400/10 border border-blue-400/20 hover:scale-105 transition-transform duration-300">
                <FaCss3Alt className="text-3xl text-blue-400" />
                <span className="text-xs font-medium text-gray-300">CSS3</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/20 hover:scale-105 transition-transform duration-300">
                <FaJsSquare className="text-3xl text-yellow-400" />
                <span className="text-xs font-medium text-gray-300">JavaScript</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-cyan-400/10 border border-cyan-400/20 hover:scale-105 transition-transform duration-300">
                <FaReact className="text-3xl text-cyan-400" />
                <span className="text-xs font-medium text-gray-300">React</span>
              </div>

              <div className="col-span-2 flex flex-col items-center gap-2 p-4 rounded-xl bg-teal-400/10 border border-teal-400/20 hover:scale-105 transition-transform duration-300">
                <SiTailwindcss className="text-3xl text-teal-400" />
                <span className="text-xs font-medium text-gray-300">Tailwind CSS</span>
              </div>

            </div>
          </div>

          {/* ── Backend Card ── */}
          <div className="group rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/80 transition-all duration-500">

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-indigo-400/10 border border-indigo-400/20 text-lg">
                ⚙️
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Backend</h3>
                <p className="text-xs font-semibold text-gray-300">Server & Database</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-indigo-400/20 to-transparent mb-6"></div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-green-500/10 border border-green-500/20 hover:scale-105 transition-transform duration-300">
                <FaNodeJs className="text-3xl text-green-500" />
                <span className="text-xs font-medium text-gray-300">Node.js</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-300/10 border border-gray-300/20 hover:scale-105 transition-transform duration-300">
                <SiExpress className="text-3xl text-gray-300" />
                <span className="text-xs font-medium text-gray-300">Express.js</span>
              </div>

              <div className="col-span-2 flex flex-col items-center gap-2 p-4 rounded-xl bg-green-400/10 border border-green-400/20 hover:scale-105 transition-transform duration-300">
                <SiMongodb className="text-3xl text-green-400" />
                <span className="text-xs font-medium text-gray-300">MongoDB</span>
              </div>

            </div>
          </div>

          {/* ── Tools Card ── */}
          <div className="group rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 hover:shadow-xl hover:shadow-purple-500/90 transition-all duration-500 sm:col-span-2 lg:col-span-1">

            {/* Card Header */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-400/10 border border-purple-400/20 text-lg">
                🛠️
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Tools</h3>
                <p className="text-xs font-semibold text-gray-300">Dev Workflow</p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-purple-400/20 to-transparent mb-6"></div>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-3">

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20 hover:scale-105 transition-transform duration-300">
                <FaGitAlt className="text-3xl text-red-500" />
                <span className="text-xs font-medium text-gray-300">Git</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/10 border border-white/20 hover:scale-105 transition-transform duration-300">
                <FaGithub className="text-3xl text-black" />
                <span className="text-xs font-medium text-gray-300">GitHub</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-orange-400/10 border border-orange-400/20 hover:scale-105 transition-transform duration-300">
                <SiPostman className="text-3xl text-orange-400" />
                <span className="text-xs font-medium text-gray-300">Postman</span>
              </div>

              <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-purple-400/10 border border-purple-400/20 hover:scale-105 transition-transform duration-300">
                <SiVite className="text-3xl text-purple-400" />
                <span className="text-xs font-medium text-gray-300">Vite</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;