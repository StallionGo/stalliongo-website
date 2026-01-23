import { Target, Users, Award, TrendingUp } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "Mission Driven",
    description: "Delivering innovative solutions that solve real business challenges",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Senior engineers with deep expertise across technologies",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Rigorous testing and code review for reliable software",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    description: "Architecture designed to grow with your business",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About StallionGo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Building the{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Future
              </span>{" "}
              of Software
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              We are a team of passionate engineers and designers dedicated to
              crafting exceptional software solutions. With over a decade of
              experience, we have helped businesses across industries transform
              their operations through technology.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We bring dedication, expertise, and innovation to every project,
              regardless of size. Our agile approach ensures rapid delivery
              without compromising on quality.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "50+", label: "Projects Completed" },
                { value: "20+", label: "Happy Clients" },
                { value: "25+", label: "Team Members" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-primary-400">
                    {stat.value}
                  </div>
                  <div className="text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <div className="text-slate-500 mb-3">Countries Served</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { flag: "🇱🇰", name: "Sri Lanka" },
                  { flag: "🇿🇦", name: "South Africa" },
                  { flag: "🇬🇧", name: "UK" },
                  { flag: "🇺🇸", name: "USA" },
                  { flag: "🇦🇺", name: "Australia" },
                  { flag: "🇳🇿", name: "New Zealand" },
                ].map((country) => (
                  <div
                    key={country.name}
                    className="flex items-center gap-2 px-3 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg"
                    title={country.name}
                  >
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-sm text-slate-400">{country.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4" role="list" aria-label="Company highlights">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="p-5 bg-slate-800/50 border border-slate-700/50 rounded-xl"
                role="listitem"
              >
                <div className="w-10 h-10 bg-primary-500/10 rounded-lg flex items-center justify-center mb-3" aria-hidden="true">
                  <item.icon className="w-5 h-5 text-primary-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
