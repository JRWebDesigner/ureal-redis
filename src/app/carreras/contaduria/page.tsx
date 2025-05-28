
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
      { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
      { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
      { codigo: "MAT101-2", nombre: "Matemáticas II" },
      { codigo: "FIN101-2", nombre: "Finanzas I" },
      { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
      { codigo: "PSI101-2", nombre: "Psicología Organizacional" },
      { codigo: "ENG101-2", nombre: "Inglés II" }
    ]
  },
  {
    nombre: "Tercer Semestre",
    materias: [
      { codigo: "COM101-3", nombre: "Computación para la Administración" },
      { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
      { codigo: "FIN102-3", nombre: "Finanzas II" },
      { codigo: "MER101-3", nombre: "Mercadotecnia" },
      { codigo: "CDA101-3", nombre: "Estadística Administrativa" },
      { codigo: "RHH101-3", nombre: "Recursos Humanos" },
      { codigo: "ENG102-3", nombre: "Inglés III" }
    ]
  },
  {
    nombre: "Cuarto Semestre",
    materias: [
      { codigo: "FEP104-4", nombre: "Formulación y Evaluación de Proyectos" },
      { codigo: "EDS101-4", nombre: "Ecología y Desarrollo Sostenible" },
      { codigo: "DER104-4", nombre: "Legislación Aduanera" },
      { codigo: "COI101-4", nombre: "Comunidad Intercultural" },
      { codigo: "ANI103-4", nombre: "Ambiente de Negocios Internacionales" },
      { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
      { codigo: "ENG103-4", nombre: "Inglés IV" }
    ]
  },
  {
    nombre: "Quinto Semestre",
    materias: [
      { codigo: "DER105-5", nombre: "Comercio Exterior" },
      { codigo: "IDM104-5", nombre: "Investigación de Mercados I" },
      { codigo: "CON103-5", nombre: "Contabilidad Administrativa" },
      { codigo: "ADF105-5", nombre: "Administración Financiera" },
      { codigo: "CDA103-5", nombre: "Análisis de Decisiones" },
      { codigo: "ECO104-5", nombre: "Economía Política Internacional" },
      { codigo: "ENG104-5", nombre: "Inglés V" }
    ]
  },
  {
    nombre: "Sexto Semestre",
    materias: [
      { codigo: "ANI105-6", nombre: "Análisis de Mercados Internacionales" },
      { codigo: "CDA104-6", nombre: "Administración de Operaciones" },
      { codigo: "ECO103-6", nombre: "Organismos y Regulaciones Int." },
      { codigo: "ADF106-6", nombre: "Finanzas Internacionales" },
      { codigo: "ANI104-6", nombre: "Sistemas y Operaciones de Comercio Int." },
      { codigo: "DDE101-6", nombre: "Desarrollo de Emprendedores" },
      { codigo: "ENG105-6", nombre: "Inglés VI" }
    ]
  },
  {
    nombre: "Séptimo Semestre",
    materias: [
      { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
      { codigo: "ANI106-7", nombre: "Análisis de Competitividad Internacional" },
      { codigo: "CDA105-7", nombre: "Logística Empresarial" },
      { codigo: "DER107-7", nombre: "Seminario de Derecho Comercial I y II" },
      { codigo: "DER106-7", nombre: "Merceología Aduanera" },
      { codigo: "ECO104-7", nombre: "Seminario Integrador de Comercio Int." },
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
      { codigo: "TDC107", nombre: "Técnicas de Consultoría" },
      { codigo: "PEE-101", nombre: "Política y Estrategia Empresarial" },
      { codigo: "MDS106", nombre: "Mercadotecnia de Servicios" }
    ]
  }
];
  return(
    <>
      <Hero2 titulo="Aquí aprenderá, como revolucionar el mundo de la contabilidad"/>
      
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
              src='/carreras/contaduria/img1.png' 
              className='relative z-20 rounded-3xl h-[400px] md:h-[500px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
            <motion.img 
              src='/carreras/contaduria/img2.png' 
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
            Contaduría Pública
          </motion.h2>
          <motion.div 
            className="pl-4 border-l-2 border-white flex flex-col gap-7"
            variants={containerVariants}
          >
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              La carrera de Contaduría Pública en la UREAL ofrece una formación integral que combina conocimientos técnicos, éticos y prácticos, preparando a los estudiantes para enfrentar los desafíos del entorno empresarial actual. Con un enfoque en la excelencia académica y el compromiso social, la UREAL forma profesionales capaces de garantizar la confianza en la información financiera y contribuir al desarrollo económico del país.


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
               Formar profesionales en Contaduría Pública con sólidos principios éticos, comprometidos con la excelencia y la responsabilidad social, capaces de diseñar, implementar y supervisar sistemas contables que garanticen la transparencia y eficiencia en la gestión financiera de organizaciones públicas y privadas.<br />
              🔹 Visión:<br />
               Ser reconocidos como la carrera líder en formación de profesionales en Contaduría Pública en Bolivia, destacándonos por nuestra excelencia académica, innovación pedagógica y compromiso con la responsabilidad social, contribuyendo al fortalecimiento del sistema financiero nacional e internacional.
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
         Formar profesionales en Contaduría Pública con competencias técnicas, éticas y sociales, capaces de desempeñarse eficazmente en el diseño, implementación y supervisión de sistemas contables que contribuyan al desarrollo económico y social del país.
        </motion.p> 
        <motion.div 
          className='flex gap-10 justify-center items-center flex-wrap my-7'
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/contaduria/img4.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Desarrollar habilidades técnicas en contabilidad
</h3>
            <p className='relative z-10 opacity-80'>Desarrollar habilidades técnicas en contabilidad

            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/contaduria/img5.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Fomentar valores éticos
</h3>
            <p className='relative z-10 opacity-80'>Responsabilidad social en la práctica profesional, promoviendo la transparencia y confianza en la información financiera.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/contaduria/img7.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Formación práctica</h3>
            <p className='relative z-10 opacity-80'>A través de pasantías y proyectos en colaboración con empresas e instituciones, fortaleciendo la vinculación con el entorno laboral.
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
          Perfil  del Profesional Licenciatura en Contaduría Pública
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto opacity-80 text-center'
          variants={itemVariants}
        >
          El Licenciado en Contaduría Pública de la UREAL es un profesional ético, competente y responsable, capaz de garantizar la transparencia y eficiencia en la gestión financiera de organizaciones públicas y privadas.
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
              <h3 className="font-bold text-lg">Formación Integral y Multidisciplinaria</h3>
              <p className="text-sm mt-2">
                El profesional posee conocimientos profundos en contabilidad, finanzas, auditoría, tributación, derecho y administración, lo que le permite abordar los desafíos organizacionales desde una perspectiva holística y estratégica.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Adaptabilidad y Actualización Continua
</h3>
              <p className="text-sm mt-2">
                En un entorno dinámico y globalizado, se adapta a los cambios tecnológicos y normativos, incorporando herramientas digitales y metodologías innovadoras para optimizar los procesos contables y financieros.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Capacidad Analítica y Crítica</h3>
              <p className="text-sm mt-2">
                Desarrolla habilidades analíticas y críticas que le permiten interpretar y evaluar información financiera compleja, identificar riesgos y oportunidades, y proponer soluciones efectivas para mejorar la eficiencia organizacional.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Liderazgo y Gestión Estratégica:</h3>
              <p className="text-sm mt-2">
                Capacitado para asumir roles de liderazgo en áreas como contabilidad, auditoría, finanzas y administración, contribuye al diseño e implementación de estrategias que alinean los objetivos organizacionales con las mejores prácticas de gestión.
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
              src="/carreras/contaduria/icono1.png" 
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
              src="/carreras/contaduria/icono2.png" 
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
              src="/carreras/contaduria/icono3.png" 
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
          Aprende IA
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center flex-wrap gap-10 px-16'
          variants={containerVariants}
        >
          <motion.img 
            src='/carreras/contaduria/img3.jpg' 
            className='rounded-3xl w-[80%] h-[330px] md:w-[670px] md:h-[670px] object-cover'
            variants={slideInFromLeft}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className='flex justify-around md:grid grid-cols-2 grid-rows-2 items-center gap-10 flex-wrap'
            variants={containerVariants}
          >
            {['/carreras/contaduria/img4.jpg', '/carreras/contaduria/img5.jpg', '/carreras/contaduria/img6.jpg', '/carreras/contaduria/img7.jpg'].map((img, index) => (
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
          Aprende a usar IA
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="text-primary font-bold text-2xl leading-tight w-full md:w-1/3"
            variants={slideInFromLeft}
          >
            ¡Impulsa tu carrera contable con Inteligencia Artificial!
          </motion.div>
          <motion.div 
            className="text-[#555] w-full md:w-2/3 space-y-2 border-t-4 md:border-t-0 md:border-l-4 border-primary pl-4"
            variants={slideInFromRight}
          >
            <p>
              ¿Qué aprenderás?
            </p>
            <br />
            <p>
              Automatización de procesos contables: Optimiza tareas repetitivas y mejora la eficiencia de tus procesos.

            </p>
            <br />
            <p>
              Análisis de datos con IA: Utiliza herramientas avanzadas para interpretar grandes volúmenes de información y tomar decisiones informadas.
            </p>
            <br />
            <p>
              Creación de agentes GPT personalizados: Diseña asistentes virtuales que te ayuden en tareas específicas de contabilidad.

            </p>
            <br />
            <p>
              Implementación práctica de IA en escenarios reales: Aplica lo aprendido en situaciones cotidianas del ámbito contable.
            </p>
            <br /><br />
            <p>
               ¿Quién te guiará?
            </p>
            <br />
            <p>
              Nuestros cursos están a cargo de licenciados altamente calificados, apasionados por la tecnología y la educación. Contarás con el apoyo de expertos que te acompañarán en cada paso de tu aprendizaje.
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
