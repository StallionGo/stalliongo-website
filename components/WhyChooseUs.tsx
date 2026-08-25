import { Award, Layers, Target, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Senior-Level Expertise",
    description:
      "Direct access to experienced engineering leadership without the overhead of a full-time executive hire. Get strategic guidance when you need it.",
  },
  {
    icon: Layers,
    title: "Flexible Engagement",
    description:
      "Scale up or down based on your project needs. From advisory roles to hands-on development, engagement models that work for you.",
  },
  {
    icon: Target,
    title: "End-to-End Ownership",
    description:
      "From strategy and architecture to delivery and deployment. I take ownership of outcomes, not just tasks.",
  },
  {
    icon: CheckCircle2,
    title: "Proven Methodologies",
    description:
      "Industry best practices refined over 10+ years and 50+ projects. Battle-tested approaches that deliver reliable results.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Why{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Partner with a consultant committed to your success
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" role="list">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className="flex gap-5 p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl hover:border-primary-500/30 transition-colors"
              role="listitem"
            >
              <div className="flex-shrink-0" aria-hidden="true">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-xl flex items-center justify-center">
                  <reason.icon className="w-7 h-7 text-primary-400" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
