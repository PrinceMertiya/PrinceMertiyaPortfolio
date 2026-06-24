import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { SiLeetcode } from "react-icons/si";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 pt-6 pb-10">
      <div className="glow-card rounded-[2rem] px-6 md:px-8 py-8 md:py-10 relative overflow-hidden">
        {/* ambient glow */}
        <div className="absolute -top-16 -left-12 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute -bottom-16 -right-12 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

        <div className="relative z-10 grid lg:grid-cols-[1.2fr_0.9fr_0.9fr] gap-10">
          {/* left */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <span className="text-white font-bold text-lg">PM</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">Prince Mertiya</h3>
                <p className="text-sm text-gray-400 mt-1">
                  Software Engineer • Full-Stack Developer • Android Developer
                </p>
              </div>
            </div>

            <p className="text-gray-400 leading-8 mt-5 max-w-xl">
              Computer Science graduate focused on building full-stack web
              applications, Android products, backend systems, and AI-powered
              solutions with real-world impact.
            </p>
          </div>

          {/* quick links */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.22em] text-sm">
              Quick Links
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-300 hover:text-white transition"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* connect */}
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.22em] text-sm">
              Connect
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:meprime30@gmail.com"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition break-all"
              >
                <HiOutlineMail className="text-lg" />
                <span>meprime30@gmail.com</span>
              </a>

              <a
                href="https://github.com/PrinceMertiya"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <FaGithub className="text-lg" />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/prince-mertiya-0b11b2290"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <FaLinkedinIn className="text-lg" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://leetcode.com/u/primepm9/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <SiLeetcode className="text-lg" />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </div>

        {/* bottom line */}
        <div className="relative z-10 mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Prince Mertiya. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;