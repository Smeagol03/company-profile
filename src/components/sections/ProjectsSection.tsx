import { Link } from 'react-router';
import { ArrowRight, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionLabel } from '../ui/SectionLabel';
import { Badge } from '../ui/Badge';
import { featuredProjects } from '../../data';
import { staggerContainer, fadeInUp } from '../../lib/motion';

export const ProjectsSection = () => {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <ScrollReveal>
          <SectionLabel>PROYEK UNGGULAN</SectionLabel>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mt-4 mb-12">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal max-w-2xl leading-tight">
              Portofolio Proyek Terbaik Kami
            </h2>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-4 transition-all duration-300"
            >
              Lihat semua proyek
              <ArrowRight size={18} />
            </Link>
          </div>
        </ScrollReveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeInUp}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
            >
              <Link to={`/projects/${project.slug}`} className="block">
                {/* Image */}
                <div className={`relative overflow-hidden ${
                  index === 0 ? 'aspect-[16/9] lg:aspect-[16/10]' : 'aspect-[4/3]'
                }`}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <Badge variant="gold" className="self-start mb-3">
                      {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </Badge>
                    
                    <h3 className={`font-display font-bold text-warm-white mb-2 transition-transform duration-300 group-hover:-translate-y-1 ${
                      index === 0 ? 'text-2xl lg:text-3xl' : 'text-xl'
                    }`}>
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-concrete-light text-sm">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {project.year}
                      </span>
                    </div>

                    {/* Hover Arrow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-50 group-hover:scale-100">
                      <ArrowRight size={24} className="text-charcoal" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
