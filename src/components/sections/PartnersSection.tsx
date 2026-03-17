import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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

// Duplicate for seamless loop - total 2 sets
const marqueeItems = [...partners, ...partners];

export const PartnersSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="py-16 lg:py-20 bg-warm-offwhite overflow-hidden">
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

      {/* Marquee Row 1 - Moving Left */}
      <MarqueeRow items={marqueeItems} direction="left" speed={30} pause={!isInView} />

      {/* Marquee Row 2 - Moving Right */}
      <div className="mt-8">
        <MarqueeRow items={[...partners].reverse().concat([...partners].reverse())} direction="right" speed={35} pause={!isInView} />
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

// Marquee Row Component with CSS-based infinite scroll
interface MarqueeRowProps {
  items: typeof partners;
  direction: 'left' | 'right';
  speed: number;
  pause: boolean;
}

const MarqueeRow = ({ items, direction, speed, pause }: MarqueeRowProps) => {
  // Calculate total width: item width (160px) + gap (48px) * number of items
  // We have 2 sets of items, so animate from 0 to -50% of totalWidth
  const itemWidth = 160; // w-40 = 10rem = 160px
  const gap = 48; // gap-12 = 3rem = 48px
  const totalWidth = items.length * (itemWidth + gap);
  const halfWidth = totalWidth / 2; // Width of one set

  const initialX = direction === 'left' ? 0 : -halfWidth;
  const animateX = direction === 'left' ? -halfWidth : 0;

  return (
    <div className="relative">
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-offwhite to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-offwhite to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <motion.div
        className="flex"
        style={{ gap: '48px' }}
        initial={{ x: initialX }}
        animate={pause ? { x: initialX } : { x: animateX }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {items.map((partner, index) => (
          <motion.div
            key={`${partner.id}-${index}`}
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
  );
};

export default PartnersSection;