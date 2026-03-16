import { motion } from 'framer-motion';
import { Building2, RefreshCw, PencilRuler, ClipboardList, HardHat, Eye, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { services } from '../data';
import { staggerContainer, fadeInUp } from '../lib/motion';

const iconMap: Record<string, React.ElementType> = {
  Building2,
  RefreshCw,
  PencilRuler,
  ClipboardList,
  HardHat,
  Eye,
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="container-custom text-center">
          <SectionLabel light>LAYANAN KAMI</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mt-4">
            Solusi Konstruksi Lengkap
          </h1>
          <p className="font-body text-concrete-light max-w-2xl mx-auto mt-6">
            Kami menyediakan berbagai layanan konstruksi profesional untuk memenuhi kebutuhan proyek Anda.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Building2;
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  id={service.slug}
                  className="bg-white rounded-sm shadow-md p-8 lg:p-10 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center flex-shrink-0">
                      <Icon size={32} className="text-gold" />
                    </div>
                    <div className="flex-1">
                      <h2 className="font-display text-2xl font-bold text-charcoal mb-4">
                        {service.title}
                      </h2>
                      <p className="font-body text-concrete leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                      <ul className="space-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3">
                            <CheckCircle2 size={18} className="text-gold flex-shrink-0" />
                            <span className="font-body text-charcoal-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-charcoal">
        <div className="container-custom text-center">
          <ScrollReveal>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-white mb-6">
              Butuh Solusi Khusus?
            </h2>
            <p className="font-body text-concrete-light max-w-2xl mx-auto mb-8">
              Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik untuk proyek Anda.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-body font-semibold px-8 py-4 rounded-sm transition-all duration-300"
            >
              Konsultasi Gratis
              <ArrowRight size={18} />
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
