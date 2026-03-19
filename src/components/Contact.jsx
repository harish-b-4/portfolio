import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="px-4 py-24 bg-gradient-to-br from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden -mb-[1px]"
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
              Get In Touch
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Me
            </span>
          </h2>

          {/* Divider */}
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"></div>

          <p className="text-center text-gray-300 mb-16 text-sm">
            Feel free to reach out for collaborations or opportunities
          </p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* ── Left Info Panel ── */}
            <div className="flex flex-col gap-6">

              {/* Info Card */}
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 flex flex-col gap-6">

                {/* Email */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 text-lg group-hover:bg-cyan-400/20 transition-colors duration-300">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs uppercase tracking-widest mb-0.5">Email</p>
                    
                    <a  href="mailto:harishb.developer@gmail.com"
                      className="text-white text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
                    >
                      harishb.developer@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-teal-400/10 border border-teal-400/20 text-teal-400 text-lg group-hover:bg-teal-400/20 transition-colors duration-300">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs uppercase tracking-widest mb-0.5">Phone</p>
                    
                    <a  href="tel:+919150517706"
                      className="text-white text-sm font-medium hover:text-teal-400 transition-colors duration-300"
                    >
                      +91 91505 17706
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-indigo-400/10 border border-indigo-400/20 text-indigo-400 text-lg group-hover:bg-indigo-400/20 transition-colors duration-300">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs uppercase tracking-widest mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">Dindigul, Tamil Nadu, India</p>
                  </div>
                </div>

              </div>

              {/* Social Links */}
              <div className="bg-black/30 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/5">
                <p className="text-xs text-gray-300 uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">

                  
                  <a  href="https://github.com/harish-b-4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xl hover:bg-white/10 hover:text-white hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaGithub />
                  </a>

                  
                   <a href="https://www.linkedin.com/in/harish-mern-stack-react/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xl hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaLinkedin />
                  </a>

                  
                  <a  href="https://wa.me/9150517706?text=Hi%20Harish,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xl hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/40 hover:-translate-y-1 transition-all duration-300"
                  >
                    <FaWhatsapp />
                  </a>

                </div>
              </div>

            </div>

            {/* ── Right Form ── */}
            <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-cyan-500/20 transition-all duration-500">

              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-gray-300 mb-6">I'll get back to you as soon as possible.</p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent mb-6"></div>

              <form className="space-y-5">

                {/* Name */}
                <div>
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300 resize-none"
                  ></textarea>
                </div>

                {/* Submit */}
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black py-3 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                >
                  Send Message →
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;