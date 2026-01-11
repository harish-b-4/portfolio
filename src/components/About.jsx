import React from "react";
import Navbar from "./Navbar";
import Education from "./Education";
import Footer from "./Footer";
import profileimg from "../assets/images/Profile Img.png"; // replace with your image path
import { FaArrowDown } from "react-icons/fa"



const About = () => {

  return (
    <div className="bg-[#020617]">

      <Navbar />

      <section id="about" className="pt-16 px-4 bg-gradient-to-b from-[#020617] via-slate-900 to-[#111827]">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 py-16">


          {/* Profile Image */}
          <div className="flex-1 flex justify-center">

            <div className="relative">

              <img src={profileimg} alt="Harish" className="w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-xl" />


            </div>

          </div>




          {/* About Info Card */}
          <div className="flex-1">

            <div className="bg-gray-800/70 rounded-3xl p-8 shadow-2xl hover:shadow-cyan-500 transition-shadow duration-500">

              <h2 className="text-4xl font-bold mb-3 text-cyan-400">
                About <span className="text-teal-400">Me</span>
              </h2>

              <p className="text-gray-400 mb-6 text-pretty md:text-justify leading-7">
                I have completed my <strong>B.Sc.Computer Science</strong> at{" "}
                <strong>G.T.N. Arts College, Dindigul</strong>, graduating in 2024. Currently,
                I am a <strong>MERN Full Stack Developer</strong> with hands-on experience in{" "}
                <strong>
                  React.js, Tailwind CSS, Node.js, Express, MongoDB, and Firebase
                </strong>
                .
              </p>


              <p className="text-gray-300 mb-6 text-pretty md:text-justify leading-7">
                I specialize in creating <strong>intuitive and responsive user interfaces</strong>, ensuring seamless navigation and optimal performance across devices. With strong expertise in <strong>frontend development</strong>, I enjoy crafting dynamic and visually appealing web applications.
              </p>

              <p className="text-gray-300 mb-6 text-justify leading-7">
                I successfully completed the <strong>MERN Full Stack course at Error Makes Clever Academy</strong>, which strengthened my skills in building full-stack web projects and enhanced my problem-solving abilities in real-world development scenarios.
              </p>


              {/* Resume Download Button */}

              <a href="/Resume.pdf" download="Resume.pdf" className="bg-cyan-400 hover:bg-white text-[#020617] px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex w-fit items-center gap-2" >

                <FaArrowDown />
                Download Resume

              </a>


            </div>

          </div>

        </div>

        {/* Education */}
        <Education />


        {/* Footer */}
        <Footer />

      </section>

    </div>
  );
};

export default About;