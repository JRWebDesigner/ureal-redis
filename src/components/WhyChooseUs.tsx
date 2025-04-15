"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaChalkboardTeacher, FaHandshake, FaBrain, FaCertificate, FaChartLine, FaLink } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

const careers = [
  { title: "COMERCIO INTERNACIONAL", img: "/comercio.jpg", slug: "comercio-internacional" },
  { title: "INGENIERÍA EN SISTEMAS", img: "/sistemas.jpg", slug: "ingenieria-en-sistemas" },
  { title: "COMUNICACIÓN AUDIOVISUAL", img: "/comunicacion.jpg", slug: "comunicacion-audiovisual" },
  { title: "MERCADOTECNIA", img: "/mercadotecnia.jpg", slug: "mercadotecnia" },
  { title: "ADMINISTRACIÓN DE EMPRESAS", img: "/administracion.jpg", slug: "administracion-de-empresas" },
  { title: "PSICOLOGÍA", img: "/psicologia.jpg", slug: "psicologia" },
  { title: "CONTADURÍA PÚBLICA", img: "/contaduria.jpg", slug: "contaduria-publica" },
  { title: "DERECHO", img: "/derecho.jpg", slug: "derecho" },
  { title: "DISEÑO GRÁFICO", img: "/diseno.jpg", slug: "diseno-grafico" },
  { title: "NEGOCIOS INTERNACIONALES", img: "/negocios.jpg", slug: "negocios-internacionales" }
];

const WhyChooseUs = () => {
  return (
    <section className="container mx-auto p-8 bg-white text-gray-800 my-9">
      <div className="grid md:flex justify-center items-center gap-6">
        <div className="w-[35%]">
          <h2 className="text-4xl font-bold mb-4">¿Por qué elegirnos?</h2>
          <p className="mb-6 text-gray-600">
            Explora los beneficios de nuestras carreras, diseñadas para impulsar tu
            crecimiento profesional y adaptarse a las demandas del mercado laboral actual.
          </p>
          <ul className="space-y-4 text-blue-700 text-xl">
            <li className="flex items-center gap-2"><FaChalkboardTeacher /> Experiencia de aprendizaje presencial impartida por expertos</li>
            <li className="flex items-center gap-2"><FaHandshake /> Crea redes de contactos para ampliar tu círculo profesional</li>
            <li className="flex items-center gap-2"><FaBrain /> Proceso de aprendizaje flexible para que estudies a tu propio ritmo</li>
            <li className="flex items-center gap-2"><FaCertificate /> Certificación reconocida que valida tus habilidades</li>
            <li className="flex items-center gap-2"><FaChartLine /> Habilidades prácticas de marketing para obtener mejores resultados</li>
          </ul>
          <Link href="#inscripcion" className="mt-6 px-6 py-2 cursor-pointer bg-gradient-to-b from-secondary to-primary text-white rounded-full shadow hover:bg-blue-700">
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
          className="w-[40%] hidden md:block"
        >
          {[0, 1, 2].map((groupIndex) => (
            <SwiperSlide key={groupIndex}>
              <div className="grid grid-cols-2 gap-4">
                {careers.slice(groupIndex * 4, groupIndex * 4 + 4).map((career, index) => (
                  <Link href={`/pregrado/${career.slug}`} key={career.slug} className="relative block rounded-xl overflow-hidden shadow-lg group">
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <img
                        src={career.img}
                        alt={career.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-700 via-blue-500/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-4 text-white flex flex-col justify-end">
                        <h3 className="text-sm font-bold leading-snug mb-1">{career.title}</h3>
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

