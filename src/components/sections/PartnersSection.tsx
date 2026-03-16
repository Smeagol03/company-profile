import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionLabel } from '../ui/SectionLabel';

// Partner logos - using text-based placeholders
// In production, replace with actual logo images
const partners = [
  { id: '1', name: 'PT Wijaya Karya', abbr: 'WIKA' },
  { id: '2', name: 'Adhi Karya', abbr: 'ADHI' },
  { id: '3', name: 'PP Construction', abbr: 'PP' },
  { id: '4', name: 'Total Bangun Persada', abbr: 'TBP' },
  { id: '5', name: 'Nusa Raya Cipta', abbr: 'NRC' },
  { id: '6', name: 'Jaya Konstruksi', abbr: 'JAYA' },
  { id: '7', name: 'Pulau Intan', abbr: 'PI' },
  { id: '8', name: 'Acset Indonusa', abbr: 'ACSET' },
];

// Double the array for seamless infinite scroll
const duplicatedPartners = [...partners, ...partners];

export const PartnersSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-warm-offwhite overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <div className="text-center mb-12">
            <SectionLabel>MITRA & KLIEN</SectionLabel>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mt-4">
              Dipercaya oleh Perusahaan Terkemuka
            </h2>
          </div>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-offwhite to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track */}
        <motion.div
          className="flex gap-12"
          animate={{
            x: [0, -50 * partners.length * 4],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedPartners.map((partner, index) => (
            <motion.div
              key={`${partner.id}-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-40 h-24 bg-warm-white border border-charcoal/10 rounded-sm flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/10">
                {/* Logo Placeholder - Replace with actual image */}
                <div className="font-display text-xl font-bold text-charcoal/40 group-hover:text-gold transition-colors duration-300">
                  {partner.abbr}
                </div>
                <div className="font-body text-xs text-concrete group-hover:text-charcoal transition-colors duration-300 mt-1 text-center">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Second Row - Reverse Direction */}
      <div className="relative mt-8">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-offwhite to-transparent z-10 pointer-events-none" />

        {/* Scrolling Track - Reverse */}
        <motion.div
          className="flex gap-12"
          animate={{
            x: [-50 * partners.length * 4, 0],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {[...duplicatedPartners].reverse().map((partner, index) => (
            <motion.div
              key={`${partner.id}-reverse-${index}`}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-40 h-24 bg-warm-white border border-charcoal/10 rounded-sm flex flex-col items-center justify-center px-4 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:shadow-gold/10">
                <div className="font-display text-xl font-bold text-charcoal/40 group-hover:text-gold transition-colors duration-300">
                  {partner.abbr}
                </div>
                <div className="font-body text-xs text-concrete group-hover:text-charcoal transition-colors duration-300 mt-1 text-center">
                  {partner.name}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Stats Row */}
      <div className="container-custom mt-16">
        <ScrollReveal delay={0.2}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: 'Mitra Bisnis' },
              { value: '100+', label: 'Klien Korporasi' },
              { value: '25+', label: 'Tahun Kolaborasi' },
              { value: '98%', label: 'Tingkat Kepuasan' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl lg:text-4xl font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-concrete-dark">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
