import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import { SectionLabel } from '../components/ui/SectionLabel';
import { ScrollReveal } from '../components/ui/ScrollReveal';
import { companyInfo } from '../data';

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="container-custom text-center">
          <SectionLabel light>HUBUNGI KAMI</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mt-4">
            Mari Mulai Percakapan
          </h1>
          <p className="font-body text-concrete-light max-w-2xl mx-auto mt-6">
            Kami siap membantu mewujudkan proyek konstruksi Anda. Hubungi kami untuk konsultasi gratis.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Telepon', content: companyInfo.phone, href: `tel:${companyInfo.phone}` },
              { icon: Mail, title: 'Email', content: companyInfo.email, href: `mailto:${companyInfo.email}` },
              { icon: MapPin, title: 'Alamat', content: companyInfo.office, href: '#' },
              { icon: Clock, title: 'Jam Operasional', content: companyInfo.hours, href: '#' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <a
                  href={item.href}
                  className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow block text-center group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-gold transition-colors">
                    <item.icon size={24} className="text-gold group-hover:text-charcoal transition-colors" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-1">{item.title}</h3>
                  <p className="font-body text-concrete text-sm">{item.content}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-charcoal-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <ScrollReveal>
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-lg">
                <h2 className="font-display text-2xl font-bold text-charcoal mb-2">Kirim Pesan</h2>
                <p className="font-body text-concrete mb-8">Isi form di bawah ini dan kami akan segera menghubungi Anda.</p>

                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 size={64} className="text-green-500 mb-4" />
                    <h3 className="font-display text-xl font-bold text-charcoal mb-2">Pesan Terkirim!</h3>
                    <p className="font-body text-concrete">Terima kasih telah menghubungi kami. Kami akan segera merespons.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">Nama Lengkap</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-concrete/30 rounded-sm font-body text-charcoal focus:outline-none focus:border-gold transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-concrete/30 rounded-sm font-body text-charcoal focus:outline-none focus:border-gold transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">Nomor Telepon</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-concrete/30 rounded-sm font-body text-charcoal focus:outline-none focus:border-gold transition-colors"
                          placeholder="+62 812 3456 7890"
                        />
                      </div>
                      <div>
                        <label className="block font-body text-sm font-semibold text-charcoal mb-2">Subjek</label>
                        <select
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-concrete/30 rounded-sm font-body text-charcoal focus:outline-none focus:border-gold transition-colors bg-white"
                        >
                          <option value="">Pilih Subjek</option>
                          <option value="konsultasi">Konsultasi Proyek</option>
                          <option value="penawaran">Minta Penawaran</option>
                          <option value="kerjasama">Kerjasama</option>
                          <option value="lainnya">Lainnya</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block font-body text-sm font-semibold text-charcoal mb-2">Pesan</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-concrete/30 rounded-sm font-body text-charcoal focus:outline-none focus:border-gold transition-colors resize-none"
                        placeholder="Ceritakan tentang proyek Anda..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold-light text-charcoal font-body font-semibold py-4 rounded-sm transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Kirim Pesan
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal delay={0.2}>
              <div className="bg-white p-2 rounded-sm shadow-lg h-full min-h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sMonas!5e0!3m2!1sid!2sid!4v1699999999999!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '500px', borderRadius: '2px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tabranitect Office Location"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};
