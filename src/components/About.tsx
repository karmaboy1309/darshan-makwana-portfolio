"use client";

import { motion } from "framer-motion";

const frontendSkills = ["React", "Next.js", "Tailwind CSS", "JavaScript", "Framer Motion"];
const backendSkills = ["Node.js", "Express", "MongoDB", "SQL", "C (POSIX)"];
const aiSkills = ["Python", "Machine Learning", "Azure AI", "Snowflake", "SAP Analytics"];

export function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">About Me</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-slate-300 text-lg leading-relaxed"
          >
            <p>
              I am an IT Engineering student at MBIT (CVM University), passionate about bridging the gap between scalable web architecture and intelligent AI solutions. I enjoy building applications that don't just work well under the hood, but also provide an exceptional user experience.
            </p>
            <p>
              Beyond coding, I'm deeply involved in event management and community building. Whether it's organizing technical bootcamps or anchoring college events, I believe in the power of effective communication and leadership.
            </p>
            <p>
              And when I step away from the keyboard, you can find me expressing my creativity through music—I'm an avid Tabla and Dhol player!
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8 bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full" /> Frontend
              </h3>
              <div className="flex flex-wrap gap-3">
                {frontendSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-medium text-slate-200 hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full" /> Backend & DB
              </h3>
              <div className="flex flex-wrap gap-3">
                {backendSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-medium text-slate-200 hover:-translate-y-1 hover:border-purple-500/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" /> AI & Data
              </h3>
              <div className="flex flex-wrap gap-3">
                {aiSkills.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm font-medium text-slate-200 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] transition-all cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
