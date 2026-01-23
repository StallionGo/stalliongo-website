import { Zap, Shield, Clock, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Lightning Fast Delivery",
    description:
      "Agile methodology and efficient workflows ensure rapid development without sacrificing quality. Get your product to market faster.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Security-first approach with industry best practices. Your data and applications are protected with robust security measures.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock technical support and maintenance. We are always here when you need us, ensuring minimal downtime.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "No cookie-cutter approaches. Every solution is tailored to your specific business needs and objectives.",
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
            Partner with a team that is committed to your success
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
