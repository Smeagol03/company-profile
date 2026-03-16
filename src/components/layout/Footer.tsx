import { Link } from 'react-router';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import { companyInfo } from '../../data';

const footerLinks = {
  company: [
    { label: 'Tentang Kami', href: '/about' },
    { label: 'Tim Kami', href: '/about#team' },
    { label: 'Karir', href: '#' },
    { label: 'Berita', href: '#' },
  ],
  services: [
    { label: 'Konstruksi Gedung', href: '/services' },
    { label: 'Renovasi', href: '/services' },
    { label: 'Infrastruktur', href: '/services' },
    { label: 'Konsultasi', href: '/services' },
  ],
  projects: [
    { label: 'Gedung Komersial', href: '/projects' },
    { label: 'Perumahan', href: '/projects' },
    { label: 'Infrastruktur', href: '/projects' },
    { label: 'Industri', href: '/projects' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
  { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
  { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' },
  { icon: Youtube, href: companyInfo.social.youtube, label: 'YouTube' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-12 h-12 bg-gold rounded-sm flex items-center justify-center">
                <span className="font-display font-bold text-charcoal text-2xl">T</span>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                {companyInfo.name}
              </span>
            </Link>
            <p className="font-body text-concrete-light text-sm leading-relaxed mb-6">
              {companyInfo.description}
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-sm bg-charcoal-800 flex items-center justify-center text-concrete-light hover:bg-gold hover:text-charcoal transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-concrete-light hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="font-body text-concrete-light hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Kontak Kami</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="font-body text-concrete-light text-sm">{companyInfo.office}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="font-body text-concrete-light hover:text-gold transition-colors text-sm">
                  {companyInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="font-body text-concrete-light hover:text-gold transition-colors text-sm">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-charcoal-800">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-body text-concrete text-sm text-center sm:text-left">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-sm bg-gold text-charcoal flex items-center justify-center hover:bg-gold-light transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};
