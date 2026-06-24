
import profileImg from "../assets/Profile.png";
import {
  Sparkles,
  FolderOpen,
  Mail,
  Code2,
  BriefcaseBusiness,
  UserRound,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Hero = () => {
  return (
    <section
      id="home"
      className="max-w-[1400px] mx-auto px-8 pt-4 pb-4 min-h-[calc(100vh-72px)] flex items-center"
    >
      <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center w-full">
        {/* LEFT */}
        <div className="max-w-[580px] pt-4">
          <p className="text-cyan-400 text-xl mb-4 font-medium">Hi, I&apos;m</p>

          <h1 className="font-bold tracking-tight leading-tight">
            <span className="text-white text-[4.0rem] xl:text-[4.0rem]">
              Prince{" "}
            </span>
            <span className="gradient-text text-[4.0rem] xl:text-[4.0rem]">
              Mertiya
            </span>
          </h1>

          <p className="mt-6 text-[1.15rem] xl:text-[1.25rem] leading-[1.7] text-gray-100 max-w-[580px]">
            Software Engineer | Full Stack Developer | Android Developer | AI Enthusiast
          </p>

          <p className="mt-5 text-gray-400 text-[1rem] leading-8 max-w-[560px]">
            Computer Science graduate passionate about building scalable software,
            Android applications, and AI-powered products that solve real-world
            problems. Strong in DSA, full-stack development, backend systems, and
            intelligent apps.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/10"
            >
              <Sparkles size={18} />
              View Projects
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-white/15 text-white hover:bg-white/5 transition"
            >
              <Mail size={18} />
              Contact Me
            </a>

            {/* <a
              href="/PrinceResume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3.5 rounded-2xl border border-white/15 text-white hover:bg-white/5 transition"
            >
              <Download size={18} />
              Resume
            </a> */}
          </div>

          {/* Social */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/PrinceMertiya"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glow-card flex items-center justify-center text-2xl text-white hover:-translate-y-1 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/prince-mertiya-0b11b2290/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glow-card flex items-center justify-center text-2xl text-white hover:-translate-y-1 transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://leetcode.com/u/primepm9/"
              target="_blank"
              rel="noreferrer"
              className="w-14 h-14 rounded-2xl glow-card flex items-center justify-center text-2xl text-[#f5a524] hover:-translate-y-1 transition"
            >
              <SiLeetcode />
            </a>

            <a
              href="mailto:meprime30@gmail.com"
              className="w-14 h-14 rounded-2xl glow-card flex items-center justify-center text-2xl text-white hover:-translate-y-1 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-2">
          {/* IMAGE CARD — taller, image more prominent */}
          <div className="glow-card rounded-[2rem] p-2 relative overflow-hidden h-[400px] xl:h-[450px]">
  {/* outer ambient glow */}
  <div className="absolute -top-16 -right-10 w-56 h-56 bg-blue-500/15 blur-3xl rounded-full" />
  <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-purple-500/15 blur-3xl rounded-full" />

  {/* <div className="relative w-full h-full rounded-[1.8rem] border border-[#3f4cff]/60 bg-[#09111d] overflow-hidden"> */}
    {/* background glow so side empty space looks intentional */}
    {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(59,130,246,0.28),transparent_35%),radial-gradient(circle_at_35%_55%,rgba(168,85,247,0.22),transparent_40%),linear-gradient(to_bottom,#07101d,#081321)] z-[1]" /> */}

    {/* image - moved slightly lower, not stretched */}
    {/* <img
      src={profileImg}
      alt="Prince Mertiya"
      className="absolute z-[2] left-1/2 bottom-[-18px] -translate-x-1/2 h-[105%] w-auto max-w-none object-contain"
    /> */}
<img
      src={profileImg}
      alt="Prince Mertiya"
      className="w-full h-full object-cover"
    />
    {/* subtle dark side overlays to hide empty left/right gaps */}
    <div className="absolute inset-y-0 left-0 w-[18%] bg-gradient-to-r from-[#07101d] via-[#07101d]/70 to-transparent z-[3]" />
    <div className="absolute inset-y-0 right-0 w-[18%] bg-gradient-to-l from-[#07101d] via-[#07101d]/70 to-transparent z-[3]" />

{/*    
    <div className="absolute inset-[14px] rounded-[1.55rem] border border-[#2f63ff]/70 shadow-[0_0_35px_rgba(80,80,255,0.18)] z-[4]" /> */}

    
    {/* <div className="absolute top-8 right-8 grid grid-cols-4 gap-3 opacity-80 z-[5]">
      {Array.from({ length: 16 }).map((_, i) => (
        <span key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
      ))}
    </div> */}

    {/* bottom fade for cleaner merge */}
    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#09111d] via-[#09111d]/80 to-transparent z-[5]" />

    {/* badge */}
    <div className="absolute left-4 right-4 bottom-4 z-[6] rounded-[1.35rem] border border-white/10 bg-[#0b1320]/78 backdrop-blur-xl px-4 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-200 shrink-0">
          <UserRound size={20} />
        </div>

        <div className="min-w-0">
          <p className="text-[11px] text-gray-400 leading-none">Portfolio Profile</p>
          <p className="text-base font-semibold text-white mt-1 truncate">
            Prince Mertiya
          </p>
        </div>
      </div>

      <div className="hidden md:flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/5 border border-white/10 text-white text-sm shrink-0">
        <span className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]"></span>
        <span>Available for work</span>
      </div>
    </div>
  </div>



          {/* STATS ROW */}
          <div className="grid grid-cols-3 gap-4">
            {/* DSA */}
            <div className="glow-card rounded-[2rem] p-5 flex flex-col justify-between min-h-[190px]">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-white/10 flex items-center justify-center text-purple-300 mb-4">
                  <Code2 size={22} />
                </div>
                <p className="text-gray-400 text-sm">DSA</p>
                <h3 className="text-[2.2rem] font-bold mt-2 gradient-text leading-none">
                  1000+
                </h3>
              </div>
              <div>
                <p className="text-gray-300 text-base leading-snug">Problems Solved</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[92%] bg-gradient-to-r from-purple-500 to-pink-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="glow-card rounded-[2rem] p-5 flex flex-col justify-between min-h-[190px]">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-white/10 flex items-center justify-center text-blue-300 mb-4">
                  <FolderOpen size={22} />
                </div>
                <p className="text-gray-400 text-sm">Projects</p>
                <h3 className="text-[2.2rem] font-bold mt-2 gradient-text leading-none">
                  4+
                </h3>
              </div>
              <div>
                <p className="text-gray-300 text-base leading-snug">Major Projects</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[86%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                </div>
              </div>
            </div>

            {/* Exploring */}
            <div className="glow-card rounded-[2rem] p-5 flex flex-col justify-between min-h-[190px]">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-fuchsia-300 mb-4">
                  <BriefcaseBusiness size={22} />
                </div>
                <div className="text-gray-400 text-xs mb-2">Currently Exploring</div>
                <h3 className="text-[1.1rem] xl:text-[1.2rem] leading-tight font-bold text-white">
                  AI + Android
                  <br />+ Web Systems
                </h3>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Building the future</p>
                <div className="mt-3 h-1.5 rounded-full bg-white/5 overflow-hidden">
                  <div className="h-full w-[95%] bg-gradient-to-r from-fuchsia-500 to-purple-400 rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;