import {
  Globe,
  Smartphone,
  Cloud,
  Database,
  Cog,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom web applications built with modern frameworks. Scalable, secure, and optimized for performance.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure setup, migration, and DevOps automation. AWS, Azure, and GCP expertise.",
  },
  {
    icon: Database,
    title: "Enterprise Solutions",
    description:
      "Custom ERP, CRM, and enterprise software tailored to streamline your business operations.",
  },
  {
    icon: Cog,
    title: "API & Integration",
    description:
      "RESTful APIs, microservices architecture, and seamless third-party integrations.",
  },
  {
    icon: Headphones,
    title: "Consulting & Support",
    description:
      "Technical consulting, code audits, and 24/7 support to keep your systems running smoothly.",
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
            Comprehensive software solutions to accelerate your digital
            transformation journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6" role="list">
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
