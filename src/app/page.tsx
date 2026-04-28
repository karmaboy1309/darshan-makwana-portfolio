import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Leadership } from "@/components/Leadership";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50 relative overflow-x-hidden">
      {/* Global Background Grid/Noise Optional */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay pointer-events-none z-50"></div>
      
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
