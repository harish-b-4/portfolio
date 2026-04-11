import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay },
  }),
};

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    bg: "bg-cyan-400/10",
    border: "border-cyan-400/20",
    color: "text-cyan-400",
    hover: "group-hover:bg-cyan-400/20",
    content: (
      <a href="mailto:harishb.developer@gmail.com"
        className="text-white text-sm font-medium hover:text-cyan-400 transition-colors duration-300"
      >
        harishb.developer@gmail.com
      </a>
    ),
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    bg: "bg-teal-400/10",
    border: "border-teal-400/20",
    color: "text-teal-400",
    hover: "group-hover:bg-teal-400/20",
    content: (
      <a href="tel:+919150517706"
        className="text-white text-sm font-medium hover:text-teal-400 transition-colors duration-300"
      >
        +91 91505 17706
      </a>
    ),
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    bg: "bg-indigo-400/10",
    border: "border-indigo-400/20",
    color: "text-indigo-400",
    hover: "group-hover:bg-indigo-400/20",
    content: (
      <p className="text-white text-sm font-medium">Dindigul, Tamil Nadu, India</p>
    ),
  },
];

const socials = [
  {
    href: "https://github.com/harish-b-4",
    icon: <FaGithub />,
    className: "hover:bg-white/10 hover:text-white hover:border-white/30",
  },
  {
    href: "https://www.linkedin.com/in/harish-mern-stack-react/",
    icon: <FaLinkedin />,
    className: "hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] hover:border-[#0A66C2]/40",
  },
  {
    href: "https://wa.me/9150517706?text=Hi%20Harish,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
    icon: <FaWhatsapp />,
    className: "hover:bg-[#25D366]/20 hover:text-[#25D366] hover:border-[#25D366]/40",
  },
];

const Contact = () => {
  return (
    <div>
      <section
        id="contact"
        className="px-4 py-24 bg-transparent text-white relative overflow-hidden -mb-[1px]"
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
            viewport={{ once: false }}
          >
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 text-cyan-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
              Get In Touch
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold text-center mb-3 leading-tight"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.1}
            viewport={{ once: false }}
          >
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">
              Me
            </span>
          </motion.h2>

          {/* Divider */}
          <motion.div
            className="w-16 h-0.5 bg-gradient-to-r from-cyan-400 to-indigo-400 mx-auto rounded-full mb-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.15}
            viewport={{ once: false }}
          />

          {/* Subtitle */}
          <motion.p
            className="text-center text-gray-300 mb-16 text-sm"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={0.2}
            viewport={{ once: false }}
          >
            Feel free to reach out for collaborations or opportunities
          </motion.p>

          <div className="grid md:grid-cols-2 gap-10">

            {/* ── Left Info Panel — slides in from left ── */}
            <motion.div
              className="flex flex-col gap-6"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              {/* Info Card */}
              <div className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 flex flex-col gap-6">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 + i * 0.12 }}
                  >
                    <div className={`w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl ${item.bg} border ${item.border} ${item.color} text-lg ${item.hover} transition-colors duration-300`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-gray-300 text-xs uppercase tracking-widest mb-0.5">{item.label}</p>
                      {item.content}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                className="bg-black/30 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
              >
                <p className="text-xs text-gray-300 uppercase tracking-widest mb-4">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-300 text-xl hover:-translate-y-1 transition-all duration-300 ${social.className}`}
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.35, ease: "easeOut", delay: 0.75 + i * 0.1 }}
                      whileHover={{ y: -4 }}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right Form — slides in from right ── */}
            <motion.div
              className="bg-black/40 backdrop-blur-md rounded-2xl p-8 border border-white/5 hover:border-cyan-500/20 transition-all duration-500"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
            >
              <h3 className="text-lg font-bold text-white mb-1">Send a Message</h3>
              <p className="text-xs text-gray-300 mb-6">I'll get back to you as soon as possible.</p>

              {/* Divider */}
              <div className="w-full h-[1px] bg-gradient-to-r from-cyan-400/20 to-transparent mb-6"></div>

              <motion.form
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                variants={{
                  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.45 } },
                }}
              >
                {/* Name */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300"
                  />
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300"
                  />
                </motion.div>

                {/* Message */}
                <motion.div
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                >
                  <label className="block text-xs text-gray-200 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    rows="5"
                    placeholder="Write your message..."
                    className="w-full bg-white/5 border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 placeholder-gray-300 transition-all duration-300 resize-none"
                  ></textarea>
                </motion.div>

                {/* Submit */}
                <motion.button
                  type="button"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 to-indigo-500 text-black py-3 rounded-xl font-bold text-sm shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-95 transition-all duration-300"
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                >
                  Send Message →
                </motion.button>
              </motion.form>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;