import React from "react";
import {FaUserGraduate} from "react-icons/fa";


const Education = () => {
  return (
    <section id="education" className="px-4 bg-gradient-to-tr from-[#111827] via-slate-900 to-[#020617] text-white">

      <div className="max-w-6xl mx-auto pt-12 pb-6">

        {/* Heading */}
        <h3 className="text-4xl font-bold text-center mb-2">
          My <span className="text-cyan-400">Education</span>
        </h3>

        <p className="text-center text-gray-400 mb-10">
          My educational details are as follows.
        </p>

        {/* Education Card 1 */}
        <div className="bg-gray-800/70 backdrop-blur-md rounded-3xl p-6 shadow-xl mb-6 hover:shadow-cyan-500 transition-shadow duration-500">
          <div className="flex items-center gap-4 mb-4">

            <FaUserGraduate className="text-cyan-400 text-5xl"/>

            <h4 className="text-xl font-semibold text-cyan-400">
              Bachelor of Computer Science
            </h4>

          </div>

          <p className="text-gray-300 mb-1">G.T.N. Arts College</p>
          <p className="text-gray-300 mb-1">CGPA: 6.78</p>
          <p className="text-gray-400 mb-4">[2021 - 2024]</p>
          <p className="text-gray-300">
            I completed my U.G at G.T.N. Arts College, Dindigul. I have
            hands-on experience with React.js, Tailwind CSS, Node.js, Express,
            MongoDB and Firebase.
          </p>

        </div>


      </div>

    </section>
  );
};

export default Education;
