import { Link } from 'react-router';
import { ArrowRight, Check } from 'lucide-react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { SectionLabel } from '../ui/SectionLabel';
import { companyInfo } from '../../data';

const advantages = [
  'Tim profesional berpengalaman 25+ tahun',
  'Kualitas konstruksi terbaik dengan standar internasional',
  'Pengerjaan tepat waktu sesuai jadwal yang disepakati',
];

export const AboutSection = () => {
  return (
    <section className="section-padding bg-warm-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal variant="fadeInLeft">
            <SectionLabel>TENTANG KAMI</SectionLabel>
            
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6 leading-tight">
              Membangun Masa Depan dengan Fondasi yang Kuat
            </h2>
            
            <p className="font-body text-concrete text-lg leading-relaxed mb-8">
              Sejak {companyInfo.founded}, {companyInfo.name} telah menjadi pilihan utama 
              dalam industri konstruksi Indonesia. Dengan pengalaman lebih dari 25 tahun, 
              kami berkomitmen untuk memberikan hasil terbaik dalam setiap proyek yang kami kerjakan.
            </p>

            <ul className="space-y-4 mb-8">
              {advantages.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-gold" />
                  </div>
                  <span className="font-body text-charcoal">{item}</span>
                </li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-gold font-body font-semibold hover:gap-4 transition-all duration-300"
            >
              Selengkapnya tentang kami
              <ArrowRight size={18} />
            </Link>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal variant="fadeInRight" delay={0.2}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-sm overflow-hidden">
                <img
                  src="https://picsum.photos/seed/about-team/800/600"
                  alt="Tabranitect team"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-sm -z-10 hidden lg:block" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
