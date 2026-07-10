import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BentoDifferentials } from './components/BentoDifferentials';
import { Professors } from './components/Professors';
import { Schedule } from './components/Schedule';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#050505] min-h-screen font-sans selection:bg-red-600 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Faixa de autoridade/Marquee */}
        <div className="border-y border-white/5 bg-[#0a0a0a] py-6 overflow-hidden flex items-center">
          <div className="flex gap-12 animate-[marquee_20s_linear_infinite] whitespace-nowrap px-4 opacity-50">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-12 items-center text-sm font-display font-bold uppercase tracking-[0.2em] text-neutral-400">
                <span>Brotherhood Jiu-Jitsu</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Disciplina</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Foco</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Respeito</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Competição</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
                <span>Defesa Pessoal</span>
                <span className="w-2 h-2 rounded-full bg-red-600"></span>
              </div>
            ))}
          </div>
        </div>
        <BentoDifferentials />
        <Professors />
        <Schedule />
      </main>
      <Footer />
    </div>
  );
}
