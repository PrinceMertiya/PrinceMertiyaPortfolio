import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: "01",
    title: "HireNova",
    subtitle: "AI Resume Analysis Platform",
    description:
      "An AI-powered resume analysis platform that reviews resumes, identifies strengths and weaknesses, and provides smart suggestions for improvement.",
    tech: ["MERN", "AI Integration", "NLP", "Resume Analysis"],
    accent: "from-blue-500/30 to-purple-500/20",
    imageType: "dashboard",
    github: "https://github.com/PrinceMertiya/HireNova",
  },
  {
    id: "02",
    title: "Farmer Friend",
    subtitle: "AI Crop Disease Detection App",
    description:
      "An Android app that helps farmers detect crop diseases using image analysis and AI-based remedies, with weather support and smart agriculture features.",
    tech: ["Kotlin", "Firebase", "TFLite", "Gemini API"],
    accent: "from-green-500/30 to-emerald-500/20",
    imageType: "mobile-green",
    github: "https://github.com/PrinceMertiya/Farmer-Friend",
  },
  {
    id: "03",
    title: "EcoTrack",
    subtitle: "AI Carbon Footprint Tracker",
    description:
      "An Android app for tracking carbon footprint and helping users adopt eco-friendly habits through analytics, insights, and AI recommendations.",
    tech: ["Android", "AI", "Charts", "Firebase"],
    accent: "from-emerald-500/30 to-lime-500/20",
    imageType: "mobile-eco",
    github: "https://github.com/PrinceMertiya/Eco-Track",
  },
  {
    id: "04",
    title: "Event & Club Management",
    subtitle: "Web Platform",
    description:
      "A full-stack web platform to manage college events, clubs, and student activities with streamlined workflows and role-based access.",
    tech: ["MERN", "JWT", "Role Based", "Dashboard"],
    accent: "from-fuchsia-500/20 to-violet-500/20",
    imageType: "dashboard-light",
    github: "https://github.com/solankiboyashok/club-event",
  },
];

const PreviewCard = ({ type, accent }) => {
  if (type === "dashboard") {
    return (
      <div
        className={`w-full h-full rounded-[2rem] bg-gradient-to-br ${accent} p-5 flex items-center justify-center`}
      >
        <div className="w-full max-w-[270px] rounded-[1.6rem] bg-[#0d1424]/95 border border-white/10 p-4 shadow-2xl">
          <div className="flex gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>

          <div className="space-y-3">
            <div className="h-3 rounded bg-white/12"></div>
            <div className="h-20 rounded-2xl bg-white/8"></div>

            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 rounded-xl bg-white/8"></div>
              <div className="h-12 rounded-xl bg-white/8"></div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-9 rounded-lg bg-white/8"></div>
              <div className="h-9 rounded-lg bg-white/8"></div>
              <div className="h-9 rounded-lg bg-white/8"></div>
            </div>

            <div className="h-10 rounded-xl bg-white/8"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "dashboard-light") {
    return (
      <div
        className={`w-full h-full rounded-[2rem] bg-gradient-to-br ${accent} p-5 flex items-center justify-center`}
      >
        <div className="w-full max-w-[270px] rounded-[1.6rem] bg-white/90 border border-white/20 p-4 shadow-2xl">
          <div className="flex gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
          </div>

          <div className="space-y-3">
            <div className="h-3 rounded bg-slate-200"></div>
            <div className="h-20 rounded-2xl bg-slate-100"></div>

            <div className="grid grid-cols-2 gap-3">
              <div className="h-12 rounded-xl bg-slate-100"></div>
              <div className="h-12 rounded-xl bg-slate-100"></div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <div className="h-9 rounded-lg bg-slate-100"></div>
              <div className="h-9 rounded-lg bg-slate-100"></div>
              <div className="h-9 rounded-lg bg-slate-100"></div>
            </div>

            <div className="h-10 rounded-xl bg-slate-100"></div>
          </div>
        </div>
      </div>
    );
  }

  if (type === "mobile-green" || type === "mobile-eco") {
    const isEco = type === "mobile-eco";

    return (
      <div
        className={`w-full h-full rounded-[2rem] bg-gradient-to-br ${accent} p-5 flex items-center justify-center gap-5`}
      >
        <div className="flex flex-col gap-3">
          <div
            className={`w-10 h-10 rounded-xl ${
              isEco ? "bg-green-300/25" : "bg-lime-300/25"
            }`}
          ></div>
          <div
            className={`w-12 h-12 rounded-2xl ${
              isEco ? "bg-emerald-300/25" : "bg-green-300/25"
            }`}
          ></div>
          <div
            className={`w-9 h-9 rounded-full ${
              isEco ? "bg-lime-300/25" : "bg-emerald-300/25"
            }`}
          ></div>
        </div>

        <div className="w-[160px] h-[275px] rounded-[2rem] bg-[#101828] border border-white/10 p-3 shadow-2xl">
          <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>

          <div className="space-y-3">
            <div className="h-4 rounded bg-white/10"></div>
            <div className="h-24 rounded-2xl bg-white/8"></div>

            <div className="space-y-2">
              <div className="h-3 rounded bg-white/10"></div>
              <div className="h-3 rounded bg-white/10"></div>
              <div className="h-3 rounded bg-white/10"></div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-2">
              <div className="h-10 rounded-xl bg-white/8"></div>
              <div className="h-10 rounded-xl bg-white/8"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

const Projects = () => {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 uppercase tracking-[0.24em] text-sm">
          Featured Projects
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">Things I’ve Built</h2>
        <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
          A selection of projects that reflect my work in full-stack development,
          Android apps, backend systems, and AI-powered products.
        </p>
      </div>

      {/* project cards */}
      <div className="space-y-7">
        {projects.map((project) => (
          <div
            key={project.title}
            className="glow-card rounded-[2rem] p-5 md:p-6 lg:p-7 grid lg:grid-cols-[330px_1fr] gap-7 items-center"
          >
            {/* left preview */}
            <div className="h-[250px] sm:h-[280px] rounded-[2rem] overflow-hidden shrink-0">
              <PreviewCard type={project.imageType} accent={project.accent} />
            </div>

            {/* right content */}
            <div className="flex flex-col justify-between h-full">
              <div>
                {/* top line */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-sm text-gray-500">{project.id}</span>
                  <span className="text-cyan-400 text-sm font-medium">
                    {project.subtitle}
                  </span>
                </div>

                {/* title */}
                <h3 className="text-3xl md:text-[2.3rem] font-bold tracking-tight">
                  {project.title}
                </h3>

                {/* desc */}
                <p className="text-gray-400 mt-4 leading-8 max-w-3xl">
                  {project.description}
                </p>

                {/* stack */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* buttons */}
              <div className="mt-7 flex flex-wrap gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium shadow-lg shadow-blue-500/10"
                >
                  <FaGithub size={18} />
                  View Code
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/15 text-white hover:bg-white/5 transition"
                >
                  <ArrowUpRight size={18} />
                  Discuss Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;