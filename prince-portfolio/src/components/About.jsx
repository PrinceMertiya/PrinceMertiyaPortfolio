import { GraduationCap, Code2, BrainCircuit, Target, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-20">
      {/* Section heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 text-sm md:text-base uppercase tracking-[0.28em]">
          About Me
        </p>
        <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-white">
          Get To Know Me
        </h2>
        <p className="mt-5 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
          A quick overview of my background, strengths, and the kind of software
          engineering work I enjoy building.
        </p>
      </div>

      <div className="grid lg:grid-cols-[0.95fr_1.45fr] gap-7 items-stretch">
        {/* LEFT CARD */}
        <div className="glow-card rounded-[2rem] p-7 md:p-8 relative overflow-hidden">
          <div className="absolute -top-12 -left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-cyan-400 text-sm uppercase tracking-[0.22em]">
              Quick Highlights
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Building strong foundations in software engineering
            </h3>

            <div className="mt-8 space-y-5">
              {/* item */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <GraduationCap className="text-cyan-300" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    B.Tech CSE Graduate
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    Parul University • CGPA <span className="text-white">8.06</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <Code2 className="text-cyan-300" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Full-Stack + Android Builder
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    Focused on web apps, backend systems, Android development,
                    and practical product building.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <BrainCircuit className="text-cyan-300" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    AI + Problem Solving Mindset
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    Solved <span className="text-white font-medium">1000+ DSA problems</span> and
                    explored AI-powered applications with real-world use cases.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center shrink-0">
                  <Target className="text-cyan-300" size={22} />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Career Goal
                  </h4>
                  <p className="text-gray-400 text-sm mt-1 leading-6">
                    To grow into a strong Software Engineer building scalable,
                    impactful products and intelligent systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="glow-card rounded-[2rem] p-7 md:p-9 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-56 h-56 bg-blue-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-cyan-400 text-sm uppercase tracking-[0.22em]">
              Who I Am
            </p>

            <h3 className="mt-3 text-3xl md:text-4xl font-bold text-white leading-tight">
              A developer focused on building useful products, not just writing code
            </h3>

            <div className="mt-7 space-y-5 text-[17px] leading-8 text-gray-400">
              <p>
                I’m <span className="text-white font-semibold">Prince Mertiya</span>, a Computer
                Science graduate from <span className="text-white font-semibold">Parul University</span> with
                a strong interest in building <span className="text-white">scalable software</span>,
                <span className="text-white"> Android applications</span>, and
                <span className="text-white"> AI-powered products</span> that solve real-world problems.
              </p>

              <p>
                I enjoy turning ideas into working products and improving them through
                clean development, structured problem solving, and continuous learning.
                My experience spans <span className="text-white">full-stack web development</span>,
                <span className="text-white"> backend systems</span>,
                <span className="text-white"> Android development</span>, and
                <span className="text-white"> AI integrations</span>.
              </p>

              <p>
                Alongside development, I’ve solved
                <span className="text-white font-semibold"> 1000+ DSA problems</span>, which has strengthened
                my understanding of algorithms, problem-solving, and writing efficient code.
                I’ve also built projects like <span className="text-white">HireNova</span>,
                <span className="text-white">Farmer Friend</span>,
                <span className="text-white"> EcoTrack</span>, and an
                <span className="text-white"> Event & Club Management Platform</span>.
              </p>
            </div>

            {/* mini stats */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-gray-400 text-sm">DSA Solved</p>
                <h4 className="text-2xl font-bold mt-2 gradient-text">1000+</h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-gray-400 text-sm">Projects Built</p>
                <h4 className="text-2xl font-bold mt-2 gradient-text">4+</h4>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-gray-400 text-sm">Core Focus</p>
                <h4 className="text-lg font-semibold mt-2 text-white">
                  Web • Android • AI
                </h4>
              </div>
            </div>

            {/* skill chips */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Full-Stack Development",
                "Android Development",
                "Backend Systems",
                "REST APIs",
                "MongoDB",
                "Problem Solving",
                "AI Integrations",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-200"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* buttons */}
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/10"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 rounded-2xl border border-white/15 text-white hover:bg-white/5 transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;