import { motion } from 'motion/react';
import { Target, Users, Trophy, HeartPulse } from 'lucide-react';
import jiuJitsuRespectImage from '../assets/images/jiu_jitsu_respect_1783717128729.jpg';

const features = [
  {
    title: "Ambiente Saudável",
    description: "Priorizamos o respeito, a amizade e o desenvolvimento mútuo dentro e fora do tatame.",
    icon: <Users className="w-6 h-6 text-red-500" />,
    className: "md:col-span-2 md:row-span-2",
    image: jiuJitsuRespectImage
  },
  {
    title: "Foco Competitivo",
    description: "Preparação de alto nível para quem deseja testar seus limites em campeonatos.",
    icon: <Trophy className="w-6 h-6 text-red-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Acessibilidade",
    description: "Aulas estruturadas para todos, do iniciante ao avançado, com preços justos.",
    icon: <Target className="w-6 h-6 text-red-500" />,
    className: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Condicionamento",
    description: "Melhore sua força, flexibilidade e resistência cardiovascular em cada treino.",
    icon: <HeartPulse className="w-6 h-6 text-red-500" />,
    className: "md:col-span-2 md:row-span-1",
  }
];

export function BentoDifferentials() {
  return (
    <section id="diferenciais" className="py-24 relative z-10 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight"
          >
            MUITO MAIS QUE <br className="hidden md:block"/>
            <span className="text-neutral-500">UM TATAME.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-400 text-lg max-w-xl"
          >
            Na Brotherhood, nós forjamos caráter. Uma metodologia desenhada para transformar jovens e adultos.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative overflow-hidden rounded-3xl bg-[#111111] border border-white/5 p-8 group hover:border-white/10 transition-colors ${feature.className}`}
            >
              {feature.image && (
                <>
                  <div className="absolute inset-0 bg-black/60 z-10 transition-opacity group-hover:bg-black/40" />
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale transition-transform duration-700 group-hover:scale-105"
                  />
                </>
              )}
              
              <div className="relative z-20 flex flex-col h-full justify-between">
                <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
