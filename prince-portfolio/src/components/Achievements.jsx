import {
  Trophy,
  Code2,
  GraduationCap,
  FolderKanban,
  CalendarDays,
} from "lucide-react";

const achievements = [
  {
    icon: Code2,
    value: "1000+",
    title: "DSA Problems Solved",
    desc: "Built strong foundations in data structures, algorithms, and problem-solving through consistent coding practice.",
  },
  {
    icon: GraduationCap,
    value: "8.06",
    title: "B.Tech CSE CGPA",
    desc: "Graduated in Computer Science Engineering from Parul University with a strong academic record.",
  },
  {
    icon: FolderKanban,
    value: "4+",
    title: "Major Projects Built",
    desc: "Designed and developed projects across AI, Android, backend systems, and full-stack web development.",
  },
  {
    icon: CalendarDays,
    value: "2026",
    title: "Graduate",
    desc: "Recent Computer Science graduate ready to contribute to software engineering and product-focused teams.",
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="max-w-7xl mx-auto px-6 py-16">
      {/* heading */}
      <div className="text-center mb-12">
        <p className="text-cyan-400 uppercase tracking-[0.24em] text-sm">
          Highlights
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mt-3">
          Milestones & Achievements
        </h2>
        <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-8">
          A snapshot of the academic progress, project work, and problem-solving
          milestones that shape my engineering journey.
        </p>
      </div>

      {/* cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
        {achievements.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="glow-card rounded-[2rem] p-6 relative overflow-hidden min-h-[280px] flex flex-col"
            >
              {/* ambient glow */}
              <div className="absolute -top-10 -right-10 w-28 h-28 bg-blue-500/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-purple-500/10 blur-3xl rounded-full" />

              <div className="relative z-10 flex flex-col h-full">
                {/* icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400">
                  <Icon size={24} />
                </div>

                {/* number */}
                <h3 className="text-4xl font-bold gradient-text mt-6">
                  {item.value}
                </h3>

                {/* title */}
                <h4 className="text-xl font-semibold text-white mt-4 leading-snug">
                  {item.title}
                </h4>

                {/* desc */}
                <p className="text-gray-400 mt-4 leading-7 text-[15px]">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* bottom strip */}
      <div className="mt-8 glow-card rounded-[2rem] px-6 py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
            <Trophy size={22} />
          </div>

          <div>
            <p className="text-cyan-400 text-sm uppercase tracking-[0.22em]">
              Current Focus
            </p>
            <h3 className="text-2xl md:text-3xl font-semibold text-white mt-2">
              Software Engineering • Android • AI Products
            </h3>
            <p className="text-gray-400 mt-2 leading-7 max-w-3xl">
              Actively strengthening problem solving, full-stack development,
              Android engineering, and AI-based application building to prepare
              for impactful software roles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;