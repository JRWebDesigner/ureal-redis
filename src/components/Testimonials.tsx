'use client'

import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
    {
      id: 1,
      name: 'María Fernández',
      comment: 'La universidad me brindó herramientas valiosas para mi desarrollo profesional. Los profesores son excelentes.',
      image: 'https://us.123rf.com/450wm/jemastock/jemastock1712/jemastock171209574/91945368-dise%C3%B1o-gr%C3%A1fico-del-ejemplo-del-vector-del-icono-del-avatar-del-perfil-de-la-mujer-de-negocios.jpg' // Reemplaza con tus imágenes
    },
    {
      id: 2,
      name: 'Carlos Gutiérrez',
      comment: 'Excelente ambiente académico. Las instalaciones son modernas y facilitan el aprendizaje.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ36s4sQLOF5bOdIVQ7dAx8BVu8Yf5M6oRJ7nF2Wlgjb-Bq8naMgDI7feBVe2e4Dws4M14&usqp=CAU'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      comment: 'La atención personalizada y las oportunidades de investigación son lo que más valoro de esta institución.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyjrcg3Kot7b9iCnm5cis0n9nKt3Q8JYccvBdU2runPMIhhQ3DtEjAtIjf9Sub5hI_tg&usqp=CAU'
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
                  <div className="bg-white p-8 rounded-lg shadow-md h-full flex flex-col">
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
