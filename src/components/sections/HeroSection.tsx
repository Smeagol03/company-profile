import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { staggerContainer, heroText } from "../../lib/motion";
import { companyInfo } from "../../data";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  
  // Parallax effect - background moves slower than scroll
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 h-[120%]"
        style={{ y: backgroundY }}
      >
        <img
          src="https://picsum.photos/seed/construction-hero/1920/1080"
          alt="Construction background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
        <div className="absolute inset-0 bg-linear-to-b from-charcoal/50 via-transparent to-charcoal" />
      </motion.div>

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Content */}
      <motion.div 
        className="relative z-10 container-custom text-center"
        style={{ opacity }}
      >
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-4xl mx-auto"
        >
          {/* Label */}
          <motion.p
            variants={heroText}
            className="font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-gold mb-6"
          >
            Perusahaan Konstruksi Terpercaya
          </motion.p>

          {/* Headline */}
          <motion.h1
            variants={heroText}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white leading-tight mb-6"
          >
            {companyInfo.tagline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={heroText}
            className="font-body text-lg sm:text-xl text-concrete-light max-w-2xl mx-auto mb-10"
          >
            {companyInfo.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={heroText}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-body font-semibold px-8 py-4 rounded-sm transition-all duration-300 hover:shadow-lg hover:shadow-gold/25"
            >
              Konsultasi Gratis
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-body font-semibold px-8 py-4 rounded-sm transition-all duration-300"
            >
              Lihat Proyek
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
