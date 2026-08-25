import { Compass, Cpu, Trophy, Globe2 } from "lucide-react";

const highlights = [
  {
    icon: Compass,
    title: "Strategic Thinking",
    description: "Technology decisions aligned with your business objectives",
  },
  {
    icon: Cpu,
    title: "Technical Excellence",
    description: "Deep expertise across modern technologies and architectures",
  },
  {
    icon: Trophy,
    title: "Proven Track Record",
    description: "50+ successful projects delivered across industries",
  },
  {
    icon: Globe2,
    title: "Global Experience",
    description: "Worked with clients across 6 countries and multiple time zones",
  },
];

export default function About() {
  return (
    <section id="about" aria-label="About StallionGo" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Insaf Zakariya
              </span>
            </h2>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Software Engineering Consultant with over a decade of experience
              building scalable software solutions. I help companies transform
              ideas and business challenges into working products.
            </p>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Through StallionGo, I provide fractional engineering services,
              technical consulting, and end-to-end development. Whether you need
              strategic guidance or hands-on engineering, I bring the expertise
              to deliver results.
            </p>

            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "20+", label: "Happy Clients" },
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
              <div className="text-slate-500 mb-3">Global Client Base</div>
              <div className="flex flex-wrap gap-3">
                {[
                  { flag: "🇱🇰", name: "Sri Lanka" },
                  { flag: "🇿🇦", name: "South Africa" },
                  { flag: "🇬🇧", name: "UK" },
                  { flag: "🇺🇸", name: "USA" },
                  { flag: "🇦🇺", name: "Australia" },
                  { flag: "🇳🇿", name: "New Zealand" },
                  { flag: "🇦🇪", name: "UAE" },
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
