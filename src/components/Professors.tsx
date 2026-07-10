import { motion } from 'motion/react';

const professors = [
  {
    name: "Professor Menezes",
    role: "Líder da Associação Menezes"
  },
  {
    name: "Professor Pantoja",
    role: "Instrutor Sênior Faixa Preta"
  },
  {
    name: "Professor Marcos",
    role: "Instrutor Faixa Preta"
  }
];

export function Professors() {
  return (
    <section id="professores" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-4"
          >
            NOSSOS MESTRES
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-red-600 mx-auto rounded-full"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative rounded-3xl overflow-hidden group border border-white/10 bg-neutral-900 shadow-2xl"
          >
            {/* Efeitos luxuosos de sobreposição */}
            <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 mix-blend-overlay transition-opacity duration-700 z-10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent opacity-90 z-10 pointer-events-none" />
            
            <img
              src="https://lh3.googleusercontent.com/d/1ko81Gk5lzBXMp53IDQEaLdEh-ZwkQ2u_"
              alt="Equipe Brotherhood"
              className="w-full aspect-[4/5] object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
            />
            
            <div className="absolute bottom-6 left-6 right-6 z-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white font-medium text-sm">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                Liderança Brotherhood
              </div>
            </div>
          </motion.div>

          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-neutral-400 text-lg mb-4"
            >
              Uma equipe unida pela disciplina e pelo respeito. Nossos professores dedicam suas vidas ao desenvolvimento técnico e pessoal de cada aluno, guiando-os na verdadeira essência da arte suave.
            </motion.p>

            {professors.map((prof, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="flex items-center gap-6 p-6 rounded-2xl bg-[#111111] border border-white/5 hover:border-red-500/30 transition-colors group cursor-default"
              >
                <div className="w-14 h-14 shrink-0 rounded-full bg-neutral-900 border border-white/10 flex items-center justify-center text-neutral-500 font-display font-bold text-xl group-hover:bg-red-600 group-hover:text-white group-hover:border-red-500 transition-all shadow-inner">
                  {prof.name.replace('Professor ', '').charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">{prof.name}</h3>
                  <p className="text-neutral-500 font-medium tracking-wide uppercase text-xs md:text-sm">
                    {prof.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
