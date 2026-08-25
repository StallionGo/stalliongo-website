"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Linkedin } from "lucide-react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to discuss your project? Let&apos;s talk about how I can help
            transform your ideas into scalable solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <a
                href="mailto:insaf.zak@gmail.com"
                className="flex items-center gap-4 text-slate-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Email</div>
                  <div className="text-white">insaf.zak@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+94773799390"
                className="flex items-center gap-4 text-slate-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Phone</div>
                  <div className="text-white">+94 77 379 9390</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">Location</div>
                  <div className="text-white">Remote / Global</div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/insafzakariya/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-12 h-12 bg-primary-500/10 rounded-lg flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-primary-400" />
                </div>
                <div>
                  <div className="text-sm text-slate-500">LinkedIn</div>
                  <div className="text-white">linkedin.com/in/insafzakariya</div>
                </div>
              </a>
            </div>

            <div className="mt-10 p-6 bg-slate-800/50 border border-slate-700/50 rounded-xl">
              <h4 className="font-semibold text-white mb-2">
                Availability
              </h4>
              <p className="text-slate-400 text-sm">
                Flexible hours across time zones
                <br />
                Available for both short-term consulting and long-term engagements
                <br />
                <span className="text-primary-400">Response within 24 hours</span>
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <CheckCircle className="w-16 h-16 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-slate-400">
                  Thank you for reaching out. We will get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none text-white placeholder-slate-500 transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
