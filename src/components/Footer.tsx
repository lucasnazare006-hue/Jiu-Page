import { motion } from 'motion/react';
import { Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#050505] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center justify-center text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-display font-bold text-white mb-8"
          >
            PRONTO PARA O <br />
            <span className="text-neutral-500">PRÓXIMO PASSO?</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="https://wa.me/5591985862710"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Falar no WhatsApp
            </a>
            <a
              href="https://www.instagram.com/ct_brotherhood/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              Seguir @ct_brotherhood
            </a>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-neutral-500 text-sm">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <span className="font-display font-bold text-white uppercase tracking-wider text-base">
              Brotherhood
            </span>
          </div>
          <p>© 2026 Jiu Jitsu. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
