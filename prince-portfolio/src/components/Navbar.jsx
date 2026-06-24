import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#080f19]/70 backdrop-blur-xl">
      <nav className="max-w-7xl mx-auto px-6 h-[76px] flex items-center justify-between">
        {/* logo */}
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <span className="text-white font-bold text-lg">PM</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-semibold leading-none">Prince Mertiya</p>
            <p className="text-xs text-gray-400 mt-1">Software Engineer</p>
          </div>
        </a>

        {/* desktop nav */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 rounded-full text-sm text-gray-300 hover:text-white hover:bg-white/[0.06] transition"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="/PrinceResume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-2xl border border-white/15 text-white hover:bg-white/5 transition"
          >
            Resume
          </a>

          <a
            href="#contact"
            className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/15"
          >
            Hire Me
          </a>
        </div>

        {/* mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden w-11 h-11 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center text-white"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-[#08111d]/95 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-2xl text-gray-300 hover:text-white hover:bg-white/[0.05] transition"
              >
                {link.label}
              </a>
            ))}

            <div className="grid sm:grid-cols-2 gap-3 pt-3">
              <a
                href="/PrinceResume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3 rounded-2xl border border-white/15 text-white text-center hover:bg-white/5 transition"
              >
                Resume
              </a>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;