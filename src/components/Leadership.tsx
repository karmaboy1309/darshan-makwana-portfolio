"use client";

import { motion } from "framer-motion";
import { Award, Users, Mic, Star } from "lucide-react";

const roles = [
  {
    id: 0,
    title: "Coordinator",
    organization: "Training & Placement Cell",
    description: "Handling events, arranging alumni seminars, and facilitating placement drives to bridge the gap between students and industry professionals.",
    icon: <Users className="w-5 h-5 text-indigo-400" />,
    color: "bg-indigo-500/10 border-indigo-500/30"
  },
  {
    id: 0.5,
    title: "Finalist, Best Business Idea Competition (BBIC)",
    organization: "CVM University 2025-26",
    description: "Selected as a finalist for OrnaPrint, an AI-driven platform for custom jewelry design, demonstrating innovation in retail technology and business strategy.",
    icon: <Award className="w-5 h-5 text-rose-400" />,
    color: "bg-rose-500/10 border-rose-500/30"
  },
  {
    id: 1,
    title: "Coordinator",
    organization: "Personality Development Cell (PDC)",
    description: "Led the PDC-Bootcamp, organizing sessions on soft skills, communication, and leadership for over 200+ students.",
    icon: <Users className="w-5 h-5 text-cyan-400" />,
    color: "bg-cyan-500/10 border-cyan-500/30"
  },
  {
    id: 2,
    title: "Tech Team & Anchor",
    organization: "Entrepreneurship Development Cell (EDC)",
    description: "Managed technical operations during major collegiate events and anchored stage programs, ensuring smooth event flow.",
    icon: <Mic className="w-5 h-5 text-purple-500" />,
    color: "bg-purple-500/10 border-purple-500/30"
  },
  {
    id: 3,
    title: "Coordinator",
    organization: "Social Media Committee",
    description: "Spearheaded digital campaigns, managing the official college social presence and increasing student engagement.",
    icon: <Star className="w-5 h-5 text-amber-400" />,
    color: "bg-amber-400/10 border-amber-400/30"
  },
  {
    id: 4,
    title: "1st Rank, Folk Orchestra",
    organization: "Yugantar-22 Youth Festival",
    description: "Represented the college as a lead Dhol/Tabla player and secured the first rank at the university youth festival.",
    icon: <Award className="w-5 h-5 text-emerald-400" />,
    color: "bg-emerald-400/10 border-emerald-400/30"
  }
];

export function Leadership() {
  return (
    <section id="leadership" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience & Leadership</h2>
          <p className="text-slate-400">Beyond the screen, I actively participate in building communities, organizing events, and pursuing my creative passions.</p>
        </motion.div>

        <div className="relative border-l-2 border-white/10 ml-4 md:ml-0 md:pl-0 space-y-12">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0"
            >
              <div className={`absolute -left-[41px] md:left-1/2 md:-ml-[21px] top-0 w-10 h-10 rounded-full border ${role.color} bg-slate-950 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
                {role.icon}
              </div>
              
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 shadow-xl">
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                  <h4 className="text-sm font-medium text-cyan-400 mb-3">{role.organization}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Timeline Center Line for Desktop */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-0.5 bg-white/10 -z-10" />
        </div>
      </div>
    </section>
  );
}
