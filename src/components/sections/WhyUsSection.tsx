import { Shield, Clock, Award, Users, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionLabel } from '../ui/SectionLabel';
import BuildingAnimation from '../ui/BuildingAnimation';

const advantages = [
  {
    number: '01',
    icon: Shield,
    title: 'Kualitas Terjamin',
    description: 'Standar konstruksi internasional dengan material berkualitas tinggi dan pengawasan ketat di setiap tahap.',
  },
  {
    number: '02',
    icon: Clock,
    title: 'Tepat Waktu',
    description: 'Komitmen penyelesaian proyek sesuai jadwal dengan manajemen proyek profesional.',
  },
  {
    number: '03',
    icon: Award,
    title: 'Berpengalaman',
    description: '25+ tahun pengalaman menangani proyek skala kecil hingga besar di berbagai sektor.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Tim Ahli',
    description: 'Tenaga profesional bersertifikat dengan keahlian di bidang konstruksi dan manajemen.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export const WhyUsSection = () => {
  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <ScrollReveal>
            <div>
              <SectionLabel>MENGAPA MEMILIH KAMI</SectionLabel>
              
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6 leading-tight">
                Keunggulan yang Membedakan Kami
              </h2>
              
              <p className="font-body text-concrete-dark text-lg mb-10 max-w-xl">
                Kami mengutamakan kualitas, keamanan, dan kepuasan klien dalam setiap proyek yang kami kerjakan.
              </p>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                className="space-y-6"
              >
                {advantages.map((item) => (
                  <motion.div
                    key={item.number}
                    variants={itemVariants}
                    className="flex gap-4 group"
                  >
                    <div className="flex-shrink-0">
                      <span className="font-display text-4xl font-bold text-gold/30 group-hover:text-gold transition-colors duration-300">
                        {item.number}
                      </span>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-charcoal rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                        <item.icon size={24} className="text-gold group-hover:text-charcoal transition-colors duration-300" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-charcoal mb-1">
                          {item.title}
                        </h3>
                        <p className="font-body text-concrete text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.a
                href="/about"
                whileHover={{ x: 5 }}
                className="inline-flex items-center gap-2 mt-10 text-gold-dark font-body font-semibold hover:gap-4 transition-all duration-300"
              >
                Pelajari lebih lanjut
                <ArrowRight size={18} />
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Right - Building Animation */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Main Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <BuildingAnimation className="w-full aspect-square max-w-md mx-auto" />
              </motion.div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 lg:-left-12 bg-charcoal p-6 rounded-sm shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-sm flex items-center justify-center">
                    <Clock size={28} className="text-charcoal" />
                  </div>
                  <div>
                    <div className="font-display text-3xl font-bold text-gold">
                      98%
                    </div>
                    <div className="font-body text-concrete-light text-sm">
                      Proyek On-Time
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/20 rounded-sm -z-10" />
              <div className="absolute -bottom-4 right-8 w-32 h-32 bg-gold/10 rounded-sm -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
