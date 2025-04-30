'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
      id: 1,
      name: 'Joselin Martinez',
      comment: 'Estudiar en la Universidad Real ha sido una experiencia transformadora. No solo he adquirido conocimientos actualizados y prácticos, sino que también he sentido un verdadero acompañamiento en mi crecimiento personal y profesional.  ¡Orgullosamente parte de la Universidad Real!"',
      image: '/Images/foto1.jpg' // Reemplaza con tus imágenes
    },
    {
      id: 2,
      name: 'Andres Vasquez',
      comment: 'Los que me gusta es que la enseñanza es personalizada y hace esto que aprenda bastante, Agradezco el compromiso de los docentes, la innovación en las clases  que distingue a esta institución',
      image: '/Images/foto2.jpg'
    },
    {
      id: 3,
      name: 'María Quispe',
      comment: 'Las clases de la universidad son muy amenas  excelentes docentes !!! Felicidades UREAL ',
      image: '/Images/foto3.jpg'
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
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 3
            }
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              {({ isActive }) => (
                <div className={`h-full p-6 transition-transform duration-300 ${isActive ? 'scale-[1,2]' : 'scale-[1]'}`}>
                  <div className="bg-white p-8 rounded-lg shadow-xl h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    </div>
                    <p className="text-gray-600 mt-4 flex-grow">
                      {testimonial.comment}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        </motion.div>
      </div>
    </section>
  )
}
