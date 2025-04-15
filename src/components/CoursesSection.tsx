"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';

const courses = [
  {
    id: 1,
    title: "Curso 2: APRENDA APERTURAR EMPRESAS ANTE LA AGEMED",
    image: "/aperturar-importadora.jpg",
    syllabus: [
      "Base legal",
      "Clasificación",
      "Requisitos",
      "Trámites",
      "Infraestructura",
      "Equipamiento",
    ],
    topics: [
      "BASE LEGAL",
      "CLASIFICACIÓN",
      "REQUISITOS",
      "COMO REALIZAR EL TRAMITE",
      "INFRAESTRUCTURA",
      "EQUIPAMIENTO",
      "INSPECCIÓN",
      "Y RESOLVERÁS TUS DUDAS"
    ],
    price: "Bs 20",
    duration: "3 días",
    teacher: "Q.F. Dra Marianela Apaza",
    inscriptionLink: "#"
  }
];

const CourseCarousel = () => {
  return (
    <section className="bg-[#fff7f2] py-12 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Conoce Nuestros Cursos Actuales</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Consulte nuestra amplia gama de cursos diseñados para brindarle las habilidades, el conocimiento y la experiencia
        </p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={20}
        slidesPerView={1}
        className="max-w-5xl mx-auto"
      >
        {courses.map(course => (
          <SwiperSlide key={course.id}>
            <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center">
              <div>
                <Image
                  src={course.image}
                  alt={course.title}
                  width={500}
                  height={500}
                  className="rounded-xl"
                />
                <h3 className="text-lg font-bold mt-4 mb-2">Temario</h3>
                <ul className="space-y-2">
                  {course.syllabus.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-red-600 text-white px-4 py-1.5 rounded-full w-fit font-semibold text-sm"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="text-sm mt-4 text-gray-700">
                  <strong>Expositora:</strong> {course.teacher}<br />
                  Con amplia experiencia en apertura de empresas y conocimiento en temas regulatorios.<br />
                  <strong>Incluye:</strong> Certificado avalado por la Universidad Real, material práctico.
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">{course.title}</h3>
                <p className="text-sm text-gray-700 mb-4">¿Qué aprenderás?</p>
                <ul className="text-sm text-gray-800 list-decimal list-inside mb-4 space-y-1">
                  {course.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
                <p className="mb-1"><strong>Precio:</strong> {course.price}</p>
                <p className="mb-1"><strong>Duración:</strong> {course.duration}</p>
                <p className="mb-4"><strong>Docente:</strong> {course.teacher}</p>
                <a href={course.inscriptionLink} className="inline-flex items-center text-blue-600 hover:underline font-medium">
                  Inscribete <FaChevronRight className="ml-2" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CourseCarousel;

