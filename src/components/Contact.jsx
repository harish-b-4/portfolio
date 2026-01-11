import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div>

      <Navbar />

      <section id="contact"
        className="px-4 py-20 bg-gradient-to-b from-[#020617] via-slate-900 to-[#111827] text-white">

        <div className="max-w-6xl mx-auto mt-5">


          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-3">Contact <span className="text-cyan-400">Me</span></h2>

          <p className="text-center text-gray-400 mb-14">Feel free to reach out for collaborations or opportunities</p>


          <div className="grid md:grid-cols-2 gap-12">

            {/* Left Info */}
            <div className="space-y-8">


              {/* Email */}
              <div className="flex items-center gap-4">

                <div className="p-4 rounded-full bg-cyan-400/10 text-cyan-400 text-xl">
                  <FaEnvelope />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">harishb.developer@gmail.com</p>
                </div>
                
              </div>


              {/* Phone */}
              <div className="flex items-center gap-4">

                <div className="p-4 rounded-full bg-teal-400/10 text-teal-400 text-xl">
                  <FaPhoneAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-white">+91 91505 17706</p>
                </div>

              </div>


              {/* Location */}
              <div className="flex items-center gap-4">

                <div className="p-4 rounded-full bg-cyan-400/10 text-cyan-400 text-xl">
                  <FaMapMarkerAlt />
                </div>

                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <p className="text-white">Dindigul, Tamil Nadu, India</p>
                </div>

              </div>

            </div>

            {/* Right Form */}
            <div className="bg-black/40 rounded-2xl p-8 shadow-xl">

              <form className="space-y-6">

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-1">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-md outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="w-full bg-cyan-400 text-[#020617] py-3 rounded-md font-semibold hover:bg-white duration-300 transition"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Contact;
