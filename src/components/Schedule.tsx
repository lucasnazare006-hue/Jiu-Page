import { motion } from 'motion/react';
import { Clock, MapPin } from 'lucide-react';

const schedule = [
  {
    name: "Turma Kids",
    age: "4 a 12 anos",
    period: "Tarde",
    time: "16h00 — 17h00",
  },
  {
    name: "Turma Adulto",
    age: "13+ anos",
    period: "Noite",
    time: "19h30 — 21h30",
  }
];

export function Schedule() {
  return (
    <section id="turmas" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Info Side */}
          <div className="flex-1">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-display font-bold text-white mb-6"
            >
              PLANEJE SEU <br/>
              <span className="text-red-600">TREINO.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-neutral-400 text-lg mb-8 max-w-md"
            >
              Temos turmas para todas as faixas etárias, organizadas para o melhor aproveitamento do seu desenvolvimento físico e técnico.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#111111] border border-white/5">
                <MapPin className="w-6 h-6 text-red-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-white font-semibold mb-1">Localização</h4>
                  <p className="text-neutral-400 text-sm">
                    1758 Tv. Bom Jardim<br/>
                    Belém, PA
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Table Side */}
          <div className="flex-1">
            <div className="flex flex-col gap-4">
              {schedule.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#111111] border border-white/10 rounded-3xl p-6 md:p-8 hover:border-red-500/30 transition-colors group"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-neutral-300 text-xs font-semibold uppercase tracking-wider mb-4">
                        {item.period}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">{item.name}</h3>
                      <p className="text-neutral-500 text-sm">Idade: {item.age}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-red-400 bg-red-400/10 px-6 py-4 rounded-2xl">
                      <Clock className="w-5 h-5" />
                      <span className="font-mono font-semibold text-lg tracking-tight">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
