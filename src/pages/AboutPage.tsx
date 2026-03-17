import { motion } from "framer-motion";
import { Target, Eye, Award, Users, Flag, Rocket, Trophy, Building, CheckCircle } from "lucide-react";
import { SectionLabel } from "../components/ui/SectionLabel";
import { ScrollReveal } from "../components/ui/ScrollReveal";
import { companyInfo, team } from "../data";
import { staggerContainer, fadeInUp } from "../lib/motion";

const milestones = [
  {
    year: 1999,
    title: "Pendirian Perusahaan",
    description: "Tabranitect didirikan sebagai perusahaan konstruksi skala menengah dengan fokus pada kualitas dan integritas.",
    icon: Flag,
  },
  {
    year: 2005,
    title: "Ekspansi Bisnis",
    description: "Memperluas layanan ke sektor infrastruktur dan industrial, membuka cabang di 3 kota besar.",
    icon: Rocket,
  },
  {
    year: 2015,
    title: "Sertifikasi ISO",
    description: "Mendapatkan sertifikasi ISO 9001 untuk manajemen mutu dan ISO 14001 untuk manajemen lingkungan.",
    icon: Trophy,
  },
  {
    year: 2020,
    title: "Digital Transformation",
    description: "Mengadopsi teknologi BIM dan sistem manajemen proyek digital untuk efisiensi dan akurasi.",
    icon: Building,
  },
  {
    year: 2024,
    title: "500+ Proyek",
    description: "Berhasil menyelesaikan lebih dari 500 proyek konstruksi dengan tingkat kepuasan klien 98%.",
    icon: CheckCircle,
  },
];

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-warm-white">
      {/* Hero */}
      <section className="bg-charcoal py-20 lg:py-32">
        <div className="container-custom text-center">
          <SectionLabel light>TENTANG KAMI</SectionLabel>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mt-4">
            {companyInfo.name}
          </h1>
          <p className="font-body text-concrete-light max-w-2xl mx-auto mt-6">
            {companyInfo.description}
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <ScrollReveal variant="fadeInLeft">
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-lg">
                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6">
                  <Target size={28} className="text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-4">
                  Visi
                </h2>
                <p className="font-body text-concrete leading-relaxed">
                  Menjadi perusahaan konstruksi terdepan di Indonesia yang
                  dikenal karena kualitas, inovasi, dan kepuasan pelanggan.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fadeInRight" delay={0.2}>
              <div className="bg-white p-8 lg:p-10 rounded-sm shadow-lg">
                <div className="w-14 h-14 bg-gold/10 rounded-sm flex items-center justify-center mb-6">
                  <Eye size={28} className="text-gold" />
                </div>
                <h2 className="font-display text-2xl font-bold text-charcoal mb-4">
                  Misi
                </h2>
                <p className="font-body text-concrete leading-relaxed">
                  Memberikan layanan konstruksi berkualitas tinggi dengan
                  standar keselamatan terbaik, tepat waktu, dan sesuai anggaran.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel light>PERJALANAN KAMI</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-white mt-4">
              Sejarah Perusahaan
            </h2>
            <p className="font-body text-concrete-light max-w-2xl mx-auto mt-4">
              Perjalanan 25 tahun membangun kepercayaan dan kualitas dalam industri konstruksi Indonesia
            </p>
          </ScrollReveal>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-charcoal-600 hidden lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isLeft = index % 2 === 0;
                
                return (
                  <ScrollReveal key={milestone.year} delay={index * 0.15}>
                    <div className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className={`w-full lg:w-1/2 ${isLeft ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'}`}>
                        <motion.div
                          whileHover={{ y: -5 }}
                          className={`bg-charcoal-800 border border-charcoal-700 p-6 lg:p-8 rounded-sm hover:border-gold/30 transition-all duration-300 ${isLeft ? 'lg:ml-auto' : 'lg:mr-auto'} lg:max-w-md`}
                        >
                          <span className="font-display text-4xl lg:text-5xl font-bold text-gold block mb-2">
                            {milestone.year}
                          </span>
                          <h3 className="font-display text-xl lg:text-2xl font-bold text-warm-white mb-3">
                            {milestone.title}
                          </h3>
                          <p className="font-body text-concrete-light leading-relaxed">
                            {milestone.description}
                          </p>
                        </motion.div>
                      </div>

                      {/* Center Icon */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-16 h-16 bg-gold rounded-full flex items-center justify-center shadow-lg shadow-gold/20"
                        >
                          <Icon size={28} className="text-charcoal" />
                        </motion.div>
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden lg:block w-1/2" />
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="section-padding">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel>TIM KAMI</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-charcoal mt-4">
              Dipimpin oleh Profesional Berpengalaman
            </h2>
          </ScrollReveal>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {team.map((member) => (
              <motion.div key={member.id} variants={fadeInUp}>
                <div className="group text-center">
                  <div className="relative w-48 h-48 mx-auto mb-6 overflow-hidden rounded-full">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal">
                    {member.name}
                  </h3>
                  <p className="font-body text-gold text-sm font-semibold mt-1">
                    {member.position}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-charcoal">
        <div className="container-custom">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel light>NILAI-NILAI KAMI</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-warm-white mt-4">
              Prinsip yang Kami Junjung
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Kualitas",
                desc: "Komitmen untuk menghasilkan karya terbaik",
              },
              {
                icon: Users,
                title: "Integritas",
                desc: "Bekerja dengan jujur dan transparan",
              },
              {
                icon: Target,
                title: "Inovasi",
                desc: "Terus berkembang dengan teknologi terbaru",
              },
            ].map((value) => (
              <ScrollReveal key={value.title}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold/10 rounded-sm flex items-center justify-center mx-auto mb-6">
                    <value.icon size={32} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-warm-white mb-2">
                    {value.title}
                  </h3>
                  <p className="font-body text-concrete-light">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
