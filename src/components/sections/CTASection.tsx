import { Link } from 'react-router';
import { ArrowRight, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';

export const CTASection = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 168, 67, 0.1) 35px, rgba(212, 168, 67, 0.1) 70px)'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-warm-white leading-tight mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            
            <p className="font-body text-lg sm:text-xl text-concrete-light max-w-2xl mx-auto mb-10">
              Hubungi kami sekarang untuk konsultasi gratis. Tim ahli kami siap membantu mewujudkan visi konstruksi Anda.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-body font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
              >
                Konsultasi Gratis
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+622112345678"
                className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-body font-semibold px-8 py-4 rounded-sm transition-all duration-300"
              >
                <Phone size={18} />
                Hubungi Kami
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Decorative Elements */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
          className="absolute top-10 right-10 w-32 h-32 border border-gold/20 rounded-full hidden lg:block"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          className="absolute bottom-10 left-10 w-48 h-48 border border-gold/10 rounded-full hidden lg:block"
        />
      </div>
    </section>
  );
};
