import { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ScrollReveal } from "../ui/ScrollReveal";
import { SectionLabel } from "../ui/SectionLabel";
import { testimonials } from "../../data";

// Import Swiper styles
import "swiper/swiper-bundle.css";

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-gold fill-gold" : "text-charcoal-600"}
        />
      ))}
    </div>
  );
};

export const TestimonialsSection = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="section-padding bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <SectionLabel light>TESTIMONI KLIEN</SectionLabel>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-warm-white mt-4 max-w-3xl mx-auto leading-tight">
              Apa Kata Klien Kami
            </h2>
          </div>
        </ScrollReveal>

        <div className="relative max-w-4xl mx-auto">
          {/* Custom Navigation Buttons */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-16 z-20 w-12 h-12 shrink-0 bg-charcoal-700 hover:bg-gold border border-charcoal-600 hover:border-gold rounded-full flex items-center justify-center transition-colors duration-300 group active:scale-95"
            aria-label="Previous testimonial"
          >
            <ChevronLeft
              size={24}
              className="text-gold group-hover:text-charcoal transition-colors"
            />
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-16 z-20 w-12 h-12 shrink-0 bg-charcoal-700 hover:bg-gold border border-charcoal-600 hover:border-gold rounded-full flex items-center justify-center transition-colors duration-300 group active:scale-95"
            aria-label="Next testimonial"
          >
            <ChevronRight
              size={24}
              className="text-gold group-hover:text-charcoal transition-colors"
            />
          </button>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass:
                "swiper-pagination-bullet !w-3 !h-3 !bg-charcoal-600 !opacity-100 !rounded-full",
              bulletActiveClass: "!bg-gold !w-8 !rounded-full",
            }}
            loop={true}
            className="!pb-14"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-charcoal-800/50 border border-charcoal-700 rounded-sm p-8 lg:p-12"
                >
                  {/* Quote Icon */}
                  <div className="flex justify-center mb-8">
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                      <Quote size={32} className="text-gold" />
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center mb-6">
                    <StarRating rating={testimonial.rating} />
                  </div>

                  {/* Quote Text */}
                  <blockquote className="text-center mb-8">
                    <p className="font-display text-xl lg:text-2xl text-warm-white/90 italic leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                  </blockquote>

                  {/* Client Info */}
                  <div className="flex flex-col items-center">
                    {/* Avatar placeholder */}
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-4">
                      <span className="font-display text-2xl font-bold text-gold">
                        {testimonial.clientName.charAt(0)}
                      </span>
                    </div>

                    <h4 className="font-display text-lg font-bold text-warm-white">
                      {testimonial.clientName}
                    </h4>
                    <p className="font-body text-concrete-light text-sm">
                      {testimonial.clientTitle}
                    </p>
                    <p className="font-body text-gold text-sm mt-1">
                      {testimonial.company}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
