
 "use client"
import Hero2 from '@/components/carreras/Hero2'
import Link from 'next/link'
import styles from '../textofondo.module.css'
import { useState } from 'react'
import { motion } from 'framer-motion'

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
}

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.6 } }
}

export default function PageCarrera(){
  const [showModal, setShowModal] = useState(false)
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(0)
    const semestres = [
      {
        nombre: "Primer Semestre",
        materias: [
          { codigo: "MAT100-1", nombre: "Matemáticas I" },
          { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
          { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
          { codigo: "ADM100-1", nombre: "Administración" },
          { codigo: "CON100-1", nombre: "Contabilidad Básica" },
          { codigo: "ECO100-1", nombre: "Principios de Microeconomía" },
          { codigo: "ENG100-1", nombre: "Inglés I" }
        ]
      },
      {
        nombre: "Segundo Semestre",
        materias: [
          { codigo: "TUH100-2", nombre: "Introducción al Turismo" },
          { codigo: "ECO101-2", nombre: "Principios de Microeconomía" },
          { codigo: "MAT101-2", nombre: "Matemáticas II" },
          { codigo: "TUH101-2", nombre: "Geografía Turística" },
          { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
          { codigo: "TUH102-2", nombre: "Seminario Artístico y Cultural" },
          { codigo: "ENG101-2", nombre: "Inglés II" }
        ]
      },
      {
        nombre: "Tercer Semestre",
        materias: [
          { codigo: "TUH103-3", nombre: "Producción de Alimentos y Bebidas" },
          { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
          { codigo: "CDC101-3", nombre: "Cultura de Calidad" },
          { codigo: "MER101-3", nombre: "Mercadotecnia I" },
          { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
          { codigo: "RHH101-3", nombre: "Recursos Humanos" },
          { codigo: "ENG102-3", nombre: "Inglés III" }
        ]
      },
      {
        nombre: "Cuarto Semestre",
        materias: [
          { codigo: "TUH104-4", nombre: "Operación y Servicios de Alimentos y Bebidas" },
          { codigo: "DDE101-4", nombre: "Desarrollo de Emprendedores" },
          { codigo: "EDS101-4", nombre: "Ecología y Desarrollo Sostenible" },
          { codigo: "CON103-4", nombre: "Contabilidad Administrativa" },
          { codigo: "CDD102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
          { codigo: "TUH105-4", nombre: "Administración Hotelera" },
          { codigo: "ENG103-4", nombre: "Inglés IV" }
        ]
      },
      {
        nombre: "Quinto Semestre",
        materias: [
          { codigo: "TUH106-5", nombre: "Técnicas de Guiaje y Manejo de Grupos" },
          { codigo: "IDM104-5", nombre: "Investigación de Mercados I" },
          { codigo: "TUH107-5", nombre: "Operación y División de Cuartos" },
          { codigo: "TUH108-5", nombre: "Sistema de Información para Hotelería y Turismo" },
          { codigo: "TUH109-5", nombre: "Mercadotecnia y Ventas en Hotelería y Turismo" },
          { codigo: "TUH110-5", nombre: "Gestión de Espacios Naturales y Turismo" },
          { codigo: "ENG104-5", nombre: "Inglés V" }
        ]
      },
      {
        nombre: "Sexto Semestre",
        materias: [
          { codigo: "TUH111-6", nombre: "Mantenimiento de Instalaciones Hoteleras" },
          { codigo: "TUH112-6", nombre: "Etnografía y Folclore de Bolivia" },
          { codigo: "TUH113-6", nombre: "Ordenamiento Turístico del Territorio" },
          { codigo: "COM101-6", nombre: "Computación para la Administración" },
          { codigo: "TUH114-6", nombre: "Protocolo y Adm. de Grupos y Convenciones" },
          { codigo: "TUH115-6", nombre: "Sem. Integrador de Dir. de Emp. Turísticas" },
          { codigo: "ENG105-6", nombre: "Inglés VI" }
        ]
      },
      {
        nombre: "Séptimo Semestre",
        materias: [
          { codigo: "TDC107-7", nombre: "Técnicas de Consultoría" },
          { codigo: "TUH116-7", nombre: "Museología" },
          { codigo: "TUH117-7", nombre: "Adm. de la Calidad en Org. de Servicio" },
          { codigo: "TUH118-7", nombre: "Desarrollo de Proyectos Tur. y Hot." },
          { codigo: "TUH119-7", nombre: "Sis. de Operación e Inf. de Agencias de Viajes" },
          { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
          { codigo: "SDG107-7", nombre: "Seminario de Grado I" }
        ]
      },
      {
        nombre: "Octavo Semestre",
        materias: [
          { codigo: "SDG108-8", nombre: "Seminario de Grado II" },
          { codigo: "PRE108-8", nombre: "Práctica Empresarial" }
        ]
      },
      {
        nombre: "Materias Complementarias",
        materias: [
          { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
          { codigo: "LTD105", nombre: "Legislación Turística y Derecho de la Emp." },
          { codigo: "PEE101", nombre: "Política y Estrategia Empresarial" },
          { codigo: "PUB101", nombre: "Publicidad y Promoción" }
        ]
      }
    ];
  return(
    <>
      <Hero2 titulo="Transforma tu pasión por los viajes en una carrera de éxito"/>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="grid md:grid-cols-2 bg-dark p-10 mb-16"
      >
         <motion.div 
           variants={slideInFromLeft}
           className='relative flex justify-center items-center mb-5'
         >
            <motion.img 
              src='/carreras/turistica/img1.png' 
              className='relative z-20 rounded-3xl h-[400px] md:h-[500px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
            <motion.img 
              src='/carreras/turistica/img2.png' 
              className='-ml-22 rounded-3xl h-[470px] md:h-[570px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
         </motion.div>
         <motion.div 
           variants={slideInFromRight}
           className='max-w-6xl flex flex-col gap-7 text-white'
         >
          <motion.h2 
            className='text-4xl md:text-5xl'
            variants={itemVariants}
          >
            ADMINISTRACIÓN TURISTICA Y HOTELERÍA
          </motion.h2>
          <motion.div 
            className="pl-4 border-l-2 border-white flex flex-col gap-7"
            variants={containerVariants}
          >
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              Esta carrera te capacita para generar proyectos estratégicos turísticos, comprometidos con la problemática social de tu entorno, y orientados a la preservación y promoción de los recursos naturales y culturales a través del turismo. Además, te prepara para analizar con una nueva perspectiva las variables que inciden en el mercado hotelero y turístico, estimando situaciones futuras y contribuyendo al desarrollo del sector en Bolivia y a nivel internacional.
            </motion.p>
            <motion.h3 
              className="text-3xl text-semibold"
              variants={itemVariants}
            >
              Misión y Visión
            </motion.h3>
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              🔹 Misión:<br />
               Formar profesionales íntegros y emprendedores, con una sólida formación teórica y práctica, capaces de liderar y gestionar organizaciones turísticas y hoteleras.<br />
              🔹 Visión:<br />
               Nuestra visión es consolidar la carrera como un referente nacional e internacional en la formación de profesionales altamente capacitados. Aspiramos a que nuestros egresados se distingan por su liderazgo, capacidad emprendedora.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="https://wa.link/51zpya" className='mx-auto bg-white px-10 py-3 text-black font-semibold rounded-3xl hover:scale-110 duration-300'>
                Inscribete
              </Link>
            </motion.div>
          </motion.div>
         </motion.div>        
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='relative text-center px-16 my-16'
      >
        <motion.h2 
          className='text-4xl text-primary font-bold'
          variants={itemVariants}
        >
          OBJETIVO GENERAL DE LA CARRERA
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto'
          variants={itemVariants}
        >
         Formar profesionales íntegros con valores éticos y morales, comprometidos con la sociedad y la comunidad, capaces de desarrollar emprendimientos y productos turísticos innovadores, así como la operación de servicios para satisfacer las necesidades de la sociedad y la comunidad. 
        </motion.p> 
        <motion.div 
          className='flex gap-10 justify-center items-center flex-wrap my-7'
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/turistica/img4.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Promover la competencia</h3>
            <p className='relative z-10 opacity-80'>Capacitar al estudiante para crear su empresa dentro de la Industria hotelera.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/turistica/img5.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Formación en Gestión</h3>
            <p className='relative z-10 opacity-80'>Lograr una formación integral que desarrolle en manejo de grupos y liderazgo.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/turistica/img7.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Desarrollo de Técnicas y Prácticas</h3>
            <p className='relative z-10 opacity-80'>Proporcionar conocimientos y habilidades prácticas en áreas clave, para que puedan incursionar en la actividad hotelera.
            </p>
          </motion.div>        
        </motion.div>     
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16 px-7'
      >
        <motion.h2 
          className='text-4xl font-bold text-center'
          variants={itemVariants}
        >
          Perfil  del Profesional Lic. en Administración Turística y Hotelería
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto opacity-80 text-center'
          variants={itemVariants}
        >
          El egresado en Administración Turística y Hotelería es un profesional integral con sólida formación teórica, metodológica y técnica, capaz de liderar y gestionar organizaciones turísticas y hoteleras con excelencia. 
        </motion.p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 text-[#1d1d1b]"
          variants={containerVariants}
        >
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Dominio de Tecnologías Digitales:</h3>
              <p className="text-sm mt-2">
                Maneja eficientemente las Tecnologías de la Información y Comunicación (TIC) y herramientas digitales, importantes para la modernización de los servicios turísticos y hoteleros en un entorno globalizado.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Compromiso Ético y Responsabilidad Social
</h3>
              <p className="text-sm mt-2">
                Se rige por un alto compromiso ético y social, promoviendo prácticas sostenibles, el respeto por la cultura local y la inclusión de comunidades en el desarrollo turístico, asegurando un impacto positivo en la sociedad.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Liderazgo y Coordinación de Proyectos: </h3>
              <p className="text-sm mt-2">
                Es capaz de liderar equipos y coordinar proyectos orientados a la innovación en la industria turística y hotelera.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Gestión Estratégica del Turismo</h3>
              <p className="text-sm mt-2">
                Posee un sólido conocimiento en gestión turística y hotelera, permitiéndole comprender la dinámica del sector y desarrollar estrategias que potencien la competitividad de destinos y servicios.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-dark text-white py-12 px-4 md:px-16"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <motion.div variants={itemVariants}>
            <motion.img 
              src="/carreras/turistica/icono1.png" 
              alt="Ícono prácticas" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Prácticas y Experiencia Laboral</h3>
            <p className="text-sm mb-4">
              La inclusión de la Práctica Empresarial en el plan curricular posibilita que los estudiantes se inserten en entornos reales de comercio internacional, aplicando lo aprendido en situaciones concretas
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowModal(true)} 
            className="cursor-pointer"
          >
            <motion.img 
              src="/carreras/turistica/icono2.png" 
              alt="Ícono plan" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Plan de estudios y Menciones</h3>
            <p className="text-sm mb-4">
              Animated videos may be one of the keys to the success of your business. Our top-ranked cartoonist
              will deliver high-quality services at an affordable price. We also offer animation solutions like 2D
              animation and 3D modeling.
            </p>
          </motion.div>
          {/* Modal de Plan de estudios */}
      {showModal && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center z-50 p-4"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl shadow-xl max-w-6xl w-full max-h-[80dvh] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <motion.h2 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-3xl font-bold text-primary"
                >
                  Plan de estudios
                </motion.h2>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Selector de Semestres */}
                <motion.div 
                  className="flex overflow-x-auto px-4 py-2 bg-blue-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {semestres.map((semestre, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setSemestreSeleccionado(index)}
                      className={`px-4 py-2 mx-1 rounded-md whitespace-nowrap transition-colors ${
                        semestreSeleccionado === index
                          ? 'bg-blue-600 text-white font-medium'
                          : 'bg-white text-black hover:bg-blue-100'
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {semestre.nombre.split(' ')[0]} {semestre.nombre.split(' ')[1]}
                    </motion.button>
                  ))}
                </motion.div>
                
                {/* Contenido del Semestre Seleccionado */}
                <div className="p-6">
                  <motion.h3 
                    className="text-2xl font-bold text-blue-800 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {semestres[semestreSeleccionado].nombre}
                  </motion.h3>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    {semestres[semestreSeleccionado].materias.map((materia, i) => (
                      <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        <span className="font-mono text-sm text-primary">{materia.codigo}</span>
                        <p className="text-black font-medium">{materia.nombre}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
          <motion.div 
            variants={itemVariants}
            
          >
            <motion.img 
              src="/carreras/turistica/icono3.png" 
              alt="Ícono malla" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Malla Curricular</h3>
            <p className="text-sm mb-4">
              Professional photography services for your website and marketing use. Our creative artists will
              produce incredible authentic images so you can present your business in the best light. The service
              includes photo editing.
            </p>
          </motion.div>
        </div>
      </motion.div>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16 px-7'
      >
        <motion.h2 
          className='text-4xl font-bold text-center mb-8'
          variants={itemVariants}
        >
          Aprende Tecnologías de la Información y Comunicación
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center flex-wrap gap-10 px-16'
          variants={containerVariants}
        >
          <motion.img 
            src='/carreras/turistica/img3.jpg' 
            className='rounded-3xl w-[80%] h-[330px] md:w-[670px] md:h-[670px] object-cover'
            variants={slideInFromLeft}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className='flex justify-around md:grid grid-cols-2 grid-rows-2 items-center gap-10 flex-wrap'
            variants={containerVariants}
          >
            {['/carreras/turistica/img4.jpg', '/carreras/turistica/img5.jpg', '/carreras/turistica/img6.jpg', '/carreras/turistica/img7.jpg'].map((img, index) => (
              <motion.img 
                key={index}
                src={img}
                className='rounded-3xl min-w-[90%] max-w-[300px] h-[300px] object-cover'
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.section
        initial="hidden"
        className='px-10 max-w-6xl mx-auto mb-7'
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <motion.h2 
          className={`${styles.textoConImagen} text-5xl md:text-8xl text-center`}
          variants={itemVariants}
        >
          Explora
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="text-primary font-bold text-2xl leading-tight w-full md:w-1/3"
            variants={slideInFromLeft}
          >
            Conoce nuestros viajes y visitas a museos
          </motion.div>
          <motion.div 
            className="text-[#555] w-full md:w-2/3 space-y-2 border-t-4 md:border-t-0 md:border-l-4 border-primary pl-4"
            variants={slideInFromRight}
          >
            <p>
              Nuestros estudiantes hacen visitas a diferentes lugares turísticos y hoteleros como por ejemplo:
            </p>
            <br />
            <p>
                      - Visitas en museos
   <br/>
        - Viajes a lugares turísticos
      <br/>
       - Actividades de Integración cultural.
            </p>
            <br />
            <p>
             Además se fomenta la innovación y el emprendimiento mediante el diseño de proyectos turísticos y hoteleros con: 
            </p>
            <br />
            <p>
                 - Actividades donde se combina la teoría con la practica.
<br />
         -  Debate y análisis de casos prácticos.  
            </p>
            <br />
            <p>
              Y se busca el fortalecimiento de actividades blandas como el trabajo en equipo.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>
      <section className='h-[40dvh] flex justify-center items-center bg-dark text-white flex-col'>
        <h2 className='text-3xl font-bold mb-6'>Recibe noticias y actualizaciones</h2>
        <form className='flex justify-center items-center'>
            <input type='email' className='bg-white rounded-full w-[80%] max-w-[1000px] text-black h-[80px] pr-10 pl-16' placeholder='Ingreas tu email' />
            <button type='submit' className="bg-primary px-8 h-[85px] rounded-full font-bold -ml-14">Suscribete</button>
        </form>
      </section>
    </>
  )
}
