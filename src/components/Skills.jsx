import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiPostman, SiVite } from "react-icons/si";

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
    transition: { duration: 0.6, ease: "easeOut", delay: i * 0.15 },
  }),
};

const pillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.35, ease: "easeOut", delay: i * 0.07 },
  }),
};

const skills = {
  frontend: [
    { icon: <FaHtml5 className="text-3xl text-orange-500" />, label: "HTML5", bg: "bg-orange-400/10", border: "border-orange-500/20" },
    { icon: <FaCss3Alt className="text-3xl text-blue-400" />, label: "CSS3", bg: "bg-blue-400/10", border: "border-blue-400/20" },
    { icon: <FaJsSquare className="text-3xl text-yellow-400" />, label: "JavaScript", bg: "bg-yellow-400/10", border: "border-yellow-400/20" },
    { icon: <FaReact className="text-3xl text-cyan-400" />, label: "React", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
    { icon: <SiTailwindcss className="text-3xl text-teal-400" />, label: "Tailwind CSS", bg: "bg-teal-400/10", border: "border-teal-400/20", span: true },
  ],
  backend: [
    { icon: <FaNodeJs className="text-3xl text-green-500" />, label: "Node.js", bg: "bg-green-500/10", border: "border-green-500/20" },
    { icon: <SiExpress className="text-3xl text-gray-300" />, label: "Express.js", bg: "bg-gray-300/10", border: "border-gray-300/20" },
    { icon: <SiMongodb className="text-3xl text-green-400" />, label: "MongoDB", bg: "bg-green-400/10", border: "border-green-400/20", span: true },
  ],
  tools: [
    { icon: <FaGitAlt className="text-3xl text-red-500" />, label: "Git", bg: "bg-red-500/10", border: "border-red-500/20" },
    { icon: <FaGithub className="text-3xl text-black" />, label: "GitHub", bg: "bg-white/10", border: "border-white/20" },
    { icon: <SiPostman className="text-3xl text-orange-400" />, label: "Postman", bg: "bg-orange-400/10", border: "border-orange-400/20" },
    { icon: <SiVite className="text-3xl text-purple-400" />, label: "Vite", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  ],
};

const cards = [
  {
    emoji: "🎨",
    title: "Frontend",
    subtitle: "UI Development",
    iconBg: "bg-cyan-400/10",
    iconBorder: "border-cyan-400/20",
    divider: "from-cyan-400/20",
    hover: "hover:border-cyan-500/30 hover:shadow-cyan-500/70",
    items: skills.frontend,
  },
  {
    emoji: "⚙️",
    title: "Backend",
    subtitle: "Server & Database",
    iconBg: "bg-indigo-400/10",
    iconBorder: "border-indigo-400/20",
    divider: "from-indigo-400/20",
    hover: "hover:border-indigo-500/30 hover:shadow-indigo-500/80",
    items: skills.backend,
  },
  {
    emoji: "🛠️",
    title: "Tools",
    subtitle: "Dev Workflow",
    iconBg: "bg-purple-400/10",
    iconBorder: "border-purple-400/20",
    divider: "from-purple-400/20",
    hover: "hover:border-purple-500/30 hover:shadow-purple-500/90 sm:col-span-2 lg:col-span-1",
    items: skills.tools,
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 px-4 text-white bg-transparent overflow-hidden"
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
          viewport={{ once: "true", }}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            What I Work With
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.1}
          viewport={{ once: "true", }}
        >
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-indigo-400">
            Skills
          </span>
        </motion.h2>

        {/* Divider */}
        <motion.div
          className="w-16 h-0.5 bg-linear-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.15}
          viewport={{ once: "true", }}
        />

        {/* Subtitle */}
        <motion.p
          className="text-center text-gray-300 mb-16 text-sm"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          custom={0.2}
          viewport={{ once: "true", }}
        >
          Technologies I use as a MERN Full Stack Developer
        </motion.p>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, cardIndex) => (
            <motion.div
              key={card.title}
              className={`group rounded-2xl p-6 bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-xl transition-all duration-500 ${card.hover}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={cardIndex}
              viewport={{ once: "true", amount: 0.2 }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 flex items-center justify-center rounded-xl ${card.iconBg} border ${card.iconBorder} text-lg`}>
                  {card.emoji}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{card.title}</h3>
                  <p className="text-xs font-semibold text-gray-300">{card.subtitle}</p>
                </div>
              </div>

              {/* Divider */}
              <div className={`w-full h-[1px] bg-linear-to-r ${card.divider} to-transparent mb-6`}></div>

              {/* Skills Pills */}
              <motion.div
                className="grid grid-cols-2 gap-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: "true", }}
                variants={{ visible: { transition: { staggerChildren: 0.07, delayChildren: cardIndex * 0.15 + 0.3 } } }}
              >
                {card.items.map((item, i) => (
                  <motion.div
                    key={item.label}
                    variants={pillVariants}
                    custom={i}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl ${item.bg} border ${item.border} hover:scale-105 transition-transform duration-300 ${item.span ? "col-span-2" : ""}`}
                  >
                    {item.icon}
                    <span className="text-xs font-medium text-gray-300">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;