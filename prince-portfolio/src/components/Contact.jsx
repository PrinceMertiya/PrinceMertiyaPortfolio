import { FaGithub, FaLinkedinIn, FaCode } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const contactLinks = [
  {
    icon: <HiOutlineMail className="text-xl" />,
    label: "Email",
    value: "meprime30@gmail.com",
    href: "mailto:meprime30@gmail.com",
  },
  {
    icon: <FaLinkedinIn className="text-lg" />,
    label: "LinkedIn",
    value: "linkedin.com/in/prince-mertiya-0b11b2290",
    href: "https://linkedin.com/in/prince-mertiya-0b11b2290",
  },
  {
    icon: <FaGithub className="text-lg" />,
    label: "GitHub",
    value: "github.com/PrinceMertiya",
    href: "https://github.com/PrinceMertiya",
  },
  {
    icon: <FaCode className="text-lg" />,
    label: "LeetCode",
    value: "leetcode.com/u/primepm9",
    href: "https://leetcode.com/u/primepm9/",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-14">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
        {/* LEFT CTA CARD */}
        <div className="glow-card rounded-[2rem] p-8 md:p-10 relative overflow-hidden min-h-[320px] flex flex-col justify-between">
          <div className="absolute -top-16 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-cyan-400 uppercase tracking-[0.2em] text-sm">
              Contact
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
              Let’s Build Something <br className="hidden md:block" />
              Amazing Together
            </h2>

            <p className="text-gray-400 mt-6 leading-8 max-w-2xl text-lg">
              I’m open to software engineering opportunities, collaborations,
              internships, and exciting product ideas. If you’d like to work
              together or just connect, feel free to reach out.
            </p>
          </div>

          <div className="relative z-10 mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:meprime30@gmail.com"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium"
            >
              Email Me
            </a>

            <a
              href="https://github.com/PrinceMertiya"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3.5 rounded-2xl border border-white/15 text-white hover:bg-white/5 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT CONTACT LINKS CARD */}
        <div className="glow-card rounded-[2rem] p-8 md:p-10 min-h-[320px] flex flex-col justify-center relative overflow-hidden">
          <div className="absolute -top-16 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-16 -left-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10 space-y-5">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl px-4 py-4 border border-white/8 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/15 transition"
              >
                <div className="w-11 h-11 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center text-gray-200 group-hover:text-cyan-400 transition">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    {item.label}
                  </p>
                  <p className="text-gray-200 group-hover:text-white transition break-all">
                    {item.value}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;