
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
      { codigo: "SOC100-1", nombre: "Introducción a la Sociología" },
      { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
      { codigo: "MET100-1", nombre: "Métodos y Técnicas de Estudio" },
      { codigo: "ED100-1", nombre: "Edición I" },
      { codigo: "PSI100-1", nombre: "Psicología de la comunicación" },
      { codigo: "COM100-1", nombre: "Introducción a la comunicación" },
      { codigo: "ENG100-1", nombre: "Inglés I" }
    ]
  },
  {
    nombre: "Segundo Semestre",
    materias: [
      { codigo: "COI101-2", nombre: "Comunicación intercultural" },
      { codigo: "COM101-2", nombre: "Teorías de la comunicación" },
      { codigo: "LEI101-2", nombre: "Lenguaje de la imagen I" },
      { codigo: "EST101-2", nombre: "Estadística social" },
      { codigo: "CON101-2", nombre: "Lenguaje y Comunicación, semiología y semántica" },
      { codigo: "SON101-2", nombre: "Instalación y operación de equipos audiovisuales" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "SON102-3", nombre: "Teoría del sonido" },
      { codigo: "FOT103-3", nombre: "Fotografía" },
      { codigo: "RAD102-3", nombre: "Radiotécnicas I" },
      { codigo: "LEI102-3", nombre: "Lenguaje de la imagen II" },
      { codigo: "LEN102-3", nombre: "Redacción periodística" },
      { codigo: "COR102-3", nombre: "Comunicación organizacional" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "ED101-4", nombre: "Edición II" },
      { codigo: "LEG103-4", nombre: "Legislación en comunicación" },
      { codigo: "CI103-4", nombre: "Lenguaje cinematográfico" },
      { codigo: "TEV103-4", nombre: "Tv y video I" },
      { codigo: "LEN103-4", nombre: "Técnicas de periodismo especializado" },
      { codigo: "SON103-4", nombre: "Operación técnica del sonido" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "CI104-5", nombre: "Producción cinematográfica" },
      { codigo: "RAD104-5", nombre: "Radiotécnicas II" },
      { codigo: "TEV104-5", nombre: "Tv y video II" },
      { codigo: "ED102-5", nombre: "Edición III" },
      { codigo: "GMA104-5", nombre: "Guión para medios audiovisuales" },
      { codigo: "TEC104-5", nombre: "Teoría del color" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "CI105-6", nombre: "Crítica cinematográfica" },
      { codigo: "COP105-6", nombre: "Comunicación publicitaria" },
      { codigo: "DIB105-6", nombre: "Dibujo, tratamiento y animación 2D" },
      { codigo: "PRO105-6", nombre: "Producción de multimedias" },
      { codigo: "TEV105-6", nombre: "Tv y video III" },
      { codigo: "CAR101-6", nombre: "Comunicación y arte" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "TEV106-7", nombre: "Producción televisiva" },
      { codigo: "TEV107-7", nombre: "Prácticas de realización de programas" },
      { codigo: "VEP107-7", nombre: "Valores en el ejercicio profesional" },
      { codigo: "COP106-7", nombre: "Diseño de campañas persuasivas" },
      { codigo: "DIB106-7", nombre: "Dibujo, tratamiento y animación 3D" },
      { codigo: "LOC106-7", nombre: "Locución para medios audiovisuales" },
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
      { codigo: "PUB107-6", nombre: "Publicidad I" },
      { codigo: "DDE101-6", nombre: "Desarrollo de emprendedores" },
      { codigo: "INA100", nombre: "Idioma Nativo Aymara (originario)" },
      { codigo: "INQ100", nombre: "Idioma Nativo Quechua (originario)" }
    ]
  }
];

  return(
    <>
      <Hero2 titulo="Conoce como crear contenido de calidad y como difundirlo"/>
      
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
              src='/carreras/comunicacion/img1.png' 
              className='relative z-20 rounded-3xl h-[400px] md:h-[500px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
            <motion.img 
              src='/carreras/comunicacion/img2.png' 
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
            COMUNICACIÓN AUDIOVISUAL
          </motion.h2>
          <motion.div 
            className="pl-4 border-l-2 border-white flex flex-col gap-7"
            variants={containerVariants}
          >
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              En un mundo donde la información y la automatización se han convertido en activos estratégicos para el éxito de las organizaciones, esta carrera se orienta a consolidar competencias que permitan a los futuros egresados diseñar, implementar y administrar sistemas de información que optimicen los procesos y potencien la competitividad de las empresas.
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
               Formar comunicadores audiovisuales integrales con sólidas competencias técnicas, analíticas y creativas, capaces de diseñar, producir y gestionar proyectos en el ámbito audiovisual con responsabilidad ética y compromiso social.<br />
              🔹 Visión:<br />
               Posicionarse como un referente en la formación de profesionales capaces de transformar y liderar la industria de los medios mediante la innovación, la interdisciplinariedad y la actualización constante.
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
         Formar comunicadores audiovisuales integrales, con sólidos conocimientos científicos, humanísticos y técnicos, capaces de intervenir creativamente en la producción, dirección y gestión de contenidos audiovisuales. Esta formación les permitirá impulsar la convergencia digital y la comunicación en todas sus formas, respondiendo a las demandas de un entorno mediático en constante evolución.
        </motion.p> 
        <motion.div 
          className='flex gap-10 justify-center items-center flex-wrap my-7'
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comunicacion/img4.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Desarrollar competencias técnicas y creativas</h3>
            <p className='relative z-10 opacity-80'>Proporcionándoles herramientas y conocimientos, para que puedan crear productos de alta calidad que conecten con diversas audiencias.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comunicacion/img5.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Fomentar una visión crítica y ética</h3>
            <p className='relative z-10 opacity-80'>Sensibilizando  sobre la responsabilidad en la creación y difusión de contenidos
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/comunicacion/img7.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Liderares en la transformación digital</h3>
            <p className='relative z-10 opacity-80'>En el ámbito audiovisual, capacitándolos para adaptarse a las nuevas tecnologías y tendencias del mercado, y para gestionar proyectos que integren diversos medios y plataformas de comunicación.
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
          Perfil  del Profesional Licenciatura en Comunicación Audiovisual
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto opacity-80 text-center'
          variants={itemVariants}
        >
          El egresado en Comunicación Audiovisual es un profesional integral con sólida formación técnica, creativa y ética, capaz de diseñar, producir y gestionar contenidos audiovisuales innovadores que responden a las demandas de un mercado globalizado. Su formación le permite intervenir de manera efectiva en la producción, dirección y gestión de proyectos audiovisuales, impulsando la convergencia digital y la comunicación en todas sus formas.
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
              <h3 className="font-bold text-lg">Dominio Técnico y Creativo</h3>
              <p className="text-sm mt-2">
                Posee amplios conocimientos en producción, dirección y gestión de contenidos audiovisuales, con un enfoque en la innovación y el uso de tecnologías digitales avanzadas.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Liderazgo y Gestión de Proyectos
</h3>
              <p className="text-sm mt-2">
                Demuestra habilidades para liderar equipos creativos y gestionar proyectos audiovisuales, integrando distintas disciplinas para la realización de producciones de calidad.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Pensamiento Crítico y Adaptabilidad</h3>
              <p className="text-sm mt-2">
                Posee un pensamiento crítico y analítico que le permite interpretar y transformar la realidad mediática, adaptándose a entornos cambiantes y anticipando tendencias del mercado audiovisual.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Comunicación Eficaz y Responsabilidad Social</h3>
              <p className="text-sm mt-2">
                Se comunica de manera efectiva tanto en contextos tradicionales como en plataformas digitales, con dominio de un segundo idioma, y se rige por altos estándares éticos y de responsabilidad social, orientando su trabajo a la generación de impacto cultural y educativo.  
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
              src="/carreras/comunicacion/icono1.png" 
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
              src="/carreras/comunicacion/icono2.png" 
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
              src="/carreras/comunicacion/icono3.png" 
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
          PRODUCE CONTENIDO CONOCE NUESTRA RADIO PODCAST
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center flex-wrap gap-10 px-16'
          variants={containerVariants}
        >
          <motion.img 
            src='/carreras/comunicacion/img3.jpg' 
            className='rounded-3xl w-[80%] h-[330px] md:w-[670px] md:h-[670px] object-cover'
            variants={slideInFromLeft}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className='flex justify-around md:grid grid-cols-2 grid-rows-2 items-center gap-10 flex-wrap'
            variants={containerVariants}
          >
            {['/carreras/comunicacion/img4.jpg', '/carreras/comunicacion/img5.jpg', '/carreras/comunicacion/img6.jpg', '/carreras/comunicacion/img7.jpg'].map((img, index) => (
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
          Podcast
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="text-primary font-bold text-2xl leading-tight w-full md:w-1/3"
            variants={slideInFromLeft}
          >
            Conoce nuestra radio podcast
          </motion.div>
          <motion.div 
            className="text-[#555] w-full md:w-2/3 space-y-2 border-t-4 md:border-t-0 md:border-l-4 border-primary pl-4"
            variants={slideInFromRight}
          >
            <p>
              ¡En la carrera de Comunicación Audiovisual de la Universidad Real de la Cámara Nacional de Comercio, ganaras bastante experiencia con nuestras actividades de Recreación.
            </p>
            <br />
            <p>
              Nuestros estudiantes tienen una radio podcast donde crean contenido para YouTube
   

   
            </p>
            <br />
            <p>
              
   - Los estudiantes están constantemente creando contenido para redes
            </p>
            <br />
            <p>
              
   - Además se cuenta con un estudio de grabación

            </p>
            <br />
            <p>
              - Además que prontamente habrán actividades de competencia de Cortometraje.
            </p>
            <br />
            <p>
            - Participación en las redes de la Universidad, como Facebook, TikTok, etc
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
