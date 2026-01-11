import React from "react";
import {FaHtml5,FaCss3Alt,FaJsSquare,FaReact,FaNodeJs,FaGitAlt, FaGithub,} from "react-icons/fa";
import {SiTailwindcss,SiExpress,SiMongodb,SiPostman,SiVite,} from "react-icons/si";

const skills = [
  {
    title: "Frontend",
    items: [
      { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-500" },
      { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-500" },
      { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
      { name: "GitHub", icon: <FaGithub />, color: "text-white" },
      { name: "Postman", icon: <SiPostman />, color: "text-orange-400" },
      { name: "Vite", icon: <SiVite />, color: "text-purple-400" },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-24 px-4 text-white bg-gradient-to-b from-[#020617] via-[#020617] to-slate-900">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">My <span className="text-cyan-400">Skills</span></h2>

        <p className="text-center text-gray-400 mb-16">Technologies I use as a MERN Full Stack Developer</p>

        {/* Skill Cards */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {skills.map((group, index) => (
            
            <div key={index} className="rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-cyan-400 shadow-xl transition-all duration-300">

              <h3 className="text-xl font-semibold text-cyan-300 mb-6 text-center">
                {group.title}
              </h3>

              <div className="grid grid-cols-2 gap-6">

                {group.items.map((skill, i) => (

                  <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[#020617]/60 hover:bg-white/10 transition-all duration-300">

                    <span className={`text-4xl ${skill.color}`}>
                      {skill.icon}
                    </span>

                    <span className="text-sm font-medium text-gray-300">
                      {skill.name}
                    </span>

                  </div>
                ))}
              </div>

            </div>

          ))}
        </div>

      </div>

    </section>
  );
};

export default Skills;
