import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Users, Award, Clock, TrendingUp } from "lucide-react";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { companyInfo } from "../../data";

const advantages = [
  {
    title: "Tim Profesional",
    description: "25+ tahun pengalaman di industri konstruksi",
    icon: Users,
  },
  {
    title: "Kualitas Terjamin",
    description: "Standar internasional dengan sertifikasi ISO",
    icon: Award,
  },
  {
    title: "Tepat Waktu",
    description: "98% proyek selesai sesuai jadwal",
    icon: Clock,
  },
  {
    title: "Terpercaya",
    description: "500+ klien puas dari berbagai sektor",
    icon: TrendingUp,
  },
];

export const AboutSection = () => {
  return (
    <section className="section-padding bg-warm-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #1A1A18 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <ScrollReveal>
            <SectionLabel>TENTANG KAMI</SectionLabel>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal mt-4 mb-6 leading-tight">
              Membangun Masa Depan dengan Fondasi yang Kuat
            </h2>

            <p className="font-body text-concrete-dark text-lg leading-relaxed mb-8">
              Seit {companyInfo.founded},{" "}
              <strong className="text-charcoal">{companyInfo.name}</strong>{" "}
              telah menjadi pilihan utama dalam industri konstruksi Indonesia.
              Dengan pengalaman lebih dari 25 tahun dan lebih dari 500 proyek
              yang berhasil diselesaikan, kami berkomitmen memberikan hasil
              terbaik dalam setiap pekerjaan.
            </p>

            {/* Advantages - Simple List */}
            <ul className="space-y-4 mb-8">
              {advantages.map((advantage) => (
                <motion.li
                  key={advantage.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-sm flex items-center justify-center shrink-0">
                    <advantage.icon size={20} className="text-gold" />
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-charcoal">
                      {advantage.title}
                    </h4>
                    <p className="font-body text-sm text-concrete">
                      {advantage.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-charcoal text-warm-white px-6 py-3 rounded-sm font-body font-semibold hover:bg-gold hover:text-charcoal transition-all duration-300 group"
            >
              Selengkapnya tentang kami
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </ScrollReveal>

          {/* Image with Decorative Elements */}
          <ScrollReveal delay={0.2}>
            <div className="relative">
              {/* Main Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="aspect-aspect-4/3 rounded-sm overflow-hidden shadow-2xl">
                  <img
                    src="https://picsum.photos/seed/about-team/800/600"
                    alt="Tim konstruksi profesional Tabranitect"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-charcoal/40 via-transparent to-transparent" />
                </div>
              </motion.div>

              {/* Floating Card - Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute -bottom-6 -left-6 lg:-left-8 bg-white p-5 rounded-sm shadow-2xl z-20 hidden sm:block"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-sm flex items-center justify-center">
                    <Award size={28} className="text-charcoal" />
                  </div>
                  <div>
                    <div className="font-display text-2xl font-bold text-charcoal">
                      25+
                    </div>
                    <div className="font-body text-xs text-concrete">
                      Tahun Pengalaman
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Projects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -top-4 -right-4 lg:-right-6 bg-charcoal p-4 rounded-sm shadow-2xl z-20 hidden lg:block"
              >
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gold">
                    500+
                  </div>
                  <div className="font-body text-xs text-concrete-light">
                    Proyek Selesai
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold/20 rounded-sm -z-10" />
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gold/5 rounded-sm -z-10" />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
