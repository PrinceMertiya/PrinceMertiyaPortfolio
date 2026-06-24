import {
  Code2,
  Globe,
  Database,
  Smartphone,
  Brain,
  Braces,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    items: ["C++", "Java", "Python", "JavaScript", "Kotlin"],
  },
  {
    title: "Web Development",
    icon: Globe,
    items: ["React.js", "Node.js", "Express.js", "REST APIs", "JWT"],
  },
  {
    title: "Backend / Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "Firebase", "Postman", "API Integration"],
  },
  {
    title: "Android Development",
    icon: Smartphone,
    items: ["Android Studio", "Kotlin", "Java", "MVVM", "Retrofit"],
  },
  {
    title: "AI / Tools / Cloud",
    icon: Brain,
    items: ["Gemini API", "TensorFlow Lite", "Git", "GitHub", "Docker"],
  },
  {
    title: "Core CS / DSA",
    icon: Braces,
    items: ["Data Structures", "Algorithms", "OOP", "DBMS", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 py-16">
      {/* heading */}
      <div className="text-center mb-14">
        <p className="text-cyan-400 uppercase tracking-[0.28em] text-sm md:text-base">
          Technical Skills
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-4 tracking-tight text-white">
          Skills & Technologies
        </h2>

        <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8 text-lg">
          Tools, languages, frameworks, and technologies I use to build
          full-stack applications, Android products, backend systems, and
          AI-powered solutions.
        </p>
      </div>

      {/* skills grid */}
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {skillGroups.map((group) => {
          const Icon = group.icon;

          return (
            <div
              key={group.title}
              className="glow-card rounded-[2rem] p-6 md:p-7 relative overflow-hidden min-h-[250px] group"
            >
              {/* soft glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative z-10">
                {/* top */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-2xl font-semibold text-white leading-tight">
                      {group.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-1">
                      {group.items.length} tools / technologies
                    </p>
                  </div>
                </div>

                {/* items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-3">
                  {group.items.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-gray-300">
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-[15px] leading-6">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* bottom summary strip */}
      <div className="mt-10 glow-card rounded-[2rem] px-6 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-cyan-400 text-sm uppercase tracking-[0.22em]">
            Engineering Focus
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">
            Full-Stack Development + Android + AI Systems
          </h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {[
            "Problem Solving",
            "Backend Systems",
            "Mobile Apps",
            "REST APIs",
            "AI Integration",
          ].map((tag) => (
            <span
              key={tag}
              className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;