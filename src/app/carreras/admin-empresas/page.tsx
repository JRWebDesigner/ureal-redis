
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

export default function PageAdmEmpresas(){
  const [showModal, setShowModal] = useState(false)
  const [semestreSeleccionado, setSemestreSeleccionado] = useState(0)

  const semestres = [
    {
      nombre: "Primer Semestre",
      materias: [
        { codigo: "MAT100-1", nombre: "Matemáticas I" },
        { codigo: "LEN100-1", nombre: "Lenguaje y Redacción en Español" },
        { codigo: "MET100-1", nombre: "Metodos y Tecnicas de Estudio" },
        { codigo: "ADM100-1", nombre: "Administracion" },
        { codigo: "CON100-1", nombre: "Contabilidad Basica" },
        { codigo: "ECO100-1", nombre: "Principios de Microeconomia" },
        { codigo: "ENG100-1", nombre: "Inglés I" }
      ]
    },
    {
      nombre: "Segundo Semestre",
      materias: [
        { codigo: "DER101-2", nombre: "Derecho Comercial y Administrativo" },
        { codigo: "ECO101-2", nombre: "Principios de Macroeconomía" },
        { codigo: "MAT101-2", nombre: "Matemáticas II" },
        { codigo: "ADM101-2", nombre: "Adminitración II" },
        { codigo: "CON101-2", nombre: "Contabilidad Intermedia" },
        { codigo: "PSI101-2", nombre: "Psicologia Organizacional" },
        { codigo: "ENG101-2", nombre: "Inglés II" }
      ]
    },
    {
      nombre: "Tercer Semestre",
      materias: [
        { codigo: "COM101-3", nombre: "Computacion para la Administracion" },
        { codigo: "CON102-3", nombre: "Contabilidad de Costos" },
        { codigo: "FIN101-3", nombre: "Finanzas I" },
        { codigo: "GES100-3", nombre: "Gestion de Proyectos" },
        { codigo: "CDA101-3", nombre: "Estadistica Adminitrativa" },
        { codigo: "DRE101-3", nombre: "Desarrollo de Emprendedores" },
        { codigo: "ENG102-3", nombre: "Inglés III" }
      ]
    },
     {
      nombre: "Cuarto Semestre",
      materias: [
        { codigo: "RHH101-4", nombre: "Recursos Humanos" },
        { codigo: "FIN102-4", nombre: "Finanzas II" },
        { codigo: "PSI102-4", nombre: "Desarrollo Organizacional" },
        { codigo: "LI100-4", nombre: "Liderazgo Empresarial" },
        { codigo: "MER101-4", nombre: "Mercadotecnia I" },
        { codigo: "CDA102-4", nombre: "Tec. Cuan. para la Toma de Decisiones" },
        { codigo: "ENG103-4", nombre: "Inglés IV" }
      ]
    },
    {
      nombre: "Quinto Semestre",
      materias: [
        { codigo: "LI102-5", nombre: "Innovación Empresarial" },
        { codigo: "CDA103-5", nombre: "Análisis de Decisiones I" },
        { codigo: "ADC103-5", nombre: "Análisis del Consumidor" },
        { codigo: "PSI103-5", nombre: "Administración de la Producción" },
        { codigo: "ADF103-5", nombre: "Administración Financiera" },
        { codigo: "LI103-5", nombre: "Pensamiento Estratégicos" },
        { codigo: "ENG104-5", nombre: "Inglés V" }
      ]
    },
    {
      nombre: "Sexto Semestre",
      materias: [
        { codigo: "ORO100-6", nombre: "Dirección Estratégica I" },
        { codigo: "CDA104-6", nombre: "Análisis de Decisiones II" },
        { codigo: "DER102-6", nombre: "Derecho de Trabajo" },
        { codigo: "IDM104-6", nombre: "Investigacion de Mercados I" },
        { codigo: "RHH102-6", nombre: "Gest. Estratégica de RRHH" },
        { codigo: "CON104-6", nombre: "Presupuestos" },
        { codigo: "ENG105-6", nombre: "Inglés VI" }
      ]
    },
    {
      nombre: "Séptimo Semestre",
      materias: [
        { codigo: "ORO101-7", nombre: "Dirección Estratégica II" },
        { codigo: "FEP104-7", nombre: "Formulacion y Evaluacion de Proyectos" },
        { codigo: "PSI104-7", nombre: "Gerencia de Calidad" },
        { codigo: "AIF104-7", nombre: "Análisis e Interpretación de Estados Financieros" },
        { codigo: "GPU107-7", nombre: "Gestión Pública" },
        { codigo: "VEP107-7", nombre: "Valores en el Ejercicio Profesional" },
        { codigo: "SDG107-7", nombre: "Seminario de Grado I" }
      ]
    },
    {
      nombre: "Octavo Semestre",
      materias: [
        { codigo: "SDG108-8", nombre: "Seminario de Grado II" },
        { codigo: "PRE108-8", nombre: "Practica Empresarial" }
      ]
    },
    {
      nombre: "Materias Complementarias",
      materias: [
        { codigo: "INA100", nombre: "Idioma Nativo (Aymara o Quechua)" },
        { codigo: "IDM105", nombre: "Investigación de Mercados II" },
        { codigo: "PEE101", nombre: "Politica y Estrategia Empresarial" },
        { codigo: "ECO102-4", nombre: "Economía Financiera" }
      ]
    }
  ]
  return(
    <>
      <Hero2 titulo="Sé el cambio en el mundo empresarial. Ingeniería Comercial con visión nacional e internacional"/>
      
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
              src='/carreras/admin-empresas/img1.png' 
              className='relative z-20 rounded-3xl h-[400px] md:h-[500px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
            <motion.img 
              src='/carreras/admin-empresas/img2.png' 
              className='-ml-22 rounded-3xl h-[470px] md:h-[570px] max-w-1/2 object-cover'
              whileHover={{ scale: 1.02 }}
            />
         </motion.div>
         <motion.div 
           variants={slideInFromRight}
           className='max-w-6xl flex flex-col gap-7 text-white'
         >
          <motion.h2 
            className='text-5xl'
            variants={itemVariants}
          >
            ADMINISTRACIÓN DE EMPRESAS
          </motion.h2>
          <motion.div 
            className="pl-4 border-l-2 border-white flex flex-col gap-7"
            variants={containerVariants}
          >
            <motion.p 
              className="opacity-70"
              variants={itemVariants}
            >
              En un mundo empresarial cada vez más dinámico y globalizado, la carrera de Administración de Empresas se posiciona como una de las opciones más estratégicas para quienes buscan liderar organizaciones con visión de futuro.
              <br /><br />
              La Universidad Real de la Cámara Nacional de Comercio ofrece una formación integral que prepara a los estudiantes para enfrentar los desafíos del entorno empresarial actual y contribuir al desarrollo económico y social de la región.
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
               La carrera de Administración de Empresas en la UReal tiene como misión formar profesionales emprendedores, altamente competitivos y solidarios, capaces de analizar, comprender y transformar la realidad de sus entornos. A través de la investigación continua, la ciencia y la tecnología, los estudiantes adquieren conocimientos y desarrollan capacidades y valores que les permiten enfrentar con disciplina, creatividad y eficiencia los desafíos del siglo XXI .<br />
              🔹 Visión:<br />
               Ser reconocidos como la carrera líder en formación de profesionales en Administración de Empresas en Bolivia, destacándonos por nuestra excelencia académica, innovación pedagógica y compromiso con la responsabilidad social. Aspiramos a que nuestros egresados sean agentes de cambio en el ámbito empresarial, contribuyendo al desarrollo sostenible y al fortalecimiento del tejido empresarial nacional e internacional.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link href="/" className='mx-auto bg-white px-10 py-3 text-black font-semibold rounded-3xl hover:scale-110 duration-300'>
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
          Formar profesionales en Administración de Empresas que apliquen sus conocimientos para analizar e interpretar fenómenos económicos y sociales, permitiéndoles contribuir al desarrollo y competitividad de las organizaciones en un entorno globalizado.
        </motion.p> 
        <motion.div 
          className='flex gap-10 justify-center items-center flex-wrap my-7'
          variants={containerVariants}
        >
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/admin-empresas/img4.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Desarrollar habilidades emprendedoras</h3>
            <p className='relative z-10 opacity-80'>Fomentar la capacidad de identificar oportunidades de negocio, gestionar recursos y liderar equipos.
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/admin-empresas/img5.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Promover la investigación aplicada</h3>
            <p className='relative z-10 opacity-80'>Impulsar la realización de estudios que permitan conocer y comprender las realidades socioeconómicas
            </p>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className='relative bg-[url(/carreras/admin-empresas/img7.jpg)] bg-cover bg-center rounded-3xl w-[380px] min-h-[300px] p-4 text-white flex justify-center items-center flex-col'
          >
            <div className='absolute bg-black/60 w-full h-full rounded-3xl' />
            <h3 className='relative z-10 text-2xl font-bold'>Fortalecer la toma de decisiones</h3>
            <p className='relative z-10 opacity-80'>Capacitar a los estudiantes en el uso de herramientas y técnicas para la planificación, ejecución y evaluación de proyectos.
            </p>
          </motion.div>        
        </motion.div>     
      </motion.section>
      
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16'
      >
        <motion.h2 
          className='text-4xl font-bold text-center'
          variants={itemVariants}
        >
          Perfil del Profesional en Administración de Empresas
        </motion.h2>
        <motion.p 
          className='max-w-6xl mx-auto opacity-80 text-center'
          variants={itemVariants}
        >
          El profesional en Administración de Empresas está capacitado para gestionar eficientemente los recursos humanos, financieros y materiales de una organización, aplicando principios éticos y estratégicos para alcanzar los objetivos empresariales en un entorno competitivo y globalizado.
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
              <h3 className="font-bold text-lg">Planificación y Dirección Estratégica</h3>
              <p className="text-sm mt-2">
                Diseña y ejecuta planes estratégicos que alinean los objetivos organizacionales
                con las oportunidades del mercado, asegurando el crecimiento y sostenibilidad de la empresa.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-t-0 md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Gestión Financiera y Administrativa</h3>
              <p className="text-sm mt-2">
                Administra los recursos financieros mediante la elaboración de presupuestos,
                análisis de costos y evaluación de inversiones, optimizando la rentabilidad y eficiencia operativa.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Liderazgo y Gestión del Talento Humano</h3>
              <p className="text-sm mt-2">
                Desarrolla habilidades de liderazgo para motivar equipos, gestionar el talento humano
                y fomentar un ambiente laboral productivo y ético.
              </p>
            </div>
          </motion.div>
          <motion.div 
            className="p-8 border-t md:border-l border-[#e0e0e0] bg-[#fffaf7]"
            variants={itemVariants}
          >
            <div className="border-l-2 border-primary pl-4">
              <h3 className="font-bold text-lg">Innovación y Adaptabilidad Organizacional</h3>
              <p className="text-sm mt-2">
                Implementa procesos innovadores y se adapta a los cambios del entorno empresarial,
                promoviendo la mejora continua y la competitividad de la organización.
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
              src="/carreras/admin-empresas/icono1.png" 
              alt="Ícono prácticas" 
              className="mx-auto mb-4 w-12 h-12"
              whileHover={{ rotate: 10 }}
            />
            <h3 className="text-lg font-bold mb-2">Prácticas y Experiencia Laboral</h3>
            <p className="text-sm mb-4">
              La inclusión de la Práctica Empresarial en el plan curricular posibilita que los estudiantes
              se inserten en entornos reales de comercio internacional, aplicando lo aprendido en situaciones concretas
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.img 
              src="/carreras/admin-empresas/icono2.png" 
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
          <motion.div 
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowModal(true)} 
            className="cursor-pointer"
          >
            <motion.img 
              src="/carreras/admin-empresas/icono3.png" 
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

      {/* Modal de Malla Curricular */}
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
                  Malla Curricular - Administración de Empresas
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

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className='my-16'
      >
        <motion.h2 
          className='text-4xl font-bold text-center mb-8'
          variants={itemVariants}
        >
          Internacionalízate: Actividades para Conectar y Crecer
        </motion.h2>
        <motion.div 
          className='flex justify-center items-center flex-wrap gap-10 px-16'
          variants={containerVariants}
        >
          <motion.img 
            src='/carreras/admin-empresas/img3.jpg' 
            className='rounded-3xl w-[670px] h-[670px] object-cover'
            variants={slideInFromLeft}
            whileHover={{ scale: 1.02 }}
          />
          <motion.div 
            className='flex justify-around md:grid grid-cols-2 grid-rows-2 items-center gap-10 flex-wrap'
            variants={containerVariants}
          >
            {['/carreras/admin-empresas/img4.jpg', '/carreras/admin-empresas/img5.jpg', '/carreras/admin-empresas/img6.jpg', '/carreras/admin-empresas/img7.jpg'].map((img, index) => (
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
          className={`${styles.textoConImagen} text-8xl text-center`}
          variants={itemVariants}
        >
          Has Real Proyecto
        </motion.h2>
        <motion.div 
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 mt-10"
          variants={containerVariants}
        >
          <motion.div 
            className="text-primary font-bold text-2xl leading-tight w-full md:w-1/3"
            variants={slideInFromLeft}
          >
            <p>Has tus proyectos y</p>
            <p>aprende a</p>
            <p>emprender</p>
          </motion.div>
          <motion.div 
            className="text-[#555] w-full md:w-2/3 space-y-2"
            variants={slideInFromRight}
          >
            <p>
              Aquí en la U Real no solo aprenderás como administrar una organización, sino también como crear tu propia empresa,
              además de conocer lugares que enriquecerán tu espíritu emprendedor.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Convertirás tu idea de negocio en realidad, exponiéndolos en ferias.</li>
              <li>Pondrás en práctica tus habilidades blandas.</li>
              <li>Visitas a distintos lugares.</li>
              <li>Prácticas empresariales</li>
            </ul>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}
