"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const noticias = [
  {
    id: 1,
    imagen: "/Images/not1.jpg",
    texto: "Los estudiantes del último semestre de la carrera de Comunicación Audiovisual, bajo la supervisión del Lic. César Ajpi, están desarrollando una destacada labor durante sus prácticas profesionales en el canal televisivo RTP"
  },
  {
    id: 2,
    imagen: "/Images/not1.jpg",
    texto: "Los estudiantes del último semestre de la carrera de Comunicación Audiovisual, bajo la supervisión del Lic. César Ajpi, están desarrollando una destacada labor durante sus prácticas profesionales en el canal televisivo RTP"
  },
  {
    id: 3,
    imagen: "/Images/not1.jpg",
    texto: "Los estudiantes del último semestre de la carrera de Comunicación Audiovisual, bajo la supervisión del Lic. César Ajpi, están desarrollando una destacada labor durante sus prácticas profesionales en el canal televisivo RTP"
  }
];

export default function NoticiasCarrusel() {
  useEffect(() => {
    // Fix for navigation elements rendering late
    const navNext = document.querySelector('.swiper-button-next');
    const navPrev = document.querySelector('.swiper-button-prev');
    navNext?.classList.add('!text-black', '!right-[-40px]');
    navPrev?.classList.add('!text-black', '!left-[-40px]');
  }, []);

  return (
    <>
      <h2 className='font-bold text-center text-3xl mt-16'>Últimas Noticias</h2>
      <div className="relative w-[70%] h-[80dvh] mx-auto mt-8">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-[90%] h-full flex justify-center items-center"
        >
          {noticias.map((noticia) => (
            <SwiperSlide key={noticia.id} className="flex justify-center items-center relative pl-16">
              <motion.img
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                src={noticia.imagen}
                alt={`noticia ${noticia.id}`}
                className="w-[90%] h-[80%] rounded-3xl object-cover "
              />
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-[450px] absolute bottom-8 right-8 p-4 bg-primary text-white font-semibold rounded-3xl shadow-xl"
              >
                {noticia.texto}
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

