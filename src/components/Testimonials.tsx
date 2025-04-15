'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: "María Fernández",
    role: "Estudiante de Comercio Internacional",
    quote: "La Universidad Real me ha brindado herramientas prácticas que he podido aplicar inmediatamente en mi trabajo. Los profesores son expertos en sus campos y siempre están dispuestos a ayudar.",
    image: "/images/testimonial1.jpg"
  },
  {
    name: "Juan Pérez",
    role: "Egresado de Ingeniería de Sistemas",
    quote: "Gracias a las conexiones que hice en la universidad, conseguí mi primer trabajo antes de graduarme. El enfoque práctico de las clases hace una gran diferencia.",
    image: "/images/testimonial2.jpg"
  },
  {
    name: "Ana Rodríguez",
    role: "Estudiante de Mercadotecnia",
    quote: "El ambiente académico es increíble. He crecido tanto personal como profesionalmente. Los proyectos reales con empresas afiliadas a la Cámara son una oportunidad única.",
    image: "/images/testimonial3.jpg"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Comentarios de nuestros estudiantes</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              }
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="bg-light p-8 rounded-xl h-full">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-dark">{testimonial.name}</h3>
                      <p className="text-primary text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray italic">"{testimonial.quote}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  )
}
