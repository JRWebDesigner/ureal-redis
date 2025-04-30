"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { FaChevronRight } from 'react-icons/fa';
import Link from "next/link";
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
 modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  spaceBetween={20}
  slidesPerView={1}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false,
  }}
  loop={true}
        className="max-w-5xl mx-auto"
      >
 <SwiperSlide key="produccion-musical">
  <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center">
    <div>
      <img
        src="/Images/curso1.jpg" // Reemplaza con la ruta correcta
        alt="PRODUCCIÓN MUSICAL y MUSIC BUSINESS"
        width={500}
        height={500}
        className="rounded-xl w-[500px] h-[500px] object-cover"
      />
    </div>

    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">PRODUCCIÓN MUSICAL y MUSIC BUSINESS</h3>
      <p className="text-sm text-gray-700 mb-4">¿Qué aprenderás?</p>
      <ul className="text-sm text-gray-800 list-decimal list-inside mb-4 space-y-1">
        <li>Semana 1: Fundamentos de la producción musical</li>
        <li>Semana 2: Grabación y construcción musical</li>
        <li>Semana 3: Diseño sonoro y contexto industrial</li>
        <li>Semana 4: Creación, lanzamiento y evaluación</li>
      </ul>
      <p className="mb-1"><strong>Precio:</strong> Bs. 700</p>
      <p className="mb-1"><strong>Duración:</strong> 1 mes (lunes, miércoles y viernes de 19:00 a 20:30)</p>
      <p className="mb-4"><strong>Docente:</strong> Especialista en producción musical</p>
      <p className="mb-4"><strong>Inicio:</strong> 14 de abril</p>
      <p className="mb-4"><strong>Certificación:</strong> Experto</p>
      <Link href="#inscripcion" className="inline-flex items-center text-blue-600 hover:underline font-medium">
        Inscríbete <FaChevronRight className="ml-2" />
      </Link>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide key="apertura-empresas">
  <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center">
    <div>
      <img
        src="/Images/curso2.jpg" // Reemplaza con la ruta correcta
        alt="APRENDA APERTURAR EMPRESAS ANTE LA AGEMED"
        width={500}
        height={500}
        className="rounded-xl w-[500px] h-[500px] object-cover"
      />
    </div>

    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">APRENDA APERTURAR EMPRESAS ANTE LA AGEMED</h3>
      <p className="text-sm text-gray-700 mb-4">¿Qué aprenderás?</p>
      <ul className="text-sm text-gray-800 list-decimal list-inside mb-4 space-y-1">
        <li>BASE LEGAL</li>
        <li>CLASIFICACIÓN</li>
        <li>REQUISITOS</li>
        <li>COMO REALIZAR EL TRAMITE</li>
        <li>INFRAESTRUCTURA</li>
        <li>EQUIPAMIENTO</li>
        <li>INSPECCION</li>
        <li>Y RESOLVERAS TUS DUDAS</li>
      </ul>
      <p className="mb-1"><strong>Precio:</strong> Bs. 20</p>
      <p className="mb-1"><strong>Duración:</strong> 3 días</p>
      <p className="mb-4"><strong>Docente:</strong> Q.F. Dra Marianela Apaza</p>
      <Link href="#inscripcion" className="inline-flex items-center text-blue-600 hover:underline font-medium">
        Inscríbete <FaChevronRight className="ml-2" />
      </Link>
    </div>
  </div>
</SwiperSlide>

<SwiperSlide key="marketing-excelencia">
  <div className="bg-white rounded-xl shadow-lg p-6 grid md:grid-cols-2 gap-6 items-center">
    <div>
      <img
        src="/Images/curso3.jpg" // Reemplaza con la ruta correcta
        alt="Contenidos de Marketing de Excelencia"
        width={500}
        height={500}
        className="rounded-xl w-[500px] h-[500px] object-cover"
      />
    </div>

    <div>
      <h3 className="text-xl font-bold mb-2 text-gray-800">Taller especializado en: TÉCNICAS DE PROCEDIMIENTO CIVIL</h3>
      <p className="text-sm text-gray-800 mb-4">
El procedimiento civil en Bolivia es esencial para asegurar la tutela efectiva de derechos, pero su correcta aplicación requiere manejar técnicas procesales que faciliten una conducción eficiente del litigio, una adecuada presentación de pruebas y el cumplimiento de los requisitos legales.
Días: martes 6 y jueves 8 <br/>
Horas: De 19:30 a 21:30 <br/>
Modalidad: Virtual Sincrónico <br/>
Docente: Abog. Tatiana Flores E. <br/>
</p>
      <Link href="#inscripcion" className="inline-flex items-center text-blue-600 hover:underline font-medium">
        Inscríbete <FaChevronRight className="ml-2" />
      </Link>
    </div>
  </div>
      </SwiperSlide>
    </Swiper>
    </section>
  );
};

export default CourseCarousel;

