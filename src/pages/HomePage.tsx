import { HeroSection } from '../components/sections/HeroSection';
import { StatsSection } from '../components/sections/StatsSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { WhyUsSection } from '../components/sections/WhyUsSection';
import { TestimonialsSection } from '../components/sections/TestimonialsSection';
import { PartnersSection } from '../components/sections/PartnersSection';
import { CTASection } from '../components/sections/CTASection';

export const HomePage = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
    </>
  );
};
