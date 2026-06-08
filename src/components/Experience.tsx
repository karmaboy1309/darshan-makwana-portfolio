"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Monitor, Server, Laptop, ChevronRight } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  type: "Online" | "Offline";
  period: string;
  bullets: string[];
  tech: string[];
  gradient: string;
  logo: string;
}

const experiences: ExperienceItem[] = [
  {
    role: "MERN Stack Developer Intern",
    company: "TechnoGuide Infosoft Pvt. Ltd.",
    location: "Anand / Offline",
    type: "Offline",
    period: "May, 2026 – June, 2026",
    bullets: [
      "Engineered scalable RESTful APIs using Node.js and Express.js, seamlessly integrating them with React.js frontends to improve data retrieval efficiency by 25%."
    ],
    tech: ["Node.js", "Express.js", "React.js", "RESTful APIs", "MERN Stack"],
    gradient: "from-purple-500/20 via-indigo-500/10 to-transparent",
    logo: "/technoguide_logo.jfif"
  },
  {
    role: "Full Stack Web Developer",
    company: "CodeAlpha",
    location: "Lucknow, UP / Online",
    type: "Online",
    period: "May, 2026 – June, 2026",
    bullets: [
      "Architected and launched 'Vibe,' a dynamic social media platform leveraging the complete MERN stack (MongoDB, Express.js, React.js, Node.js), facilitating real-time user interactions and boosting platform engagement by 40%.",
      "Developed a responsive e-commerce website with secure user authentication and scalable product management features, resulting in a 30% reduction in page load times and an enhanced user experience."
    ],
    tech: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js", "E-commerce"],
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    logo: "/codealpha_logo.jfif"
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-950/30">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Professional Experience</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4" />
          <p className="text-slate-400">My internship experiences and technical contributions in industry roles.</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300 shadow-xl overflow-hidden"
            >
              {/* Radial gradient glow behind on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10`} />

              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 w-12 h-12">
                    <img src={exp.logo} alt={exp.company} className="w-7 h-7 object-contain rounded-md" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-slate-300">
                      <span className="font-semibold text-cyan-400">{exp.company}</span>
                      <span className="text-slate-500">•</span>
                      <span className="flex items-center gap-1 text-sm">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row md:flex-col items-center md:items-end gap-2 text-right">
                  <span className="flex items-center gap-1 text-sm text-slate-400 font-medium bg-white/5 px-3 py-1 rounded-full border border-white/5">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.period}
                  </span>
                  <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                    exp.type === "Online" 
                      ? "bg-cyan-500/10 text-cyan-400 border-cyan-500/20" 
                      : "bg-purple-500/10 text-purple-400 border-purple-500/20"
                  }`}>
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-6 space-y-4">
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm md:text-base leading-relaxed">
                      <ChevronRight className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-semibold text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1 rounded-lg transition-colors duration-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
