import { Link } from 'react-router';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '../ui/Badge';
import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
  variant?: 'default' | 'featured';
}

export const ProjectCard = ({ project, variant = 'default' }: ProjectCardProps) => {
  const isFeatured = variant === 'featured';

  return (
    <article className="group relative overflow-hidden rounded-sm bg-white shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link to={`/projects/${project.slug}`} className="block">
        {/* Image */}
        <div className={`relative overflow-hidden ${isFeatured ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge variant="gold">
              {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </Badge>
          </div>

          {/* Hover Content */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
              <ArrowRight size={24} className="text-charcoal" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-bold text-charcoal mb-2 group-hover:text-gold transition-colors">
            {project.title}
          </h3>
          
          <p className="font-body text-concrete text-sm mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="flex items-center gap-4 text-concrete text-xs">
            <span className="flex items-center gap-1">
              <MapPin size={14} className="text-gold" />
              {project.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} className="text-gold" />
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};
