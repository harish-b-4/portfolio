import { FaUserGraduate } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";

const Education = () => {
  return (
    <section
      id="education"
      className="px-4 bg-gradient-to-tl from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden"
    >

      {/* Glow Effects */}
      <div className="absolute top-10 left-10 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[250px] h-[250px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto pt-12 pb-16 relative z-10">

        {/* Section Label */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            My Journey
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
            Education
          </span>
        </h3>

        {/* Divider */}
        <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"></div>

        <p className="text-center text-gray-400 mb-12 text-sm">
          My educational background and qualifications.
        </p>

        {/* Single Card — centered, wide on large screens */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-indigo-900/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-white/5 hover:shadow-cyan-500 hover:border-cyan-500/20 transition-all duration-500 group">

            {/* Card Top Row */}
            <div className="flex flex-col sm:flex-row items-start gap-5 mb-6">

              {/* Icon Box */}
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-2xl bg-cyan-400/10 border border-cyan-400/20 group-hover:bg-cyan-400/20 transition-colors duration-300">
                <FaUserGraduate className="text-cyan-400 text-3xl" />
              </div>

              <div>
                <h4 className="text-xl md:text-2xl font-bold text-white leading-snug">
                  Bachelor of Computer Science
                </h4>
                <p className="text-cyan-400 text-sm font-medium mt-1">
                  G.T.N. Arts College, Dindigul
                </p>
              </div>

            </div>

            {/* Divider */}
            <div className="w-full h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent mb-6"></div>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-3 mb-6">

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <HiAcademicCap className="text-cyan-400 text-sm" />
                CGPA: 6.78
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300">
                📅 2021 – 2024
              </span>

              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                ✅ Completed
              </span>

            </div>

            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-8">
              Completed my undergraduate degree at{" "}
              <strong className="text-gray-200 font-semibold">
                G.T.N. Arts College, Dindigul
              </strong>
              . Gained hands-on experience with{" "}
              <strong className="text-cyan-300 font-semibold">
                React.js, Tailwind CSS, Node.js, Express, MongoDB
              </strong>{" "}
              and{" "}
              <strong className="text-cyan-300 font-semibold">Firebase</strong>
              .
            </p>

            {/* Bottom decorative line */}
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mt-8"></div>

            {/* Footer Row */}
            <div className="flex items-center justify-between mt-4">
              <p className="text-xs text-gray-300 uppercase tracking-widest">
                Undergraduate Degree
              </p>
              <p className="text-sm text-cyan-400 font-bold">
                B.Sc. Computer Science
              </p>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};

export default Education;