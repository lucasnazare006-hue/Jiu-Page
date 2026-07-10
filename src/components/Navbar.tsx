import { motion } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Diferenciais', href: '#diferenciais' },
    { name: 'Professores', href: '#professores' },
    { name: 'Turmas', href: '#turmas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-full overflow-hidden border border-transparent group-hover:border-red-600/50 transition-colors">
             <img src="https://lh3.googleusercontent.com/d/1DJ-LDNrQL2tgrpNStgjIf4rjN89QvSfX" alt="Brotherhood Logo" className="w-full h-full object-cover" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
            Brotherhood
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5591985862710"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-colors"
          >
            Agendar Aula
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/5 p-6 flex flex-col gap-4 md:hidden shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-neutral-300 hover:text-white"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://wa.me/5591985862710"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-6 py-3 rounded-full bg-red-600 text-white font-semibold text-center hover:bg-red-700 transition-colors"
          >
            Agendar Aula Experimental
          </a>
        </motion.div>
      )}
    </header>
  );
}
