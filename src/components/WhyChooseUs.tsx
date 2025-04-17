"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaHandshake, FaBrain, FaCertificate, FaChartLine } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const careers = [
  { title: "Administración Financiera", img: "/carreras/PFinanciera.jpg", slug: "/administracion-financiera" },
  { title: "Comercio Internacional", img: "/carreras/PComercio.jpg", slug: "/comercio-internacional" },
  { title: "Comunicación Audiovisual", img: "/carreras/PAudiovisual.jpg", slug: "/comunicacion-audiovisual" },
  { title: "Mercadotecnia", img: "/carreras/PMercadotecnia.jpg", slug: "/mercadotecnia" },
  { title: "Ingeniería en Sistemas y Computación Administrativa", img: "/carreras/PSistemas-computacion.jpg", slug: "/ingenieria-sistemas" },
  { title: "Administración Turística y Hotelería", img: "/carreras/PTurismo.jpg", slug: "/administracion-turistica" },
  { title: "Administración de Empresas", img: "/carreras/PAdministracion.jpg", slug: "/administracion-empresas" },
  { title: "Contaduría Pública", img: "/carreras/PContaduria.jpg", slug: "/contaduria-publica" },
  { title: "Ingeniería Comercial", img: "/carreras/PIngenieria-comercial.jpg", slug: "/ingenieria-comercial" },
  { title: "Derecho", img: "/carreras/PDerecho.jpg", slug: "/derecho" }
];


const WhyChooseUs = () => {
  return (
    <section className="w-[80%] mx-auto p-8 bg-white text-gray-800 my-9">
      <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-6">
        <div className="md:w-[35%]">
          <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="mb-6 text-gray-600">
            Explora los beneficios de nuestras carreras, diseñadas para impulsar tu
            crecimiento profesional y adaptarse a las demandas del mercado laboral actual.
          </p>
          <ul className="space-y-4 flex justify-center items-center flex-col text-lg md:text-xl pb-9">
            <li className="flex flex-col md:flex-row items-center gap-2"><FaChalkboardTeacher className='text-primary'/> Experiencia de aprendizaje presencial impartida por expertos</li>
            <li className="flex flex-col md:flex-row items-center gap-2"><FaHandshake  className='text-primary'/> Crea redes de contactos para ampliar tu círculo profesional</li>
            <li className="flex  flex-col md:flex-row items-center gap-2"><FaBrain  className='text-primary'/> Proceso de aprendizaje flexible para que estudies a tu propio ritmo</li>
            <li className="flex  flex-col md:flex-row items-center gap-2"><FaCertificate  className='text-primary'/> Certificación reconocida que valida tus habilidades</li>
            <li className="flex  flex-col md:flex-row items-center gap-2"><FaChartLine  className='text-primary'/> Habilidades prácticas de marketing para obtener mejores resultados</li>
          </ul>
          <Link href="#inscripcion" className="mx-auto w-[200px] mt-22 px-6 py-2 cursor-pointer bg-gradient-to-b from-secondary to-primary text-white rounded-full shadow hover:bg-blue-700">
            Carreras
          </Link>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          slidesPerView={1}
          spaceBetween={16}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 1 }
          }}
          className="w-[100%] md:w-[48%] block p-4"
        >
          {[0, 1, 2].map((groupIndex) => (
            <SwiperSlide key={groupIndex}>
  <div className="grid grid-cols-2 gap-4">
    {careers.slice(groupIndex * 4, groupIndex * 4 + 4).map((career, index) => (
      <Link 
        href={`/pregrado/${career.slug}`} 
        key={career.slug} 
        className="relative block rounded-xl overflow-hidden shadow-lg group"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
          className='relative'
        >

          <img
            src={career.img}
            alt={career.title}
            className="w-full h-58 object-cover transition-transform duration-500 group-hover:scale-110"
          />

          <div className="md:hidden absolute bottom-0 left-0 right-0  bg-gradient-to-t from-blue-700 via-blue-500/70 to-transparent to-transparent p-4 text-white">
            <h3 className="text-sm font-bold leading-snug">{career.title}</h3>
          </div>

          <div className="hidden md:block absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-700 via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-white">
  <h3 className="text-sm font-bold leading-snug">{career.title}</h3>
</div>

        </motion.div>
      </Link>
    ))}
  </div>
</SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default WhyChooseUs;

