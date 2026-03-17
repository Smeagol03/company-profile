import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Building2, Clock, Tag, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { SectionLabel } from '../components/ui/SectionLabel';
import { allProjects } from '../data';
import type { Project } from '../types';

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const project = allProjects.find((p: Project) => p.slug === slug);
  
  if (!project) {
    return <Navigate to="/projects" replace />;
  }
  
  // Get related projects (same category, exclude current)
  const relatedProjects = allProjects
    .filter((p: Project) => p.category === project.category && p.id !== project.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero with Project Image */}
      <section className="relative h-[60vh] min-h-[500px]">
        <div className="absolute inset-0">
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-charcoal/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-end pb-12">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm mb-4 text-warm-white/80">
                <Link to="/" className="hover:text-gold transition-colors">Beranda</Link>
                <ChevronRight size={16} />
                <Link to="/projects" className="hover:text-gold transition-colors">Proyek</Link>
                <ChevronRight size={16} />
                <span className="text-gold">{project.title}</span>
              </nav>
              
              {/* Category Badge */}
              <span className="inline-block bg-gold/20 text-gold font-body text-sm font-semibold px-4 py-1.5 rounded-sm mb-4 capitalize">
                {project.category}
              </span>
              
              {/* Title */}
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-warm-white max-w-4xl">
                {project.title}
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Info & Description */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <SectionLabel>TENTANG PROYEK</SectionLabel>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-charcoal mt-4 mb-6">
                  Deskripsi Proyek
                </h2>
                <p className="font-body text-concrete-dark text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
              </ScrollReveal>
              
              {/* Gallery */}
              {project.images.length > 1 && (
                <ScrollReveal delay={0.1}>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-4">Galeri Proyek</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {project.images.slice(1).map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="aspect-video overflow-hidden rounded-sm"
                      >
                        <img
                          src={image}
                          alt={`${project.title} - ${index + 2}`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
              
              {/* Tags */}
              <ScrollReveal delay={0.2}>
                <div className="mt-8 pt-8 border-t border-charcoal/10">
                  <h4 className="font-display text-lg font-bold text-charcoal mb-3">Tags</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-charcoal-100 text-charcoal-700 font-body text-sm px-3 py-1.5 rounded-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
            
            {/* Sidebar Info */}
            <div className="lg:col-span-1">
              <ScrollReveal>
                <div className="bg-charcoal p-6 lg:p-8 rounded-sm sticky top-24">
                  <h3 className="font-display text-xl font-bold text-warm-white mb-6">
                    Informasi Proyek
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building2 size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-concrete-light text-sm">Klien</p>
                        <p className="font-body text-warm-white font-semibold">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-concrete-light text-sm">Lokasi</p>
                        <p className="font-body text-warm-white font-semibold">{project.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Calendar size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-concrete-light text-sm">Tahun</p>
                        <p className="font-body text-warm-white font-semibold">{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Clock size={20} className="text-gold flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-body text-concrete-light text-sm">Durasi</p>
                        <p className="font-body text-warm-white font-semibold">{project.duration}</p>
                      </div>
                    </div>
                    
                    {project.value && (
                      <div className="flex items-start gap-3">
                        <Tag size={20} className="text-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="font-body text-concrete-light text-sm">Nilai Proyek</p>
                          <p className="font-body text-gold font-bold">{project.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-charcoal-700">
                    <Link
                      to="/contact"
                      className="block w-full text-center bg-gold hover:bg-gold-light text-charcoal font-body font-semibold py-3 rounded-sm transition-colors"
                    >
                      Konsultasi Serupa
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="section-padding bg-charcoal-50">
          <div className="container-custom">
            <ScrollReveal>
              <div className="text-center mb-12">
                <SectionLabel>PROYEK TERKAIT</SectionLabel>
                <h2 className="font-display text-3xl font-bold text-charcoal mt-4">
                  Proyek Lainnya
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject, index) => (
                <ScrollReveal key={relatedProject.id} delay={index * 0.1}>
                  <Link to={`/projects/${relatedProject.slug}`} className="group block">
                    <div className="aspect-video overflow-hidden rounded-sm mb-4">
                      <img
                        src={relatedProject.images[0]}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-gold font-body text-sm font-semibold capitalize">
                      {relatedProject.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-charcoal mt-1 group-hover:text-gold transition-colors">
                      {relatedProject.title}
                    </h3>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back Button */}
      <section className="py-8 bg-warm-white border-t border-charcoal/10">
        <div className="container-custom">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-charcoal hover:text-gold transition-colors font-body font-semibold"
          >
            <ArrowLeft size={20} />
            Kembali ke Daftar Proyek
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetailPage;
