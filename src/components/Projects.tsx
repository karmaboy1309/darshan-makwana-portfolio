"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio : Darshan Makwana",
    description: "Personal portfolio showcasing scalable MERN stack applications, Azure AI solutions, and community leadership.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/karmaboy1309/darshan-makwana-portfolio",
    live: "https://darshan-makwana-portfolio.vercel.app/",
    gradient: "from-cyan-500 to-purple-500"
  },
  {
    title: "GitHub Profile README Generator",
    description: "A glassmorphism-powered README generator with live preview and one-click export for GitHub profiles.",
    tags: ["React", "Vite", "Tailwind", "Markdown"],
    github: "https://github.com/karmaboy1309/readme-generator",
    live: "https://readme-generator-three-psi.vercel.app/",
    gradient: "from-fuchsia-500 to-rose-400"
  },
  
  {
    title: "Zero-G Harmonium",
    description: "Antigravity web-based harmonium with physics simulation, bringing an interactive musical experience to the web.",
    tags: ["JavaScript", "Physics Simulation", "Web Audio"],
    github: "https://github.com/karmaboy1309/web_harmonium",
    live: "https://github.com/karmaboy1309/web_harmonium",
    gradient: "from-rose-500 to-orange-400"
  },
  
  {
    title: "Facial Emotion Recognition System",
    description: "The model classifies human emotions based on facial expressions and provides real-time emotion detection via a web application.",
    tags: ["AI", "Ml", "Vision", "Emotion", "NLP"],
    github: "https://github.com/karmaboy1309/emotion-ai",
    live: "#",
    gradient: "from-blue-600 to-indigo-500"
  },

  {
    title: "Job Portal Platform",
    description: "A full-stack job portal platform with dynamic routing, robust backend APIs, and database integration.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/karmaboy1309/job-portal-platform",
    live: "#",
    gradient: "from-blue-600 to-indigo-500"
  },

  {
    title: "Mini Unix Shell",
    description: "A custom Unix shell built in C using POSIX system calls, featuring command execution, piping, redirection, and process management.",
    tags: ["C", "Linux", "POSIX", "OS"],
    github: "https://github.com/karmaboy1309/mini-shell",
    live: "#",
    gradient: "from-emerald-500 to-teal-400"
  },
  {
    title: "AATS (AI Trading System)",
    description: "Adaptive autonomous AI system for market regime detection and trading strategy optimization.",
    tags: ["Python", "AI/ML", "Pandas", "Scikit-Learn"],
    github: "#",
    live: "#",
    gradient: "from-blue-500 to-cyan-400"
  },
  {
    title: "ISMS ERP",
    description: "Cloud-based Integrated Student Management System built for a hackathon. Streamlines college operations.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "#",
    live: "#",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "OrnaPrint",
    description: "B2B2C Gold Ornament Design AI Generator. Creates unique jewelry blueprints based on prompts.",
    tags: ["Next.js", "Tailwind", "OpenAI API", "Stripe"],
    github: "#",
    live: "#",
    gradient: "from-amber-400 to-orange-500"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 relative z-10 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Here are some of my recent projects where I combined full-stack development with AI capabilities to solve real-world problems.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-cyan-500/50 transition-colors duration-300"
            >
              <div className="h-48 w-full bg-slate-900 relative overflow-hidden flex items-center justify-center">
                 <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform duration-500`} />
                 {/* Placeholder for project image */}
                 <div className="text-slate-700 font-mono text-xl z-10 group-hover:text-white transition-colors duration-300">
                   {project.title.substring(0, 4)}...
                 </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium text-slate-300 bg-white/10 px-2.5 py-1 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white flex items-center gap-1.5 text-sm font-medium transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 text-sm font-medium transition-colors">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
