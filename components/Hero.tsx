import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" aria-label="Hero section" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950/30" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-500/10 via-transparent to-transparent" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-8">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm text-primary-300">
              Transforming Ideas Into Digital Reality
            </span>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-white">Enterprise Software</span>
          <br />
          <span className="bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 animate-fade-in-delay">
          We build scalable, high-performance software solutions that drive
          business growth. From enterprise systems to cloud infrastructure,
          we deliver excellence.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay">
          <a
            href="#contact"
            className="group px-8 py-4 bg-primary-600 hover:bg-primary-700 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-2"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#services"
            className="px-8 py-4 border border-slate-700 hover:border-slate-600 hover:bg-slate-800/50 rounded-lg font-semibold text-lg transition-all duration-200"
          >
            Explore Services
          </a>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-in-delay">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "20+", label: "Enterprise Clients" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 animate-fade-in-delay">
          <div className="text-sm text-slate-500 mb-3">Trusted by clients worldwide</div>
          <div className="flex flex-wrap justify-center gap-2">
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
                className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 border border-slate-700/50 rounded-full"
                title={country.name}
              >
                <span className="text-lg">{country.flag}</span>
                <span className="text-xs text-slate-400">{country.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
