import { Link } from 'react-router';
import { Building2, RefreshCw, PencilRuler, ClipboardList, HardHat, Eye, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionLabel } from '../ui/SectionLabel';
import { services } from '../../data';
import { staggerContainer, fadeInUp } from '../../lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  RefreshCw,
  PencilRuler,
  ClipboardList,
  HardHat,
  Eye,
};

export const ServicesSection = () => {
  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <SectionLabel light>LAYANAN KAMI</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4 mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white max-w-2xl leading-tight">
              Solusi Konstruksi Lengkap untuk Kebutuhan Anda
            </h2>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-4 transition-all duration-300"
            >
              Lihat semua layanan
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon] || Building2;
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="group bg-charcoal-800/50 border border-charcoal-700 hover:border-gold/50 rounded-sm p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/10"
              >
                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-gold group-hover:text-charcoal transition-colors" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-warm-white mb-3">
                  {service.title}
                </h3>
                
                <p className="font-body text-concrete-light text-sm leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                <Link
                  to={`/services#${service.slug}`}
                  className="inline-flex items-center gap-2 text-gold font-body text-sm font-semibold group-hover:gap-3 transition-all duration-300"
                >
                  Pelajari
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
