"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-sm text-slate-300">Available for Opportunities</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Darshan Makwana.
            </span>
          </h1>

          <h2 className="text-2xl lg:text-3xl font-medium text-slate-200">
            Building Scalable Web Apps & Intelligent AI Solutions.
          </h2>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed">
            Final-year IT Engineering student at MBIT. Full-stack MERN developer, Azure AI certified, and tech community leader bridging the gap between scalable web architecture and intelligent AI solutions.
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              View Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/resume-cv.pdf"
              download
              className="group flex items-center gap-2 px-6 py-3 text-slate-200 font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Resume / CV
              <Download className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="group flex items-center gap-2 px-6 py-3 text-slate-300 font-medium bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              Contact Me
              <Download className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-md aspect-square"
          >
            {/* Abstract Decorative Code Card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-3xl border border-white/10 shadow-2xl flex items-center justify-center overflow-hidden">
               <div className="w-full p-6 text-sm font-mono text-slate-300 opacity-80">
                 <p className="text-purple-400">import <span className="text-cyan-300">{'{'} Developer {'}'}</span> from <span className="text-green-300">'@mbit/it'</span>;</p>
                 <br />
                 <p><span className="text-purple-400">const</span> <span className="text-blue-400">darshan</span> = <span className="text-cyan-300">new Developer</span>({'{'}</p>
                 <p className="pl-4">name: <span className="text-green-300">'Darshan Makwana'</span>,</p>
                 <p className="pl-4">role: <span className="text-green-300">'Full-Stack Engineer'</span>,</p>
                 <p className="pl-4">skills: [<span className="text-green-300">'React','Angular'</span>, <span className="text-green-300">'Next.js'</span>, <span className="text-green-300">'Node','MongoDB'</span>],</p>
                 <p className="pl-4">focus: <span className="text-green-300">'AI Integration'</span></p>
                 <p>{'}'});</p>
                 <br />
                 <p><span className="text-blue-400">darshan</span>.<span className="text-yellow-200">buildFuture</span>();</p>
               </div>
            </div>

            {/* Profile Picture Overlapping Card */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
              className="absolute -bottom-8 -right-4 md:-right-12 w-40 h-40 md:w-48 md:h-48 rounded-full p-1 bg-gradient-to-tr from-cyan-400 to-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.4)] z-20"
            >
               <img 
                 src="https://avatars.githubusercontent.com/u/232111789?v=4" 
                 alt="Darshan Makwana" 
                 className="w-full h-full rounded-full object-cover bg-slate-950 border-4 border-slate-950"
               />
            </motion.div>
            
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute -top-6 -right-6 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-xl z-10"
            >
              <div className="w-3 h-3 bg-cyan-400 rounded-full shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
              <span className="text-sm font-medium text-white">Full-Stack Engineer</span>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 -left-6 bg-slate-900 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md flex items-center gap-2 shadow-xl z-10"
            >
              <div className="w-3 h-3 bg-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              <span className="text-sm font-medium text-white">Coordinator</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
