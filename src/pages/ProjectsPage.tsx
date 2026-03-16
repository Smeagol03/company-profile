import { useState } from 'react';
import { ProjectCard } from '../components/project/ProjectCard';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { allProjects } from '../data';
import type { Project } from '../types';

const categories = ['Semua', 'Gedung', 'Infrastruktur', 'Renovasi', 'Industri'];

export const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProjects = activeCategory === 'Semua'
    ? allProjects
    : allProjects.filter((project: Project) =>
        project.category.toLowerCase() === activeCategory.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="container-custom text-center">
          <SectionLabel light>PORTOFOLIO</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mt-4">
            Proyek Kami
          </h1>
          <p className="font-body text-concrete-light max-w-2xl mx-auto mt-6">
            Lihat berbagai proyek konstruksi yang telah kami selesaikan dengan kualitas terbaik.
          </p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Tabs */}
          <ScrollReveal>
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2.5 rounded-sm font-body font-semibold text-sm transition-all duration-300 ${
                    activeCategory === category
                      ? 'bg-gold text-charcoal'
                      : 'bg-charcoal-100 text-charcoal hover:bg-charcoal-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project, index: number) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="font-body text-concrete text-lg">
                Tidak ada proyek dalam kategori ini.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
