import {
  Users,
  Code2,
  Lightbulb,
  GraduationCap,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Fractional Engineering Services",
    description:
      "Part-time CTO or Engineering Leadership without the full-time cost. Get senior-level expertise to guide your technical decisions and team growth.",
  },
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end software development tailored to your specific requirements. From web applications to AI solutions, built with scalability in mind.",
  },
  {
    icon: Lightbulb,
    title: "Strategy & Architecture",
    description:
      "Technical strategy, architecture decisions, and technology selection. Make informed choices that align with your business goals and scale with your growth.",
  },
  {
    icon: GraduationCap,
    title: "Team Building & Mentorship",
    description:
      "Helping companies build, scale, and mentor engineering teams. Transfer knowledge and establish best practices for long-term success.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Helping companies turn ideas &amp; business challenges into scalable
            software &amp; AI solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6" role="list">
          {services.map((service) => (
            <article
              key={service.title}
              className="group p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl hover:border-primary-500/50 hover:bg-slate-800 transition-all duration-300"
              role="listitem"
              itemScope
              itemType="https://schema.org/Service"
            >
              <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary-500/20 transition-colors" aria-hidden="true">
                <service.icon className="w-6 h-6 text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white" itemProp="name">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed" itemProp="description">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
