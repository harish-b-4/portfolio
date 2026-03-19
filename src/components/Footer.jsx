import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-black via-purple-900 to-indigo-900 text-white relative overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 py-5 relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">

          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            
            <a  href="#home"
              className="text-2xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400"
            >
              HARISH
            </a>
            <p className="text-gray-300 text-xs mt-1 tracking-wide">
              MERN Stack Developer · Dindigul, India
            </p>
          </div>

        </div>

        {/* Bottom Divider — reduced opacity so it's invisible on mobile */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent mt-4 mb-4"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white">

          <p>© {new Date().getFullYear()} Harish. All rights reserved.</p>

          <p className="flex items-center gap-1.5">
            Built with <FaHeart className="text-cyan-400 text-xs animate-pulse" /> using React & Tailwind CSS
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;